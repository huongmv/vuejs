const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

export default toBase64

/**
 * import { toBase64 } from '../../../common/file'
 *  const base64URI = await toBase64(file)
 */
