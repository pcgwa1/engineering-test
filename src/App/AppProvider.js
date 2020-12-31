import React, { useState, useEffect } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

export const AppContext = React.createContext();

export const GET_RATES = gql`
  query {
    getRates {
      eur
      aud
      brl
      usd
      gbp
    }
  }
`;

export const GET_CRYPTOCURRENCY_DATA = gql`
  query getCryptoCurrency($symbol: String!) {
    getCryptoCurrencyData(symbol: $symbol) {
      id
      name
      symbol
      quote {
          usd {
            price
            last_updated
          }
        }
      }
    }
`;

const AppProvider = (props) => {
  const [cryptocurrencyCode, setCryptocurrencyCode] = useState('')
  const [codeErrorMessage, setCodeError] = useState(null);
  const [rates, setRates] = useState(null);
  const [cryptoRates, setCryptoRates] = useState(null);
  const { loading, error, data } = useQuery(GET_RATES);
  const [getCryptoCurrencyData, cryptoCurrencyAPIData] = useLazyQuery(GET_CRYPTOCURRENCY_DATA);

  useEffect(() => {
    if (!loading && data && data.getRates) {
      setRates(data.getRates);
    }

    if (cryptoCurrencyAPIData.data) {
      if(cryptoCurrencyAPIData.data.getCryptoCurrencyData){
        let officalRates = {}
        Object.entries(rates).forEach(([key, value]) => {
          officalRates[key] = value * cryptoCurrencyAPIData.data.getCryptoCurrencyData.quote.usd.price
        });
        setCryptoRates({
          name: cryptoCurrencyAPIData.data.getCryptoCurrencyData.name,
          symbol: cryptoCurrencyAPIData.data.getCryptoCurrencyData.symbol,
          rates: officalRates
        })
      } else {
        setCodeError('Please enter a valid code')
      }
      
    }
  }, [loading, data, cryptoCurrencyAPIData, rates]);

  const handleSubmit = () => {
    setCodeError(null)
    setCryptoRates(null)
    if(cryptocurrencyCode === ''){
      setCodeError('Please enter a valid code')
      return 
    }
    getCryptoCurrencyData({ variables: { symbol: cryptocurrencyCode.toUpperCase() } })
  }


  const handleChange = (event) => {
    setCryptocurrencyCode(event.target.value)
  }

  const { children } = props;

  const providerData = {
    cryptocurrencyCode,
    handleSubmit,
    handleChange,
    loading,
    error,
    data,
    cryptoRates,
    codeErrorMessage
  };
  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
