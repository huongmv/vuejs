import Vue from 'vue'
/** local element-ui**/
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import viLocale from 'element-ui/lib/locale/lang/vi'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import VueI18n from 'vue-i18n'
import storeIndex from './store/index'
Vue.use(VueI18n)
Vue.prototype.$_lenguageElement = 'en'

const messages = {
    en: {
        message: 'hello',
        ...enLocale
    },
    zh: {
        message: '你好',
        ...zhLocale
    },
    vi: {
        message: 'Xin chào',
        ...viLocale
    },
    ja: {
        message: 'Xin chào',
        ...jaLocale
    }
}

function loadElementMessages () {
    storeIndex.watch(() => storeIndex.getters['countryChange'], (value) => {
        Vue.prototype.$elmLand.locale = value
        return value
    })
    return ''
}
const elementLang = new VueI18n({
    locale: loadElementMessages() || 'en', // set locale
    messages // set locale messages
})

Vue.prototype.$elmLand = elementLang;

ElementLocale.i18n((key, value) => elementLang.t(key, value))
export default elementLang
