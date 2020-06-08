
const toBase64 = {
    getBase64 (fileInput) {
        // let fileInout = document.querySelector('input[type=file]').fileInput[0]
        let reader = new FileReader()
        reader.onload = function (e) {
            return e.target.result
        }
        if (fileInput) {
            reader.readAsDataURL(fileInput)
        }
    }
}

export default toBase64

/**
 * import { toBase64 } from '../../../common/file'
 *  const base64URI = await toBase64(file)
 */
