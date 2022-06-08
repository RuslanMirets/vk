import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './strategies/google.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
	imports: [ConfigModule],
	controllers: [AuthController],
	providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
