<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="title navbar-item">
          Zenika Cities weather
        </h1>
      </div>
      <div class="navbar-menu">
        <h2 class="navbar-item has-text-white">
          The best weather app in Vue
        </h2>
      </div>
      <div class="navbar-menu navbar-end">
        <router-link class="navbar-item" :to="{name: 'CreateCity'}">
          Create city
        </router-link>
      </div>
    </div>
  </nav>
</template>
