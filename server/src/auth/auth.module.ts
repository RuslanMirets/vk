import { UserEntity } from 'src/user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './strategies/google.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './serializer';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	controllers: [AuthController],
	providers: [
		AuthService,
		GoogleStrategy,
		SessionSerializer,
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
