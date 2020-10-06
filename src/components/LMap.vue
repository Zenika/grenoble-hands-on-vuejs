<template>
  <div id="mapId"/>
</template>
<script>
import L from 'leaflet';

export default {
  name: "LMap",
  props: ['zoom', 'lat', 'long'],
  data() {
    return {
      map: null,
      zoomLevel: 13
    }
  },
  mounted() {
    this.map = L.map('mapId').setView([this.lat, this.long], this.zoomLevel)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);
    L.marker([this.lat, this.long]).addTo(this.map)
  }
}
</script>
<style scoped>
#mapId {
  height: 350px;
  width: 100%;
}
</style>
