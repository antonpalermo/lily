import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth/providers')
export class AuthController {
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('local')
  async loginUsingUsernameAndPassword() {
    return 'ok';
  }
}
