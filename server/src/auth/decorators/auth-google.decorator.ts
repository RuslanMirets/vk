import { GoogleAuthGuard } from '../guards/google-auth.guard';
import { UseGuards } from '@nestjs/common';

export const AuthGoogle = () => UseGuards(GoogleAuthGuard);
