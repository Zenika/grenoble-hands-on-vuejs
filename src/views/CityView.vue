<script setup>
import { onMounted, ref } from 'vue'
import LMap from '../components/LMap.vue'
import { getCityNextWeekWeather } from '../api/weather.api'
import { useCitiesStore } from '../store/cities.store'
import { useDegree } from '../composable/degree.composable'

const props = defineProps({
  cityName: {
    type: String,
    required: true
  }
})
const store = useCitiesStore()
const { latitude, longitude } = store.getCityByName(props.cityName)
const { degree, getTemperature } = useDegree()

const weathers = ref([])

onMounted(async () => {
  weathers.value = await getCityNextWeekWeather(longitude, latitude)
})
</script>

<template>
  <h2 class="title">Cities weather</h2>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>{{ props.cityName }}</h2></div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="latitude" :long="longitude" />
    </div>
    <div class="panel-block">
      <div class="control">
        <label class="radio">
          <input type="radio" name="degree" value="C" v-model="degree">
          °C
        </label>
        <label class="radio">
          <input type="radio" name="degree" value="F" v-model="degree">
          °F
        </label>
      </div>
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
        <tr v-for="weather in weathers" :key="weather">
          <td>{{ weather.date }}</td>
          <td><img :src="`http://www.7timer.info/img/misc/about_civil_${weather.weather}.png`" alt="" width="80" /></td>
          <td>{{ getTemperature(weather.temp2m.min) }} °{{ degree }}</td>
          <td>{{ getTemperature(weather.temp2m.max) }} °{{ degree }}</td>
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
