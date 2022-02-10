<template>
  <h1 class="title">Cities weather</h1>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>{{ cityName }}</h2></div>
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
      <table class="table is-flex-grow-1">
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
            <img :src="`http://www.7timer.info/img/misc/about_civil_${ weather.weather }.png`"
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
      <table class="table">
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
<script setup>
import {setMinutes, add, format, parse} from 'date-fns'

import API from "@/api/weather.api";
import LMap from "@/components/LMap.vue";
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

const props = defineProps({
  cityName: {
    type: String,
    required: true
  }
})

const degree = ref('C');
const mode = ref('simple');
const weathers = ref(null);
const detailedWeather = ref(null);

const displayInDegree = (temperature) => {
  return degree.value === 'C' ? temperature : temperature * (9 / 5) + 32
}
const displayHour = (time) => {
  return format(setMinutes(add(new Date(), {hours: time + 1 - 3}), 0), 'dd/MM/yyyy HH:mm')
}
const displayDate = (date) => {
  return format(parse(date, 'yyyyMMdd', new Date()), 'dd/MM/yyyy')
}
const cityLatitude = computed(() => {
  return store.getters.getCityPosition(props.cityName)[0]
})
const cityLongitude = computed(() => {
  return store.getters.getCityPosition(props.cityName)[1]
})

onMounted(() => {
  API.getCityNextWeekWeather(cityLongitude.value, cityLatitude.value).then(w => weathers.value = w)
  API.getCityDetailedWeather(cityLongitude.value, cityLatitude.value).then(res => detailedWeather.value = res)
})
</script>
