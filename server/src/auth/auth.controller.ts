import { Auth } from 'src/auth/decorators/auth.decorator';
import { Controller, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('google')
	@Auth()
	async googleAuth(@Req() req) {}

	@Get('google/redirect')
	@Auth()
	googleAuthRedirect(@Req() req) {
		return this.authService.googleLogin(req);
	}
}
