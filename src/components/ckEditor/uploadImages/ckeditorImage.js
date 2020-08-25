import api from '@/api/index.js'
import constApi from '@/common/ConstApi.js'
const CkEditorService = {
  async uploadImgToDB (data) {
    return new Promise((resolve, reject) => {
      let dataListInput = data
      let dataUploadSub = ''
      let dataUploadArray = []
      let count = (dataListInput.match(/data:image/g) || []).length
      if (count > 0) {
        let dataListSub = []
        for (var i = 0; i < count; i++) {
          let dat01 = dataListInput.substring(0, dataListInput.indexOf('data:image'))
          dataListInput = dataListInput.replace(dat01, '')
          dataUploadSub = dataListInput.substring(dataListInput.indexOf('data:image'), dataListInput.indexOf('"></figure>'))
          let result = ''
          let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          let charactersLength = characters.length
          for (var j = 0; j < 6; j++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
          }
          let fileName = result
          let fileType = '.' + dataUploadSub.substring(0, 15).replace('data:image/', '').replace(';', '')
          dataListSub.push({ 'fileName': fileName + fileType, 'base64URI': dataUploadSub })
          dataListInput = dataListInput.replace(dataUploadSub, '')
          dataUploadArray.push(dat01)
          dataUploadArray.push(dataUploadSub)
          if (i === (count - 1)) {
            dataUploadArray.push(dataListInput)
          }
        }
        let codeList = []
        dataListSub.forEach(async function (item, index) {
          let apiUrl = constApi.all.ALL_UPLOAD_IMAGES
          console.log(item)
          await api.apiParamPost(apiUrl, item).then(response => {
            console.log(response)
            codeList.push(response.data.url)
          })
        //   codeList.push('response.data.url' + index)
          if (codeList.length === dataListSub.length) {
            let editorInsert = ''
            let i = 0
            dataUploadArray.forEach(function (item, index) {
              if (item.search('base64') > 0) {
                editorInsert += codeList[i]
                i++
              } else {
                editorInsert += item
              }
            })
            resolve(editorInsert)
          }
        })
      } else {
        resolve(dataListInput)
      }
    })
  }
}
export default CkEditorService
