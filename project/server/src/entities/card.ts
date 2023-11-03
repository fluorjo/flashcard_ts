import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class Card {
  @Field(() => Int, { description: '카드 아이디' })
  id: number

  @Field(() => Int, { description: '제작자 아이디' })
  director_id: number

  @Field(() => Int, { description: '작성일' })
  created_date: number
}
