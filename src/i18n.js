import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import ja from '@/language/ja.json'
// import vi from '@/language/vi.json'
// import en from '@/language/en.json'

Vue.use(VueI18n)

function loadLocaleMessages () {
    const locales = require.context('./language', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    console.log(messages)
    return messages
}
const bus = new Vue();
bus.$on('refreshCountry', (data) => {
    console.log('=======================')
   console.log(data)
})
const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
})
console.log(i18n)
export default i18n
// const i18n = new VueI18n({
//     locale: 'en',
//     messages: {
//         'ja': ja,
//         'vi': vi,
//         'en': en
//     }
// })
// console.log(i18n)
// export default i18n
