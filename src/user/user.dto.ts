import { IsString, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  username: string
}

export class UpdateUserDto {
  @IsString()
  password: string

  @IsString()
  username: string
}
