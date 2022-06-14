export interface IGoogleProfile {
	sub: string;
	email: string;
	name: string;
	familyName: string;
	givenName: string;
	picture: string;
	locale: string;
	email_verified: boolean;
}

export interface IResGoogleUser {
	// id: string;
	name: string;
	email: string;
	avatarPath: string;
}
