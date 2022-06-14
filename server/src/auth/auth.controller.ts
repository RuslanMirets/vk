import { GoogleCodeDto } from './dto/google-code.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login/google')
	async googleAuth(@Body() dto: GoogleCodeDto) {
		return this.authService.googleLogin(dto);
	}
}
