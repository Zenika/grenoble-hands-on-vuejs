<script setup>
import { useCitiesStore } from '../store/cities.store'

const store = useCitiesStore()
const cities = store.cities
</script>

<template>
  <section>
    <h1 class="title">Offices</h1>

    <div class="panel">
      <router-link class="panel-block p-4" :to="{ name: 'City', params: { cityName: cities[0].name }}">
        <h2 class="subtitle">{{ cities[0].name }}</h2>
      </router-link>
    </div>
  </section>
</template>
