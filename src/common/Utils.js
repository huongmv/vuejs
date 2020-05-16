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
    }
}
export default Utils
