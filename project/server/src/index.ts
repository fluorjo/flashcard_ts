/* eslint-disable no-console */
// server/src/index.ts

import express from 'express'
import http from 'http'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { createDB } from './db/db-client'
import { UserResolver } from './resolvers/User'
import { CardResolver } from './resolvers/Card'

async function main() {
  createDB
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, CardResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  const httpServer = http.createServer(app)

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql
      `)
    } else {
      console.log(`
      Production server Started...
      `)
    }
  })
}
main().catch((err) => console.error(err))
