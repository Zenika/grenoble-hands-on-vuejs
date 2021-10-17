<template>
  <h1 class="title">Cities weather</h1>
  <article class="panel is-primary">
    <div class="panel-heading">
      <h2>{{ cityName }}</h2>
    </div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="cityLatitude" :long="cityLongitude"/>
    </div>
    <div class="panel-block">
      <div class="control">
        <label class="radio">
          <input type="radio" name="degree" value="C" v-model="degree">
          C°
        </label>
        <label class="radio">
          <input type="radio" name="degree" value="F" v-model="degree">
          F°
        </label>
      </div>
      <div class="control">
        <label class="radio">
          <input type="radio" name="mode" value="simple" v-model="mode">
          Simple
        </label>
        <label class="radio">
          <input type="radio" name="mode" value="detailed" v-model="mode">
          Detailed
        </label>
      </div>
    </div>
    <div class="panel-block" v-if="mode === 'simple'">
      <Loading v-if="weathersIsLoading"/>
      <table v-else class="table is-flex-grow-1">
        <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="weather of weathers" :key="weather.date">
          <td>{{ displayDate(weather.date) }}</td>
          <td>
            <img
                :src="`http://www.7timer.info/img/misc/about_civil_${ weather.weather }.png`"
                alt=""
            />
          </td>
          <td>{{ displayInDegree(weather.temp2m.min) }} °{{ degree }}</td>
          <td>{{ displayInDegree(weather.temp2m.max) }} °{{ degree }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-block" v-if="mode === 'detailed'">
      <Loading v-if="detailsWeathersIsLoading"/>
      <table v-else class="table">
        <thead>
        <tr>
          <th>Time</th>
          <th>Weather</th>
          <th>Temperature</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="weatherPerDay of detailedWeather" :key="weatherPerDay">
          <td>{{ displayHour(weatherPerDay.timepoint) }}</td>
          <td>{{ weatherPerDay.weather }}</td>
          <td>{{ displayInDegree(weatherPerDay.temp2m) }} °{{ degree }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-block">
      <router-link to="/" class="button is-rounded">
        Go back home
      </router-link>
    </div>
  </article>
</template>
<script>
import { setMinutes, add, format, parse } from 'date-fns';
import LMap from '@/components/LMap';
import Loading from '@/components/Loading';

export default {
  name: 'City',
  components: {
    LMap,
    Loading
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      degree: 'C',
      mode: 'simple',
    };
  },
  methods: {
    displayInDegree(temperature) {
      return this.degree === 'C' ? temperature : temperature * (9 / 5) + 32;
    },
    displayHour(time) {
      return format(setMinutes(add(new Date(), { hours: time + 1 - 3 }), 0), 'dd/MM/yyyy HH:mm');
    },
    displayDate(date) {
      return format(parse(date, 'yyyyMMdd', new Date()), 'dd/MM/yyyy');
    }
  },
  computed: {
    currentCityName() {
      return this.$store.getters.currentCity;
    },
    cityLatitude() {
      return this.$store.getters.getCityPosition(this.cityName)[0];
    },
    cityLongitude() {
      return this.$store.getters.getCityPosition(this.cityName)[1];
    },
    weathers() {
      return this.$store.getters.currentWeather;
    },
    weathersIsLoading() {
      return this.$store.getters.isCurrentWeatherLoading;
    },
    detailedWeather() {
      return this.$store.getters.currentDetailsWeather;
    },
    detailsWeathersIsLoading() {
      return this.$store.getters.isCurrentDetailsWeatherLoading;
    }
  },
  created() {
    this.$store.dispatch('selectCurrentCity', this.cityName);
    this.$store.dispatch('fetchCurrentWeathers');
  }
};
</script>
