import Vue from 'vue'
import App from './App.vue'
import { setupMSW } from './mocks/browser'
import router from './router'
import api from './api/apis'

Vue.config.productionTip = false
Vue.prototype.$api = api


setupMSW().then(() =>{
  new Vue({
    router,
    render:h => h(App)
  }).$mount('#app')
})