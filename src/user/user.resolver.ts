import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  async user(): Promise<User> {
    return await Promise.resolve({ name: 'Munir Ahmed' });
  }

  @Query(returns => [User])
  async users(): Promise<User[]> {
    const result = await this.userService.users();

    return result;
  }
}
