<script setup>
import { onMounted, ref } from 'vue'
import LMap from '../components/LMap.vue'
import { getCityDetailedWeather, getCityNextWeekWeather } from '../api/weather.api'
import { useCitiesStore } from '../store/cities.store'
import { useDegree } from '../composable/degree.composable'
import { displayDate, displayHour } from '../utils/datetime.util'
import RainbowLoader from '../components/RainbowLoader.vue'

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
const detailedWeather = ref([])
const mode = ref('simple')
const loading = ref(false)
const minimalDelayInMs = 2_000

onMounted(async () => {
  try {
    loading.value = true
    const [weathersResponseFromApi, detailedWeatherResponseFromApi] = await Promise.all([
      await getCityNextWeekWeather(longitude, latitude),
      await getCityDetailedWeather(longitude, latitude),
      await new Promise(resolve => setTimeout(resolve, minimalDelayInMs))
    ])
    weathers.value = weathersResponseFromApi
    detailedWeather.value = detailedWeatherResponseFromApi
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <h2 class="title">Cities weather</h2>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>{{ props.cityName }}</h2></div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="latitude" :long="longitude" />
    </div>
    <RainbowLoader v-if="loading" :animation-duration="minimalDelayInMs" />
    <template v-else>
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
      <div class="panel-block" v-if="mode ==='simple'">
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
            <td>{{ displayDate(weather.date) }}</td>
            <td><img :src="`http://www.7timer.info/img/misc/about_civil_${weather.weather}.png`" alt="" width="80" />
            </td>
            <td>{{ getTemperature(weather.temp2m.min) }} °{{ degree }}</td>
            <td>{{ getTemperature(weather.temp2m.max) }} °{{ degree }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="panel-block" v-else>
        <table class="table is-flex-grow-1">
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
            <td>{{ getTemperature(weatherPerDay.temp2m) }} °{{ degree }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </template>

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
