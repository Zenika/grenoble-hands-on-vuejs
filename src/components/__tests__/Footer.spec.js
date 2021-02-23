import {shallowMount} from "@vue/test-utils";
import Footer from  "../Footer"

describe('Footer component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Footer, {})
  });
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
