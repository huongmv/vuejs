import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import FileDialogButtonView from '@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview'

import browseIcon from '@ckeditor/ckeditor5-ckfinder/theme/icons/browse-files.svg'

import { toBase64 } from './fileToBase64'

export default class UploadFile extends Plugin {
  init () {
    console.log('aaaaaaaaaaaaaaaaaaa')
    const editor = this.editor
    editor.ui.componentFactory.add('uploadFile', locale => {
      const view = new FileDialogButtonView(locale)

      view.set({
        acceptedType: '*',
        allowMultipleFiles: false
      })

      view.buttonView.set({
        label: 'Upload file',
        icon: browseIcon,
        tooltip: true
      })

      view.on('done', async (evt, files) => {
        const file = files[0]

        const uploadFnc = editor.config._config.uploadFile.uploadFnc
        const fileName = file.name
        const base64URI = await toBase64(file)
        const res = await uploadFnc({ fileName, base64URI })
        const url = res.data.url

        editor.model.change(writer => {
          const link = writer.createText(fileName)
          writer.setAttribute('linkHref', url, link)

          editor.model.insertContent(link, editor.model.document.selection)
        })
      })

      return view
    })
  }
}
