import React from "react";
import styled from "styled-components";

const Container = styled.div`
* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    border: 1px solid #ddd;
    margin-top: -1px; /* Prevent double borders */
    background-color: #f6f6f6;
    padding: 12px;
    display: flex;
    font-weight: 500;
    text-align: left;

    &:hover {
      background-color: #ccf;
    }
  }

  li:first-child {
    background-color: #ccc;
    font-weight: bold;
  }
}

`;

const Column = styled.div`
  width: 20%;
  min-width: 100px;
  
`;

const List = ({ cryptoRates }) => {
  if (!cryptoRates) return null;
  return (
    <Container>
        <h2>{cryptoRates.name}: {cryptoRates.symbol}</h2>
        <p>{`Current quote for ${cryptoRates.name}`}</p>
        <ul>
          <li><Column>Currency</Column> Value</li>
          <li><Column>USD:</Column> {cryptoRates.rates.usd}</li>
          <li><Column>EUR:</Column> {cryptoRates.rates.eur}</li>
          <li><Column>BRL:</Column> {cryptoRates.rates.brl}</li>
          <li><Column>GBP:</Column> {cryptoRates.rates.gbp}</li>
          <li><Column>AUD:</Column> {cryptoRates.rates.aud}</li>
        </ul>
      </Container>
  );
};

export default List;
