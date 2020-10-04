<template>
  <div>
    <nav>
      <router-link to="/">
        Go back home
      </router-link>
    </nav>
    <h1>{{ cityName }}</h1>
    <l-map :zoom="13" :lat="cityLatitude" :long="cityLongitude"/>
  </div>
</template>
<script>
import LMap from "@/components/LMap";

export default {
  name: 'City',
  components: {
    LMap
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  computed: {
    cityPosition() {
      return this.$store.getters['getCityPosition'](this.cityName)
    },
    cityLatitude() {
      return this.cityPosition[0]
    },
    cityLongitude() {
      return this.cityPosition[1]
    }
  }
}
</script>
