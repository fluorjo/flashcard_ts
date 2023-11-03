import { Query, Resolver } from 'type-graphql'
//import data
import { Card } from '../entities/card'

@Resolver{Card}
export class CardResolver{
  @Query(()=>[Card])
  Cards(): Card[]{
    return CardData.
  }
}
