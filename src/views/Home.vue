<template>
  <section>
    <h2>
      Offices
    </h2>
    <nav>
      <router-link :to="{ name: 'City', params: { city: cities[0]}}">
        <p>
          {{ cities[0] }}
        </p>
      </router-link>
    </nav>
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
