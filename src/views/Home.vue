<template>
  <section>
    <h1 class="title">Offices</h1>

    <div class="panel">
      <router-link
          v-for="city of cities"
          :key="city"
          class="panel-block p-4"
          :to="{ name: 'City', params: { cityName: city } }"
      >
        <h2 class="subtitle">
          <span v-if="isFavoriteCity(city)" class="icon has-text-warning">
            <i class="fas fa-star"></i>
          </span>
          {{ city }}
        </h2>
      </router-link>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue';
import store from '@/store';

export default {
  setup() {
    const cities = computed(() => store.getters.getCities);
    const isFavoriteCity = city => city.toUpperCase() === process.env.VUE_APP_FAVORITE_CITY.toUpperCase();
    return {
      cities,
      isFavoriteCity
    }
  }
};
</script>
