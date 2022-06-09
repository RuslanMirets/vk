import { Controller, Get, Req } from '@nestjs/common';
import { Auth } from '../jwt/auth.decorator';
import { AuthService } from '../jwt/auth.service';
import { AuthGoogle } from './auth-google.decorator';

@Controller('auth/google')
export class GoogleAuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('login')
	@AuthGoogle()
	async googleAuth(@Req() req) {
		return;
	}

	@Get('redirect')
	@AuthGoogle()
	googleAuthRedirect(@Req() req) {
		return this.authService.googleLogin(req);
	}

	@Get('logout')
	@Auth()
	googleAuthLogout(@Req() req) {
		return this.authService.googleLogout(req);
	}
}
