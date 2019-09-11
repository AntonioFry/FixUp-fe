import React from 'react';
import { Shallow } from 'enzyme';
import ActiveProjects from './ActiveProjects';

describe('ActiveProjects', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
        getParam: jest.fn()
      },
    }
    wrapper = Shallow(<ActiveProjects props={props}/>) 
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})