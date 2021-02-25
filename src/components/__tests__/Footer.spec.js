import {shallowMount} from "@vue/test-utils";
import Footer from "@/components/Footer"

describe('Footer test with DOM', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Footer)
  });
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });
});
