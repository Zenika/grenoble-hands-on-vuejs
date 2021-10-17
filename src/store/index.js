import { createStore } from 'vuex';
import API from '@/api/weather.api';

export default createStore({
  state: {
    latLongMap: {
      GRENOBLE: [ 45.18922069585858, 5.722353600902554 ],
      SINGAPOUR: [ 1.295600, 103.858995 ],
      BORDEAUX: [ 44.848089, -0.571017 ],
      BREST: [ 48.389397, -4.499237 ],
      MONTREAL: [ 45.523000, -73.581700 ],
      LYON: [ 45.767443, 4.858798 ],
      RENNES: [ 48.113409, -1.661249 ],
      NANTES: [ 47.207408, -1.556187 ],
      LILLE: [ 50.648670, 3.075520 ],
      PARIS: [ 48.878932, 2.328487 ]
    },

    currentCity: null,
    currentWeather: [],
    isCurrentWeatherLoading: false,
    currentDetailsWeather: [],
    isCurrentDetailsWeatherLoading: false
  },
  getters: {
    getMapPosition: state => state.latLongMap,
    getCityPosition: (state, getters) => cityName => getters.getMapPosition[cityName],
    getCities: state => Object.keys(state.latLongMap),

    currentCity: state => state.currentCity,
    currentCityPosition: (_, getters) => getters.getCityPosition(getters.currentCity),
    currentWeather: state => state.currentWeather,
    isCurrentWeatherLoading: state => state.isCurrentWeatherLoading,
    currentDetailsWeather: state => state.currentDetailsWeather,
    isCurrentDetailsWeatherLoading: state => state.isCurrentDetailsWeatherLoading,
  },
  mutations: {
    createCity(state, city) {
      state.latLongMap[city.name] = [ city.latitude, city.longitude ];
    },

    setCurrentCity: (state, cityName) => {
      state.currentCity = cityName.toUpperCase();
    },
    setCurrentWeather: (state, weather) => {
      state.currentWeather = weather;
    },
    setCurrentWeatherLoading: (state, isLoading) => {
      state.isCurrentWeatherLoading = isLoading;
    },
    setCurrentDetailsWeather: (state, detailsWether) => {
      state.currentDetailsWeather = detailsWether;
    },
    setCurrentDetailsWeatherLoading: (state, isLoading) => {
      state.isCurrentDetailsWeatherLoading = isLoading;
    }
  },
  actions: {
    createCity(context, city) {
      context.commit('createCity', city);
    },

    selectCurrentCity: async ({ commit }, cityName) => {
      commit('setCurrentCity', cityName);
    },
    fetchCurrentWeathers: async ({ dispatch }) => {
      dispatch('fetchCurrentSimpleWeather');
      dispatch('fetchCurrentDetailsWeather');
    },
    fetchCurrentSimpleWeather: async ({ commit, getters }) => {
      commit('setCurrentWeatherLoading', true);
      try {
        const [ cityLongitude, cityLatitude ] = getters.getCityPosition(getters.currentCity);
        const weathers = await API
          .getCityNextWeekWeather(cityLongitude, cityLatitude);
        commit('setCurrentWeather', weathers);
      } catch (e) {
        console.error(e);
      }
      commit('setCurrentWeatherLoading', false);
    },
    fetchCurrentDetailsWeather: async ({ commit, getters }) => {
      commit('setCurrentDetailsWeatherLoading', true);
      try {
        const [ cityLongitude, cityLatitude ] = getters.getCityPosition(getters.currentCity);
        const detailedWeather = await API
          .getCityDetailedWeather(cityLongitude, cityLatitude);
        commit('setCurrentDetailsWeather', detailedWeather);
      } catch (e) {
        console.error(e);
      }
      commit('setCurrentDetailsWeatherLoading', false);
    }
  }
});
