import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      tracing: false,
      cacheControl: false,
      playground: true,
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'src/schema.graphql',
      context: ({ req }) => ({ req }),
    }),
    PrismaModule,
    UserModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
