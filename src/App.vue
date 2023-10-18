<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>

  <Navbar />

  <section class="section">
    <div class="container">
      <router-view />
    </div>
  </section>

  <Footer />

</template>

<style>

section.section {
  min-height: calc(100vh - 64px - 168px);
}

</style>
