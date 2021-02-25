import {shallowMount} from "@vue/test-utils";
import City from "@/views/City";
import router from "@/router";
import store from "@/store";

jest.mock('@/api/weather.api', () => ({
  getCityNextWeekWeather() {
    return Promise.resolve([{
      "date": 20210224,
      "weather": "clear",
      "temp2m": {"max": 17, "min": 9},
      "wind10m_max": 3
    }, {
      "date": 20210225,
      "weather": "clear",
      "temp2m": {"max": 17, "min": 6},
      "wind10m_max": 3
    }, {
      "date": 20210226,
      "weather": "pcloudy",
      "temp2m": {"max": 15, "min": 5},
      "wind10m_max": 3
    }, {
      "date": 20210227,
      "weather": "rain",
      "temp2m": {"max": 7, "min": 6},
      "wind10m_max": 3
    }, {
      "date": 20210228,
      "weather": "mcloudy",
      "temp2m": {"max": 11, "min": 3},
      "wind10m_max": 3
    }, {
      "date": 20210301,
      "weather": "clear",
      "temp2m": {"max": 14, "min": 3},
      "wind10m_max": 3
    }, {
      "date": 20210302,
      "weather": "cloudy",
      "temp2m": {"max": 14, "min": 6},
      "wind10m_max": 3
    }])
  },
  getCityDetailedWeather: jest.fn().mockResolvedValue([
    {
      "timepoint": 3,
      "cloudcover": 1,
      "lifted_index": 10,
      "prec_type": "none",
      "prec_amount": 0,
      "temp2m": 11,
      "rh2m": "77%",
      "wind10m": {"direction": "S", "speed": 3},
      "weather": "clearday"
    }
  ])
}))

describe('City component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(City, {
      props: {
        cityName: 'GRENOBLE'
      },
      global: {
        plugins: [store, router]
      }
    })
  });
  it.skip('should render correctly', () => {
    expect(wrapper).not.toBeNull()
  });
  it('should keep same number of days when change unit temperature and change temperature', async () => {
    expect(wrapper.vm.degree).toBe('C')
    expect(wrapper.findAll('tbody tr').length).toBe(7)
    expect(wrapper.find('.temperature').text()).toBe('9 °C')
    await wrapper.setData({ degree: 'F' })
    expect(wrapper.findAll('tbody tr').length).toBe(7)
    expect(wrapper.find('.temperature').text()).toBe('48.2 °F')
  });
  it('should keep same number of days when click unit temperature and change temperature', async () => {
    expect(wrapper.vm.degree).toBe('C')
    expect(wrapper.findAll('tbody tr').length).toBe(7)
    expect(wrapper.find('.temperature').text()).toBe('9 °C')
    const fahrenheitButton = wrapper.find('#fahrenheit')
    await fahrenheitButton.trigger('click')
    expect(wrapper.findAll('tbody tr').length).toBe(7)
    expect(wrapper.find('.temperature').text()).toBe('48.2 °F')
  });
});
