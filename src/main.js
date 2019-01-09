import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './router/routes'

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
