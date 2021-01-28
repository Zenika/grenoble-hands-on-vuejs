<template>
  <section>
    <h1 class="title">Offices</h1>

    <div class="panel">
      <router-link class="panel-block p-4" v-for="city of cities" :key="city" :to="{ name: 'City', params: { cityName: city } }" >
        <h2 class="subtitle">{{ city }}</h2>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    cities () {
      return this.$store.getters.getCities
    }
  }
}
</script>
