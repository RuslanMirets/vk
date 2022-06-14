import { ConfigService } from '@nestjs/config';
import { GoogleCodeDto } from './dto/google-code.dto';
import { Injectable, BadRequestException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { IGoogleProfile, IResGoogleUser } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
		private readonly jwtService: JwtService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService,
	) {}

	// RED Group
	// async validateUser(details: IResGoogleUser) {
	// 	const user = await this.repository.findOneBy({ email: details.email });
	// 	if (!user) return this.repository.create(details);
	// 	return user;
	// }

	async validateUser(details: IResGoogleUser) {
		const { email } = details;
		const user = await this.repository.findOneBy({ email: email });
		if (user) {
			await this.repository.update({ email }, details);
			console.log('Updated');
			return { user, accessToken: await this.issueAccessToken(String(user.id)) };
		}
		return this.createUser(details);
		// Alter
		// if (!user) return this.createUser(details);
		// return { user, accessToken: await this.issueAccessToken(String(user.id)) };
	}

	createUser(details: IResGoogleUser) {
		const user = this.repository.create(details);
		return this.repository.save(user);
	}

	async issueAccessToken(userId: string) {
		const data = { id: userId };
		return await this.jwtService.signAsync(data, {
			expiresIn: '31d',
		});
	}

	async getGoogleToken(code: string) {
		return firstValueFrom(
			this.httpService
				.post<{ access_token: string }>('https://oauth2.googleapis.com/token', {
					code,
					client_id: this.configService.get('GOOGLE_CLIENT_ID'),
					client_secret: this.configService.get('GOOGLE_CLIENT_SECRET'),
					redirect_uri: 'http://localhost:3000/google-auth',
					grant_type: 'authorization_code',
				})
				.pipe(map((res) => res.data)),
		);
	}

	async getGoogleProfile(accessToken: string) {
		return firstValueFrom(
			this.httpService
				.get<IGoogleProfile>('https://www.googleapis.com/oauth2/v3/userinfo', {
					headers: {
						Authorization: `Bearer${accessToken}`,
					},
				})
				.pipe(map((res) => res.data)),
		);
	}

	async googleLogin({ code }: GoogleCodeDto) {
		if (!code) {
			throw new BadRequestException('Google code not found!');
		}

		try {
			const { access_token } = await this.getGoogleToken(code);

			const profile = await this.getGoogleProfile(access_token);

			return this.validateUser({
				email: profile.email,
				name: profile.name,
				avatarPath: profile.picture,
			});
		} catch (error) {
			throw new HttpException(error.response.data, error.response.status);
		}

		return;
	}
}
