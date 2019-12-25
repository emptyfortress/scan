import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/support.css'
import vuetify from './plugins/vuetify';
import '@/assets/css/main.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
