import { Controller, Get, Req } from '@nestjs/common';
import { AuthGoogle } from '../google/auth-google.decorator';
import { Auth } from './auth.decorator';
import { AuthService } from './auth.service';

@Controller('auth/google')
export class AuthController {
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
