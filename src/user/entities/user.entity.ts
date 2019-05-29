import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  readonly id?: string;

  @Field()
  readonly name?: string;

  @Field()
  readonly email?: string;

  @Field()
  readonly password?: string;

  @Field()
  readonly createdAt?: string;

  @Field()
  readonly updatedAt?: string;
}
