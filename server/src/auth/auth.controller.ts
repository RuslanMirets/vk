import { Controller, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGoogle } from './decorators/auth-google.decorator';
import { Auth } from './decorators/auth.decorator';

@Controller('auth/google')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('login')
	@AuthGoogle()
	async googleAuth(@Req() req) {}

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
