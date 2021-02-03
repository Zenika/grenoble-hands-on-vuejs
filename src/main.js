import {createApp, h, Fragment} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bulma/css/bulma.min.css'

import VueAxe, {VueAxePopup} from "vue-axe";

createApp({
  render: () => h(Fragment, [h(App), h(VueAxePopup)])
}).use(VueAxe)
  .use(store)
  .use(router)
  .mount('#app')
