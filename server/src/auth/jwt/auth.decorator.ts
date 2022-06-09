import { UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../jwt/auth.guard';

export const Auth = () => UseGuards(AuthenticatedGuard);
