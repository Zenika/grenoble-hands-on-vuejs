<script setup>
import { onMounted, ref } from 'vue'
import LMap from '../components/LMap.vue'
import { getCityTodayWeather } from '../api/weather.api'
import { useCitiesStore } from '../store/cities.store'

const props = defineProps({
  cityName: {
    type: String,
    required: true
  }
})
const store = useCitiesStore()
const { latitude, longitude } = store.getCityByName(props.cityName)
const weather = ref(null)

onMounted(async () => {
  weather.value = await getCityTodayWeather(longitude, latitude)
})
</script>

<template>
  <h1 class="title">Cities weather</h1>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>{{ props.cityName }}</h2></div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="latitude" :long="longitude" />
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
