import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './entities/jwt.entity';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  public constructor(
    private readonly authenticationService: AuthenticationService,
  ) {
    super({
      secretOrKey: process.env.APP_SECRET || 'my_secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload: JwtPayload) {
    const user = await this.authenticationService.validateUser(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
