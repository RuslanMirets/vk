import { EnumGender } from '../interfaces/user.interface';
import { IsEnum, IsString } from 'class-validator';

export class UserDto {
	@IsString()
	name: string;

	@IsString()
	city: string;

	@IsString()
	birthDate: string;

	@IsEnum(EnumGender)
	gender: string;

	@IsString()
	avatarPath: string;
}
