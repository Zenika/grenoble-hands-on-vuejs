import {createStore} from 'vuex'

export default createStore({
  state: {
    cities: [
      {
        name: 'Grenoble',
        latitude: 45.183916,
        longitude: 5.703630
      },
      {
        name: 'Singapour',
        latitude: 1.295600,
        longitude: 103.858995
      },
      {
        name: 'Bordeaux',
        latitude: 44.848089,
        longitude: -0.571017
      },
      {
        name: 'Brest',
        latitude: 48.389397,
        longitude: -4.499237
      },
      {
        name: 'Montréal',
        latitude: 45.523000,
        longitude: -73.581700
      },
      {
        name: 'Lyon',
        latitude: 45.767443,
        longitude: 4.858798
      },
      {
        name: 'Rennes',
        latitude: 48.113409,
        longitude: -1.661249
      },
      {
        name: 'Nantes',
        latitude: 47.207408,
        longitude: -1.556187
      },
      {
        name: 'Lille',
        latitude: 50.648670,
        longitude: 3.075520
      },
      {
        name: 'Paris',
        latitude: 48.878932,
        longitude: 2.328487
      },
    ]
  },
  getters: {
    getCities: state => state.cities,
    getCityByName: (state, getters) => cityName => getters.getCities.find(city => city.name === cityName),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
