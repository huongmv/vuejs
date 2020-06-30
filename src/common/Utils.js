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
    return moment.parseZone(date).format('YYYY-MM-DD')
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
        console.log(itemStr)
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
    }
}
export default Utils
