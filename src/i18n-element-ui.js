import Vue from 'vue'
/** local element-ui**/
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import viLocale from 'element-ui/lib/locale/lang/vi'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import VueI18n from 'vue-i18n'
import storeIndex from './store/index'
Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale
    },
    vi: {
        ...viLocale
    },
    ja: {
        ...jaLocale
    }
}

storeIndex.watch(() => storeIndex.getters['countryChange'], (value) => {
    Vue.prototype.$elmLand.locale = value
})
const elementLang = new VueI18n({
    locale: 'vi', // set locale
    messages // set locale messages
})

Vue.prototype.$elmLand = elementLang;
ElementLocale.i18n((key, value) => elementLang.t(key, value))
export default elementLang