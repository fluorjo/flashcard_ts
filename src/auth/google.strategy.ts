import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-google-oauth20'
import { UserService } from 'src/user/user.service'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: UserService) {
    console.log(process.env)

    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'profile'],
    })
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, name, emails } = profile
    console.log(accessToken)
    console.log(refreshToken)

    const providerId = id
    const email = emails[0].value

    console.log(providerId, email, name.familyName, name.givenName)

    return profile
  }
}
