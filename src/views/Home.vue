<template>
  <section>
    <h1 class="title">Offices</h1>

    <div class="panel">
      <router-link class="panel-block p-4" :to="{ name: 'City', params: { cityName: cities[0].name}}">
        <h2 class="subtitle">{{ cities[0].name }}</h2>
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
