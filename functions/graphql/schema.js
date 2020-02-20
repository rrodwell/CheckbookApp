const { gql, makeExecutableSchema } = require('apollo-server')

const rootSchema = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello, World!'
  }
}

module.exports = makeExecutableSchema({
  typeDefs: [ rootSchema ],
  resolvers
})