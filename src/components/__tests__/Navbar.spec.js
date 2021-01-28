import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Footer.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
