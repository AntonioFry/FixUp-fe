import react from 'react';
import { shallow } from 'enzyme';
import ActiveProject from './ActiveProject';

describe("ActiveProject", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title: "",
      navigation: {
        navigate: jest.fn(),
      },
      contractors: [],
      description: "",
      photo: "",
    }
    wrapper = shallow(<ActiveProject props={props}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  
})