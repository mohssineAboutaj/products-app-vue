import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// use fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import * as far from '@fortawesome/free-regular-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import store from './store'

// fas/fa icons
library.add(faStar)
library.add(faCartPlus)

// fab icons
library.add(faVuejs)

// far icons
library.add(far.faStar)

// register font-awesome-icon as component
Vue.component('font-awesome-icon', FontAwesomeIcon)

// work in dev mode (!= production)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
