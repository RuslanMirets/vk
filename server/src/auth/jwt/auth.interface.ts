type TypeEmail = {
	value: string;
	verified: boolean;
};

type TypePhoto = {
	value: string;
};

export interface IGoogleProfile {
	id: string;
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
	// id: string;
	name: string;
	email: string;
	avatarPath: string;
}
