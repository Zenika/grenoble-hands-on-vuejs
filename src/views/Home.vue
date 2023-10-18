<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cities = computed(() => store.getters.getCities)
</script>

<template>
  <section>
    <h1 class="title">Offices</h1>

    <div class="panel">
      <router-link class="panel-block p-4" :to="{ name: 'City', params: { cityName: cities[0]}}">
        <h2 class="subtitle">{{ cities[0] }}</h2>
      </router-link>
    </div>
  </section>
</template>
