<template>
  <div>
    <nav>
      <router-link to="/">
        Go back home
      </router-link>
    </nav>
    <h1>{{ city }}</h1>
    <!--<l-map :zoom="13" style="height: 350px" :center="position">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <l-marker :lat-lng="position" />
    </l-map>-->
  </div>
</template>
<script>
export default {
  props: {
    city: {
      type: String,
      required: true
    }
  }
}
</script>
