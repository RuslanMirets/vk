import { IUser } from './user.interface';

export interface IPost {
	id: number;
	user: IUser;
	createdAt: string;
	content: string;
	image?: string;
}
