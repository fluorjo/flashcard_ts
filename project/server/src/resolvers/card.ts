import { Query, Resolver } from 'type-graphql'
import { Card } from '../entities/Card'
import dummyData from '../data/dummy_data'
// import data

@Resolver(Card)
export class CardResolver {
  @Query(() => [Card])
  Cards(): Card[] {
    return dummyData.Cards
  }
}
