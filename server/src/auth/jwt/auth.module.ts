import { UserEntity } from 'src/user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from '../google/google.strategy';

@Module({
	controllers: [AuthController],
	providers: [
		AuthService,
		GoogleStrategy,
		{
			provide: 'AUTH_SERVICE',
			useClass: AuthService,
		},
	],
	imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity])],
	exports: [
		{
			provide: 'AUTH_SERVICE',
			useClass: AuthService,
		},
	],
})
export class AuthModule {}
