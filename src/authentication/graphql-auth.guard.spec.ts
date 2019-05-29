import { GqlAuthGuard } from './graphql-auth.guard';

describe('GraphqlAuthGuard', () => {
  it('should be defined', () => {
    expect(new GqlAuthGuard()).toBeTruthy();
  });
});
