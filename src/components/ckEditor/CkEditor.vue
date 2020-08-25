<template>
    <ckeditor :editor="editor" v-model="data" :config="editorConfig" @input="inputEditor"></ckeditor>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Table from '@ckeditor/ckeditor5-table/src/table'
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'
// import UploadFile from './upload-plugin/uploadfile'
// import ApiService from '@/common/ApiService'
// import api from '../../api/index'
// const API_URL = process.env.VUE_APP_BASE_API
// const SIMPLE_UPLOAD_PATH = '/upload/images'

export default {
  props: ['value', 'functionId'],
  data () {
    return {
      dataInput: '',
      data: '',
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          Essentials,
          UploadAdapter,
          Autoformat,
          Bold,
          Italic,
          BlockQuote,
          EasyImage,
          Heading,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Base64UploadAdapter,
          CKFinder,
          Link,
          List,
          Paragraph,
          Alignment,
          Table,
          SimpleUploadAdapter
        ],
        toolbar: {
          items: [
            'heading',
            '|',
            'alignment',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'imageTextAlternative',
            '|',
            'uploadFile',
            'imageUpload',
            'ckfinder',
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
            '|',
            'undo',
            'redo'
          ]
        },
        image: {
          toolbar: [ 'imageTextAlternative' ],
          styles: [
            // This option is equal to a situation where no style is applied.
            'full',
            // This represents an image aligned to the left.
            'alignLeft',
            // This represents an image aligned to the right.
            'alignRight'
          ],
          upload: {
            types: ['jpeg', 'png', 'gif']
          }
        }
        // simpleUpload: {
        //   //  uploadUrl: `${API_URL}${SIMPLE_UPLOAD_PATH}`,
        //   uploadUrl: this.uploadImages(),
        //   headers: {
        //     Authorization: ApiService.setTokenToHeader()
        //   }
        // },
        // uploadFile: {
        //   // uploadFnc: file => api.apiNotParamGet('/upload/images')
        //   uploadFnc: file => api.apiNotParamGet('/upload/images')
        // }
      }
    }
  },
    created () {
      this.initData()
    },
    methods: {
      initData () {
          this.data = this.value ? this.value : ''
      },
      inputEditor () {
        this.$emit('inputDataCkEditor', this.data)
      }
    },
    watch: {
      value: function () {
          this.initData()
      }
  }
}
</script>