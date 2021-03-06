import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class QuoteInput {
  @Field()
  readonly guildID: string;

  @Field()
  readonly authorID: string;

  @Field()
  readonly quote: string;

  @Field()
  readonly deleted?: boolean = false;

  @Field(() => Int)
  readonly indexNum?: number = 0;

  @Field()
  readonly createdAt?: Date = new Date();
}
