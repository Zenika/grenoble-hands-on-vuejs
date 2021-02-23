/*
import {render, screen, fireEvent} from '@testing-library/vue'
import City from "@/views/City";
import store from '@/store'
import router from '@/router'

jest.mock("@/api/weather.api", () => ({
  getCityNextWeekWeather() {
    return Promise.resolve([{
      "date": 20210223,
      "weather": "cloudy",
      "temp2m": {"max": 2, "min": -8},
      "wind10m_max": 4
    }, {
      "date": 20210224,
      "weather": "clear",
      "temp2m": {"max": -10, "min": -15},
      "wind10m_max": 4
    }, {
      "date": 20210225,
      "weather": "clear",
      "temp2m": {"max": -6, "min": -14},
      "wind10m_max": 3
    }, {
      "date": 20210226,
      "weather": "cloudy",
      "temp2m": {"max": 1, "min": -8},
      "wind10m_max": 4
    }, {
      "date": 20210227,
      "weather": "clear",
      "temp2m": {"max": 7, "min": -1},
      "wind10m_max": 4
    }, {
      "date": 20210228,
      "weather": "clear",
      "temp2m": {"max": 9, "min": 0},
      "wind10m_max": 3
    }, {
      "date": 20210301,
      "weather": "clear",
      "temp2m": {"max": 7, "min": 1},
      "wind10m_max": 3
    }
    ])
  },
  getCityDetailedWeather: jest.fn().mockResolvedValue([
    {
      "timepoint": 3,
      "cloudcover": 9,
      "lifted_index": 15,
      "prec_type": "none",
      "prec_amount": 1,
      "temp2m": 2,
      "rh2m": "59%",
      "wind10m": {"direction": "NW", "speed": 4},
      "weather": "cloudyday"
    }
  ])
}))

describe('City testing library', () => {
  it('should ', () => {
    render(City, {
      props: {
        cityName: 'GRENOBLE'
      },
      global: {
        plugins: [store, router]
      }
    })
  });
});
*/
