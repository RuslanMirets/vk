import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

	async findAll() {
		return await this.repository.find();
	}

	async findOneById(id: number) {
		return await this.repository.findOneBy({ id: id });
	}

	async update(id: number, dto: UserDto) {
		return await this.repository.update(id, dto);
	}
}
