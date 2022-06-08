import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { IResGoogleUser } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
	constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

	async validateUser(details: IResGoogleUser) {
		const { email } = details;
		const user = await this.repository.findOne({ where: { email: email } });
		if (!user) return this.repository.create(details);
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
