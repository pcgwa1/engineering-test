import { RESTDataSource } from 'apollo-datasource-rest'
import camelCaseKeys from 'camelcase-keys'

const COIN_MARKET_CAP_API_URL = 'https://pro-api.coinmarketcap.com/'
const COIN_MARKET_CAP_API_ACCESS_KEY = '412707c7-3a71-4119-8a06-89f89de6f7da'

export class CoinMarketCapAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = COIN_MARKET_CAP_API_URL
  }

  willSendRequest(request) {
    request.headers.set('X-CMC_PRO_API_KEY', COIN_MARKET_CAP_API_ACCESS_KEY)
  }

  async getCryptoCurrencyValue(symbol) {
    const data = await this.get('v1/cryptocurrency/quotes/latest', { symbol: symbol })
    return camelCaseKeys(data.data[symbol], { deep: true })
  }
}

const EXCHANGE_RATE_API_URL = 'https://api.exchangeratesapi.io/'

export class ExchangeRateAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = EXCHANGE_RATE_API_URL
  }
  
  async getAllRates() {
    const data = await this.get(`latest?base=USD&&symbols=USD,EUR,BRL,GBP,AUD`)
    return camelCaseKeys(data.rates, { deep: true })
  }
}

export const dataSources = () => ({ 
  coinMarketCap: new CoinMarketCapAPI(),
  exchangeRateAPI: new ExchangeRateAPI(),
})
