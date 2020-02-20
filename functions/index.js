const express = require('express')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const { ApolloServer } = require('apollo-server-express')

const schema = require('./graphql/schema')

admin.initializeApp()

const app = express()

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    user: req.user,
    admin,
    functions
  }),
  playground: true, 
  introspection: true
})

server.applyMiddleware({ app, path: '/', cors: true })

exports.graphql = functions.https.onRequest(app)