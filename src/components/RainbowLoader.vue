<script setup>
defineProps({
  animationDuration: {
    type: Number,
    default: 1_000
  }
})
</script>

<template>
  <div class="custom-loader"></div>
</template>

<style scoped>
.custom-loader {
  margin: 0 auto;
  width: 100px;
  height: 50px;
  border-radius: 100px 100px 0 0;
  position: relative;
  overflow: hidden;
}

.custom-loader:before {
  content: "";
  position: absolute;
  inset: 0 0 -100%;
  background: radial-gradient(farthest-side at top, #0000 35%, #aa47be, #039be6, #26c6dc, #459e44, #f9ec44, #f68524, #fa3536, #0000) bottom/100% 50% no-repeat;
  animation: l8 v-bind(animationDuration + 'ms') infinite;
}

@keyframes l8 {
  0%, 20% {
    transform: rotate(0)
  }
  40%, 60% {
    transform: rotate(.5turn)
  }
  80%, 100% {
    transform: rotate(1turn)
  }
}
</style>
