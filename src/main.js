import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
// import 'iview/dist/styles/iview.css';
Vue.use(iView)
// import MINT from 'mint-ui'
// import ELE from 'element-ui'
// Vue.use(MINT)
// Vue.use(ELE)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')