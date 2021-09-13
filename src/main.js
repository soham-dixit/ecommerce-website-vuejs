import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
