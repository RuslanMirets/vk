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
	gender: string;

	@Column({ default: false })
	isVerified: boolean;

	@Column({ nullable: true })
	avatarPath: string;

	@Column({ unique: true })
	googleId: string;

	// @Column()
	// friends
}
