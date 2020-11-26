<template>
  <h1 class="title">Cities weather</h1>
  <article class="panel is-primary">
    <div class="panel-heading"><h2>GRENOBLE</h2></div>
    <div class="panel-block">
      <l-map :zoom="13" :lat="cityLatitude" :long="cityLongitude"/>
    </div>
    <div class="panel-block">
      <table class="table is-flex-grow-1">
        <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Aujourd’hui</td>
          <td><img src="http://www.7timer.info/img/misc/about_civil_clear.png" alt=""/></td>
          <td>0°C</td>
          <td>30°C</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-block">
      <router-link to="/" class="button is-rounded">
        Go back home
      </router-link>
    </div>
  </article>
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
  data() {
    return {
      cityLatitude: 45.183916,
      cityLongitude: 5.703630,
      weather: {
        date: 20201004,
        temp2m: {max: 31, min: 26},
        max: 31,
        min: 26,
        weather: "ishower",
        wind10m_max: 3
      }
    }
  },
  mounted() {
  }
}
</script>
