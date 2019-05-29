import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './entities/jwt.entity';
import { Authentication } from './entities/authentication.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  public async signin(
    email: string,
    password: string,
  ): Promise<Authentication> {
    const user = await this.prismaService.prisma.user({
      email,
    });

    if (!user) {
      throw new BadRequestException('Email or password invalid');
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new BadRequestException('Email or password invalid');
    }

    return await this.createToken(user);
  }

  private async createToken(user: User): Promise<Authentication> {
    const token = await this.jwtService.sign({
      userId: user.id,
    });

    return {
      token,
      user,
    };
  }

  public async validateUser(payload: JwtPayload): Promise<any> {
    return await this.prismaService.prisma.user({
      id: payload.userId,
    });
  }
}
