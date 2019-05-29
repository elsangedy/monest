import { Field, ObjectType } from 'type-graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Authentication {
  @Field()
  public readonly token: string;

  @Field()
  public readonly user: User;
}
