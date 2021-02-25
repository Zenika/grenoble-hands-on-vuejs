import store from './store'
import router from './router'
import 'bulma/css/bulma.min.css'

import {createApp, h, Fragment} from 'vue'
import App from './App.vue'

let app = null

const VueAxe = require('vue-axe')
app = createApp({
  render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)])
})
app.use(VueAxe.default)
  .use(store)
  .use(router)
  .mount('#app')
