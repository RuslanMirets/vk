import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Patch, Request } from '@nestjs/common';
import { Auth } from 'src/auth/auth.decorator';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Auth()
	@Get('profile')
	getProfile(@Request() req) {
		return this.userService.findOneById(req.user.id);
	}

	@Auth()
	@Patch('profile')
	update(@Request() req, @Body() dto: UserDto) {
		return this.userService.update(req.user.id, dto);
	}
}
