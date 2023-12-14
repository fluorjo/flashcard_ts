import { CanActivate, Injectable } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable() // ❶ Injectable이 있으니 프로바이더
export class LoginGuard implements CanActivate {
  // ❷ CanActivate 인터페이스 구현
  constructor(private authService: AuthService) {} // ❸ authService를 주입받음

  async canActivate(context: any): Promise<boolean> {
    // ❹ CanActivate 인터페이스의 메서드
    // ❺ 컨텍스트에서 리퀘스트 정보를 가져옴
    const request = context.switchToHttp().getRequest()

    // ❻ 쿠키가 있으면 인증된 것
    if (request.cookies['login']) {
      return true
    }

    // ❼ 쿠키가 없으면 request의 body 정보 확인
    if (!request.body.email || !request.body.password) {
      return false
    }

    // ❽ 인증 로직은 기존의 authService.validateUser를 사용한다.
    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    )

    // 유저 정보가 없으면 false를 반환
    if (!user) {
      return false
    }
    // ❿ 있으면 request에 user 정보를 추가하고 true를 반환
    request.user = user
    return true
  }
}
