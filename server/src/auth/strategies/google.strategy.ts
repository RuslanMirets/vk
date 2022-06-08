import { IGoogleProfile, IResGoogleUser } from './../interfaces/auth.interface';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		private readonly configService: ConfigService,
		@Inject('AUTH_SERVICE')
		private readonly authService: AuthService,
	) {
		super({
			clientID: configService.get('GOOGLE_CLIENT_ID'),
			clientSecret: configService.get('GOOGLE_SECRET'),
			callbackURL: 'http://localhost:5000/api/auth/google/redirect',
			scope: ['email', 'profile'],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: IGoogleProfile,
		done: VerifyCallback,
	): Promise<IResGoogleUser> {
		const { displayName, emails, photos } = profile;

		console.log(profile);

		return {
			email: emails[0].value,
			name: displayName,
			avatarPath: photos[0].value,
		};
	}
}
