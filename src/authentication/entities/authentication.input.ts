import { Field, InputType } from 'type-graphql';

@InputType()
export class SigninInput {
  @Field()
  public readonly email?: string;

  @Field()
  public readonly password?: string;
}

@InputType()
export class SignupInput {
  @Field()
  public readonly name?: string;

  @Field()
  public readonly email?: string;

  @Field()
  public readonly password?: string;
}
