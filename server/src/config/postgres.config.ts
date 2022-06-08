import { UserEntity } from './../user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const getPostgresConfig = async (
	configService: ConfigService,
): Promise<PostgresConnectionOptions> => ({
	type: configService.get('DB_TYPE'),
	host: configService.get('DB_HOST'),
	port: configService.get('DB_PORT'),
	username: configService.get('DB_USER'),
	password: configService.get('DB_PASSWORD'),
	database: configService.get('DB_NAME'),
	entities: [UserEntity],
	synchronize: true,
});
