import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import AppProvider, { GET_RATES } from '../AppProvider'

describe('AppProvider', () => {
  const mocks = [
    {
      request: {
        query: GET_RATES,
      },
      result: {
        data: {
          getRates: { 
            eur: 0.8157272208,
            aud: 1.3150338527,
            brl: 5.1975691329,
            usd: 1.0,
            gbp: 0.7411942247
           },
        },
      },
    },
  ];
  
  it('should render without crashing', () => {
    shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppProvider />
      </MockedProvider>
    );
  });
})


