import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IGoogleProfile } from '../jwt/auth.interface';
import { AuthService } from '../jwt/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		private readonly configService: ConfigService,
		private readonly authService: AuthService,
	) {
		super({
			clientID: configService.get('GOOGLE_CLIENT_ID'),
			clientSecret: configService.get('GOOGLE_SECRET'),
			callbackURL: 'http://localhost:5000/api/auth/google/redirect',
			scope: ['email', 'profile'],
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: IGoogleProfile) {
		const { displayName, emails, photos, id } = profile;

		return this.authService.validateUser({
			// id: id,
			email: emails[0].value,
			name: displayName,
			avatarPath: photos[0].value,
		});
	}
}
