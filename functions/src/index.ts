import express from 'express'
import admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { ApolloServer } from 'apollo-server-express'

import schema from './graphql/schema'

admin.initializeApp()

const app = express()

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    // user: req?.user,
    admin,
    functions
  }),
  playground: true, 
  introspection: true
})

server.applyMiddleware({ app, path: '/', cors: true })

exports.graphql = functions.https.onRequest(app)