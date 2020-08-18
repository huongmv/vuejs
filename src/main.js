import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
/** Global Components */
import './global.js'
import service from './common/ApiService'
/** import element ui */
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import JQuery from 'jquery'
import Utils from './common/Utils'
import i18n from './i18n'
import elementLang from './i18n-element-ui'
import VueCookies from 'vue-cookies'
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueFroala from 'vue-froala-wysiwyg'
import wysiwyg from 'vue-wysiwyg'
/** import file common API */
import callApi from './api/index'
/** import file constant API */
import constApi from './common/ConstApi'

Vue.config.productionTip = false
Vue.prototype._$ = JQuery
Vue.prototype.Utils = Utils
Vue.prototype.callApi = callApi
Vue.prototype.constApi = constApi

Vue.use(VueAxios, axios)
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
Vue.use(CKEditor)
Vue.use(VueFroala)
Vue.use(wysiwyg, {})
service.init()

new Vue({
  router,
  i18n,
  elementLang,
  EventBus,
  store,
  render: h => h(App)
}).$mount('#app')
