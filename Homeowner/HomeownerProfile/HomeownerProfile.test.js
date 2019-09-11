import React from 'react';
import { shallow } from 'enzyme';
import HomeownerProfile from './HomeownerProfile';

describe('HomeownerProfile', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn()
      }
    }
    wrapper = shallow(<HomeownerProfile props={props} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})