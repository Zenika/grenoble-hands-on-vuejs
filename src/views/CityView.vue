<script setup>
// TODO Remove this rule with step 2
/* eslint-disable no-unused-vars */
import { reactive, ref } from 'vue'
import LMap from '../components/LMap.vue'
import { getWeatherState } from '../utils/weather.util'

const props = defineProps({
  cityName: {
    type: String,
    required: true
  }
})

const cityLatitude = ref(45.183916)
const cityLongitude = ref(5.703630)
const weather = reactive({
  date: 20201004,
  temp2m: { max: 31, min: 26 },
  max: 31,
  min: 26,
  weather: 'ishower',
  wind10m_max: 3
})
</script>

<template>
  <h1 class="title">Cities weather</h1>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>GRENOBLE</h2></div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="cityLatitude" :long="cityLongitude" />
    </div>
    <div class="panel-block">
      <table class="table is-striped is-narrow is-fullwidth">
        <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Aujourd’hui</td>
          <td><img :src="`https://ssl.gstatic.com/onebox/weather/256/${getWeatherState('rain')}.png`" alt="" width="40" /></td>
          <td>0 °C</td>
          <td>30 °C</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-block">
      <router-link to="/">
        <button class="button is-primary is-outlined">Go back home</button>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
td {
  vertical-align: middle;
}
</style>
