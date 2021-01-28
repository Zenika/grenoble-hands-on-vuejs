<template>
  <h1 class="title">Create city</h1>

  <div class="card">
    <form class="card-content" @submit.prevent="createCity">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="name" placeholder="City name">
        </div>
        <p class="help is-danger" v-if=" error['name'] ">{{ error['name'] }}</p>
      </div>
      <div class="field">
        <label class="label">Latitude</label>
        <div class="control">
          <input class="input" type="text" v-model="latitude" placeholder="Latitude">
        </div>
        <p class="help is-danger" v-if=" error['latitude'] ">{{ error['latitude'] }}</p>
      </div>
      <div class="field">
        <label class="label">Longitude</label>
        <div class="control">
          <input class="input" type="text" v-model="longitude" placeholder="Longitude">
        </div>
        <p class="help is-danger" v-if=" error['longitude'] ">{{ error['longitude'] }}</p>
      </div>
      <div class="control">
        <button class="button is-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCity",
  data() {
    return {
      name: '',
      latitude: '',
      longitude: '',
      error: {}
    }
  },
  methods: {
    createCity() {
      this.error = {};

      if (!this.name.length) {
        this.error['name'] = 'Name is required'
        return
      }
      if (!this.latitude.length || this.latitude < -180 || this.latitude > 180) {
        this.error['latitude'] = 'Latitude must be set between -180 et 180'
        return
      }
      if (!this.longitude.length || this.longitude < -180 || this.longitude > 180) {
        this.error['latitude'] = 'Longitude must be set between -180 et 180'
        return
      }
      this.$store.dispatch('createCity', {
        name: this.name,
        latitude: this.latitude,
        longitude: this.longitude,
      })

      this.$router.push({name: 'Home'})
    }
  }
}
</script>
