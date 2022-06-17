export interface IUser {
	id: string;
	email: string;
	name: string;
	isVerified?: boolean;
	birthDate?: string;
	city?: string;
	gender?: string;
	avatarPath: string;
	friends?: IUser[];
	isInNetwork?: boolean;
}
