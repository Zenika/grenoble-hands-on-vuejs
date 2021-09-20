import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bulma/css/bulma.min.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

const favoriteCity = process.env.VUE_APP_FAVORITE_CITY.toUpperCase();
if (store.getters.getCities.includes(favoriteCity)) {
  router.push({ name: 'City', params: { cityName: favoriteCity } });
}
