import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnumGender } from '../interfaces/user.interface';

@Entity('User')
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	city: string;

	@Column()
	birthDate: string;

	@Column({ type: 'enum', enum: EnumGender })
	gender: EnumGender;

	@Column({ default: false })
	isVerified: boolean;

	@Column()
	avatarPath: string;
}
