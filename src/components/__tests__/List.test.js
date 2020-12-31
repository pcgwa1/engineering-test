import React from 'react';
import { shallow } from 'enzyme';
import List from '../List'

describe('List', () => {
 
  const props = {
          name: 'TestCoin',
          symbol: 'TSC',
          rates: {
          eur: 0.8157272208,
          aud: 1.3150338527,
          brl: 5.1975691329,
          usd: 1.0,
          gbp: 0.7411942247
          }
        };

  it('should render without crashing', () => {
    shallow(<List cryptoRates={props}  />);
  });

  it('should return null if the props are empty', () => {
    const wrapper = shallow(<List cryptoRates={null}  />);
    expect(wrapper.type()).toEqual(null);
  });
})