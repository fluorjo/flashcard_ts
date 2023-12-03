// server/src/db/db-client.ts
import { DataSource } from 'typeorm'
import User from '../entities/User'

export const createDB = new DataSource({
  // type: 'mysql',
  // host: process.env.DB_HOST || 'localhost',
  // port: Number(process.env.DB_PORT) || 3306,
  // database: process.env.DB_DATABASE || 'flashcard_db',
  // username: process.env.DB_USERNAME || 'root',
  // password: process.env.DB_PASSWORD || 'qwer1234',
  // logging: !(process.env.NODE_ENV === 'production'),
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'flashcard_db',
  username: 'root',
  password: 'qwer1234',
  logging: !(process.env.NODE_ENV === 'production'),
  synchronize: true,
  entities: [User],
})
