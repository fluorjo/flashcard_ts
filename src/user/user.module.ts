// src/user/user.module.ts

import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
@Module({
  imports: [TypeOrmModule.forFeature([User])], //엔티티를 모듈에 추가.
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
