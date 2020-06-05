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
import i18n from './i18n'
import VueCookies from 'vue-cookies'
Vue.config.productionTip = false
Vue.prototype._$ = JQuery
Vue.prototype.Utils = Utils

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})
Vue.use(ElementUI)
Vue.use(VueCookies)

new Vue({
  router,
  i18n,
  EventBus,
  store,
  render: h => h(App)
}).$mount('#app')
