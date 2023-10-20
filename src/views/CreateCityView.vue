<script setup>
import { ref } from 'vue'
import { useCitiesStore } from '../store/cities.store'
import { useRouter } from 'vue-router'
import { NUMBERS_ONLY_REGEX } from '../utils/regex'

const store = useCitiesStore()
const router = useRouter()
const name = ref('')
const error = ref({})
const latitude = ref('')
const longitude = ref('')

const createCity = () => {
  error.value = {}

  if (name.value.length === 0) {
    error.value.name = 'Name is required'
  }
  if (latitude.value.length === 0 || latitude.value < -90 || latitude.value > 90 || !NUMBERS_ONLY_REGEX.test(latitude.value)) {
    error.value.latitude = 'Latitude must be set between -90 et 90'
  }
  if (longitude.value.length === 0 || longitude.value < -180 || longitude.value > 180 || !NUMBERS_ONLY_REGEX.test(longitude.value)) {
    error.value.longitude = 'Longitude must be set between -180 et 180'
  }

  if (Object.keys(error.value).length > 0) {
    return
  }

  store.addCity({
    name: name.value,
    latitude: latitude.value,
    longitude: longitude.value
  })

  router.push('/')
}
</script>

<template>
  <h2 class="title">Create city</h2>

  <div class="card">
    <form class="card-content" @submit.prevent="createCity">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="name" placeholder="City name">
        </div>
        <p class="help is-danger" v-if="error['name'] ">{{ error['name'] }}</p>
      </div>
      <div class="field">
        <label class="label">Latitude</label>
        <div class="control">
          <input class="input" type="text" v-model="latitude" placeholder="Latitude">
        </div>
        <p class="help is-danger" v-if="error['latitude'] ">{{ error['latitude'] }}</p>
      </div>
      <div class="field">
        <label class="label">Longitude</label>
        <div class="control">
          <input class="input" type="text" v-model="longitude" placeholder="Longitude">
        </div>
        <p class="help is-danger" v-if="error['longitude'] ">{{ error['longitude'] }}</p>
      </div>
      <div class="control">
        <button class="button is-primary">Create</button>
      </div>
    </form>
  </div>
</template>
