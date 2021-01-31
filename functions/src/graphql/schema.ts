import { gql, makeExecutableSchema } from 'apollo-server'

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

export default makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers
})
