import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import store from "@/store";
import router from "@/router";

describe('unit test component Home', () => {
  it('should print list', () => {
    const $store = {
      getters: {
        getCities: ['citiy1', "citiy2"]
      }
    }
    const wrapper = shallowMount(Home, {
      global: {
        stubs: {
          'router-link': true
        },
        mocks: {
          $store
        }
      }
    })
    expect(wrapper.vm.cities).toEqual(['citiy1', "citiy2"]);
    expect(wrapper.html()).toMatchSnapshot()
  });
});

describe('integration test component Home', () => {
  it('should print init state from store', () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find("h1.title").text()).toBe('Offices')
  })
});
