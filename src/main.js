// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueGoogleCharts from 'vue-google-charts'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuetify)
Vue.use(VueGoogleCharts)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBxBIfFGmL6adUEtytF2IYA10JZjQc5_sk',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
