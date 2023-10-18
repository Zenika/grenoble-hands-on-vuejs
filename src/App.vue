<script setup>
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/AppFooter.vue'
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
