import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { Authentication } from './entities/authentication.entity';
import { SigninInput } from './entities/authentication.input';
import { AuthenticationService } from './authentication.service';
import { GqlAuthGuard } from './graphql-auth.guard';

@Resolver(of => Authentication)
export class AuthenticationResolver {
  public constructor(
    private readonly authenticationService: AuthenticationService,
  ) {}

  @Query(returns => User)
  @UseGuards(new GqlAuthGuard())
  public me(@Context() ctx): User {
    return ctx.req.user;
  }

  @Mutation(returns => Authentication)
  public async signin(
    @Args('data') data: SigninInput,
  ): Promise<Authentication> {
    const { email, password } = data;
    const result = await this.authenticationService.signin(email, password);
    return await result;
  }
}
