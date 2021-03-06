import { ApolloServer } from 'apollo-server'
import { schema } from './schema.js'
import { dataSources } from './dataSource.js'

const server = new ApolloServer({ schema, dataSources })

server.listen().then(({ url }) => {
  console.log(`Apollo server is running on ${url}`);
})
