import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
