import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import {getRequest} from './network/getRequest.js'

Vue.config.productionTip = false
// Vue.prototype.axios = axios
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request('Blog/tag/get/page/1/limit/3/order/0').then(res=>console.log(res))