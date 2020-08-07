import Vue from 'vue'
import VueCookies from 'vue-cookies'
import moment from 'moment'
const Utils =  {
    convertDateLocal (date, format, local) {
        return moment(date).locale(local).format(format)
    },
    convertDate (date, format) {
        return moment(date).format(format)
    },
    getDateNow () {
        /**return data format Wednesday, April 22, 2020 6:41 PM*/
        return moment().format('LLLL')
    },
    getDateNowLocal  (styleDate,local) {
        /**https://momentjs.com/docs/*/
        moment.locale(local);
        return moment().format(styleDate)
    },
    getDateYYYYMMDDHHmmss () {
        let startDate = new Date()
        return moment.parseZone(startDate).format('YYYY-MM-DD HH:mm:ss')
    },
    parseDateYYYYMMDD (date) {
        if (date !== null) {
            return moment.parseZone(date).format('YYYY-MM-DD')
        } else {
            return date
        }
    
    },
    isNumber (number) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(number)
    },
    isDate (date) {
        return moment(date).isValid()
    },
    parseDateToTimeStamp (date) {
        let localTime = moment(date).format('YYYY-MM-DD HH:mm:ss')
        return moment(localTime).format("X")
    },
    parseDateYYYYMMDDHHmmss (date) {
        return moment.parseZone(date).format('YYYY-MM-DD HH:mm:ss')
    },
    setLocalStorageToken(key, value, ttl) {
        // ttl = (1000 * 60 * 20) would be 20 mins
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: ttl <= 0 ? -1 : new Date().getTime() + ttl
        }
        localStorage.setItem(key, JSON.stringify(item))
    },
    getLocalStorageToken(key) {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        // compare the expiry time of the item with the current time
        if (item.expiry > 0 && new Date().getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    },
    removeLocalStorageToken(key) {
        localStorage.removeItem(key)
    },
    apiError() {
        // window.location.href = 'login';
        this.$router.push({ name: 'login' })
    },
    setHeader () {
        let token = VueCookies.get('user2').token
        Vue.axios.defaults.headers.common['Authorization'] = token
    },
    randomText (lenght) {
        let text = ''
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for( let i=0; i < lenght; i++ ) {
            text += chars.charAt(Math.floor(Math.random() * chars.length))
         }
         VueCookies.set('captcha', text)
    },
    randomClass () {
        let fontText = ''
        let fontsArr = new Array(
            'font-style-normal',
            'font-style-italic',
            'font-style-oblique',
            'font-weight-bold',
            'font-weight-300',
            'font-weight-400',
            'font-weight-500',
            'font-weight-600',
            'font-weight-800',
        )
        for ( let i=0; i< fontsArr.length; i++ ) {
            fontText = fontsArr[Math.floor(Math.random() * fontsArr.length)];
        }
        let fontFamily = ''
        let fontFamilyArr = new Array(
            'impact',
            'serif',
            'sansserif',
            'monospace',
            'cursive',
            'fantasy',
            'courier',
            'verdana',
            'candara',
            'garamond',
            'brush-script-mt',
            'lucida-bright',
        )
        for ( let i=0; i< fontFamilyArr.length; i++ ) {
            fontFamily = fontFamilyArr[Math.floor(Math.random() * fontFamilyArr.length)];
        }
        let bgColor = ''
        let bgColorArr = new Array(
            'captcha-bg-001',
            'captcha-bg-002',
            'captcha-bg-003',
            'captcha-bg-004',
            'captcha-bg-005',
            'captcha-bg-006',
            'captcha-bg-007',
            'captcha-bg-008',
            'captcha-bg-009',
            'captcha-bg-010',
            'captcha-bg-011',
            'captcha-bg-012',
            'captcha-bg-013',
            'captcha-bg-014',
            'captcha-bg-015'
        )
        for ( let i=0; i< bgColorArr.length; i++ ) {
            bgColor = bgColorArr[Math.floor(Math.random() * bgColorArr.length)];
        }
        let textColor = ''
        let textColorArr = new Array(
            'aliceBlue',
            'antiqueWhite',
            'aqua',
            'aquamarine',
            'azure',
            'beige',
            'bisque',
            'black',
            'blanchedAlmond',
            'blue',
            'blueViolet',
            'brown',
            'burlyWood',
            'cornflowerBlue',
            'coral',
            'chocolate',
            'cornsilk',
            'darkCyan',
            'darkGoldenRod',
            'darkMagenta',
            'darkOliveGreen',
            'darkKhaki',
            'darkTurquoise',
            'hotPink',
            'lightPink'
        )
        for ( let i=0; i< textColorArr.length; i++ ) {
            textColor = textColorArr[Math.floor(Math.random() * textColorArr.length)];
        }
        let text = fontText + ' ' + fontFamily + ' ' + bgColor + ' ' + textColor
        return text
    }

}
export default Utils
