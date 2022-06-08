import { UserEntity } from './../user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export type Done = (err: Error, user: UserEntity) => void;

@Injectable()
export class SessionSerializer extends PassportSerializer {
	constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {
		super();
	}

	serializeUser(user: UserEntity, done: Done) {
		done(null, user);
	}

	async deserializeUser(user: UserEntity, done: Done) {
		const userDB = await this.repository.findOneBy({ email: user.email });
		return userDB ? done(null, userDB) : done(null, null);
	}
}
