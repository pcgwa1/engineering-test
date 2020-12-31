import { gql, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql`

  type Usd {
    price: Float
    last_updated: String
  }

  type Quote {
    usd: Usd
  }

  type Cryptocurrency {
    id: Int
    name: String
    symbol: String
    quote: Quote
  }

  type Rates {
    eur: Float
    aud: Float
    brl: Float
    usd: Float
    gbp: Float
  }

  type Query {
    getCryptoCurrencyData(symbol: String!): Cryptocurrency
    getRates: Rates!
    
  }
`;

const resolvers = {
  Query: {
    getCryptoCurrencyData: (_, { symbol }, { dataSources }) => dataSources.coinMarketCap.getCryptoCurrencyValue(symbol),
    getRates: (_, __, { dataSources }) => dataSources.exchangeRateAPI.getAllRates(),
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
