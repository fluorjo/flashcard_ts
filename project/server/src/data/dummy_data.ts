import { Card } from '../entities/Card'

export interface DummyData {
  Cards: Card[]
}

const dummyData: DummyData = {
  Cards: [
    {
      id: 1,

      creator_id: '제작자',

      created_date: '23/1/3',
    },
  ],
}

export default dummyData
