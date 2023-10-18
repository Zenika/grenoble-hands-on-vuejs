<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const props = defineProps(['zoom', 'lat', 'long'])
const map = ref(null)
const zoomLevel = ref(13)

onMounted(() => {
  map.value = L.map('mapId').setView([props.lat, props.long], zoomLevel.value)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map.value)
  L.marker([props.lat, props.long]).addTo(map.value)
})
</script>

<template>
  <div id="mapId" />
</template>

<style scoped>
#mapId {
  height: 350px;
  width: 100%;
}
</style>
