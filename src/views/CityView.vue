<script setup>
// TODO Remove this rule with step 2
/* eslint-disable no-unused-vars */
import { onMounted, ref } from 'vue'
import LMap from '../components/LMap.vue'
import { getCityTodayWeather } from '../api/weather.api'

const props = defineProps({
  cityName: {
    type: String,
    required: true
  }
})

const cityLatitude = ref(45.183916)
const cityLongitude = ref(5.703630)
const weather = ref(null)

onMounted(async () => {
  weather.value = await getCityTodayWeather(cityLongitude, cityLatitude)
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
        <tr>
          <td>{{ weather?.date }}</td>
          <td><img :src="`http://www.7timer.info/img/misc/about_civil_${weather?.weather}.png`" alt="" width="80" /></td>
          <td>{{ weather?.temp2m.min }} °C</td>
          <td>{{ weather?.temp2m.max }} °C</td>
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

<style scoped>
td {
  vertical-align: middle;
}
</style>
