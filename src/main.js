import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/** Global Components */
import './global.js'
/** import element ui */
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import JQuery from 'jquery'
import Utils from './common/Utils'

Vue.config.productionTip = false
Vue.prototype._$ = JQuery
Vue.prototype.Utils = Utils
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
