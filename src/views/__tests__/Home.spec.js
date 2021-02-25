import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import router from "@/router";
import store from "@/store";

describe('Home component test all mocks', () => {
  let wrapper
  let $store
  beforeEach(() => {
    $store = {
      getters: {
        getCities: ['demo1', 'demo2']
      }
    }
    wrapper = shallowMount(Home, {
      global: {
        stubs: { 'router-link': true },
        mocks: {
          $store
        }
      }
    })
  });
  it('should render all cities in my world', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });
});

describe('Home component test with instance', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router]
      }
    })
  });
  it('should render all cities where Zenika is', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('h1.title').text()).toBe('Offices')
    expect(wrapper.findAll('.panel-block.p-4').length).toBe(10)
  });
});
