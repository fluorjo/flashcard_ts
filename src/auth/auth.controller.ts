import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from 'src/user/user.dto'

@Controller('auth')
export class Authcontroller {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto)
  }
}
