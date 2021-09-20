<template>
  <Navbar/>
  <section class="section">
    <div class="container">
      <router-view/>
    </div>
  </section>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Navbar}
}
</script>

<style>
section.section {
  min-height: calc(100vh - 64px - 168px);
}
</style>
