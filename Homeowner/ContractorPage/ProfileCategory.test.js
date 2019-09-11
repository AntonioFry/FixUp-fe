import React from 'react';
import { shallow } from 'enzyme';
import ProfileCategory from './ProfileCategory';

describe('ProfileCategory', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      category: "",
      value: ""
    }
    wrapper = shallow(<ProfileCategory props={props} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})