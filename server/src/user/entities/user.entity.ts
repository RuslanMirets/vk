import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EnumGender } from '../interfaces/user.interface';

@Entity('User')
export class UserEntity {
	// @PrimaryColumn()
	// id: number;

	@PrimaryGeneratedColumn()
	id: string;

	@Column({ nullable: true })
	name: string;

	@Column({ unique: true })
	email: string;

	@Column({ nullable: true })
	city: string;

	@Column({ nullable: true })
	birthDate: string;

	@Column({ type: 'enum', enum: EnumGender, nullable: true })
	gender: string;

	@Column({ default: false })
	isVerified: boolean;

	@Column()
	avatarPath: string;

	// @Column()
	// friends
}
