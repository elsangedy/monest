import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';
import { JwtStrategyService } from './jwt-strategy.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secretOrPrivateKey: process.env.APP_SECRET || 'my_secret',
    }),
    PrismaModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationResolver,
    JwtStrategyService,
  ],
  exports: [PassportModule],
})
export class AuthenticationModule {}
