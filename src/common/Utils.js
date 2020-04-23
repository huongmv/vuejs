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
    }
}
export default Utils
