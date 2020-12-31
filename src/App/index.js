import React from "react";
import styled from "styled-components";
import AppProvider, { AppContext } from "./AppProvider";
import List from "../components/List";

const AppContainer = styled.div`
  padding: 1em;
  width: 100%;
  margin: 0 auto;
  max-width: 820px;
`;

const Title = styled.h1`
  padding: 0;
  margin: 1em 0;
`;

const Form = styled.form`
  padding: 0;
  margin: 0;
  display: flex;

  label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    input {
      padding: 6px;
    }

    span {
      position: absolute;
      bottom: -25px;
      color: red;
    }
  }

  button {
    padding: 6px;
    align-self: flex-end;
    cursor: pointer;
    outline: none;
    border: 2px solid #ddd;
    background: #ddd;
    font-weight: bold;

    &:focus {
      outline: none;
    }
  }
`;

function App() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ cryptocurrencyCode, handleSubmit, handleChange, loading, error, codeErrorMessage, cryptoRates }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <p>`Error! ${error.message}`</p>;
          
          return (
            <AppContainer>
              <Title>Cryptocurrency Coverter</Title>
              <Form>
                <label>
                  Enter cryptocurrency code:
                  <input type="text" value={cryptocurrencyCode} onChange={(e) => handleChange(e)} placeholder='BTC'/>
                  <span>{codeErrorMessage}</span>
                </label>
                <button type="button" onClick={() => handleSubmit()} >
                  Get Rates
                </button>
              </Form>
              <List cryptoRates={cryptoRates} />
            </AppContainer>
          );
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;
