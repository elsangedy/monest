import { Injectable } from '@nestjs/common';
import { UserWhereUniqueInput } from '../prisma';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async user(where: UserWhereUniqueInput): Promise<User> {
    return await this.prismaService.prisma.user(where);
  }

  async users(): Promise<User[]> {
    return await this.prismaService.prisma.users();
  }
}
