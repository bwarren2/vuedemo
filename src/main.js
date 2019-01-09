import Vue from 'vue'
import App from './App.vue'
var VueFire = require('vuefire')
var Vuetify = require('vuetify')

Vue.use(VueFire)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

new Vue({
  el: '#app',
  render: h => h(App)
})
