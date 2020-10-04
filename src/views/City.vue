<template>
  <div>
    <nav>
      <router-link to="/">
        Go back home
      </router-link>
    </nav>
    <h1>GRENOBLE</h1>
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
  data() {
    return {
      cityLatitude: 45.183916,
      cityLongitude: 5.703630,
    }
  }
}
</script>
