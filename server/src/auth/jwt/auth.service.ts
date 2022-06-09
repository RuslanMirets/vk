import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { IResGoogleUser } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
		private readonly jwtService: JwtService,
	) {}

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
			return user;
		}
		return this.createUser(details);
	}

	createUser(details: IResGoogleUser) {
		const user = this.repository.create(details);
		return this.repository.save(user);
	}

	// login(user: IGoogleProfile) {
	// 	const payload: JwtPayload = { username: user.username, sub: user.id };
	// 	return { accessToken: this.jwtService.sign(payload) };
	// }

	async issueAccessToken(userId: string) {
		const data = { id: userId };
		return await this.jwtService.signAsync(data, {
			expiresIn: '31d',
		});
	}

	googleLogin(req) {
		if (!req.user) {
			return 'No user from google';
		}

		return {
			message: 'User information from google',
			user: req.user,
		};
	}

	googleLogout(req) {
		req.logout();
	}
}
