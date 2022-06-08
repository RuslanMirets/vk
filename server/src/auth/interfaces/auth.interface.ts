type TypeEmail = {
	value: string;
	verified: boolean;
};

type TypePhoto = {
	value: string;
};

export interface IGoogleProfile {
	id: number;
	displayName: string;
	name: {
		familyName: string;
		givenName: string;
	};
	googleId: string;
	emails: TypeEmail[];
	photos: TypePhoto[];
}

export interface IResGoogleUser {
	name: string;
	email: string;
	avatarPath: string;
}
