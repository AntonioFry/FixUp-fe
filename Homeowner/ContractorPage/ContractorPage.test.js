import React from 'react';
import { shallow } from 'enzyme';
import ContractorPage from './ContractorPage';

describe('ContractorPage', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      navigation: {
        state: {
          params: {
            name: "",
            email: "",
            zip: "",
            phone_number: "",
            category: ""
          }
        }
      }
    }
      wrapper = Shallow(<ContractorPage props={props} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})