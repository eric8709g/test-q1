import Vue from 'vue'
import App from './App.vue'
import { setupMSW } from './mocks/browser'
import router from './router'
import store from './store'
import api from './api/apis'
import './index.css';

Vue.config.productionTip = false
Vue.prototype.$api = api


setupMSW().then(() =>{
  new Vue({
    router,
    store,
    render:h => h(App)
  }).$mount('#app')
})