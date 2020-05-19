<template>
    <pop-up :dialog-visible="state"
            @closePopup="handleClosePopupImport" class="popup-import">
        <create-form :rules="rules" :title="title" v-show="createFormProduct"
                     :width="300">
            <el-row class="row-import">
                <el-upload
                        class="import-data"
                        id="upload"
                        action=""
                        :on-change="handleChange"
                        :file-list="fileList"
                        :limit="1"
                        :on-remove="handleRemoveFile"
                        :before-remove="beforeRemoveFile"
                        :show-file-list="true"
                        :auto-upload="false">
                    <el-button type="primary" :disabled="isDisabled">Select file <i class="el-icon-upload el-icon-right"></i></el-button>
                </el-upload>
                <el-button type="success" class="btn-submit" :loading="loading" @click="submitImport">Import to server <i class="el-icon-upload2"></i></el-button>
            </el-row>
            <el-row>
                <div>Files upload with a size less than 500kb</div>
            </el-row>
        </create-form>
        <el-row v-show="showError">
            <div class="message-error">
                <ul v-for="dataEr in dataError" :key="dataEr.sheetName">
                    <li class="message-error-title">Sheet : {{dataEr.sheetName}}</li>
                    <li class="message-error-content" v-for="item in dataEr.error" :key="item.key">
                        <span class="color-red">{{item.key}}</span>
                        <span>{{item.title}}</span>
                        <span  class="color-red">{{item.value}}</span>
                        <span>{{item.message}}</span>
                    </li>
                </ul>
            </div>
        </el-row>
    </pop-up>
</template>
<script>
import FormData from '@/components/form/FormData'
import Popup from '@/components/popup/Popup'
import XLSX from 'xlsx'
import base64 from '@/common/ConvertFileToBase64'
export default {
    data () {
        return {
            limitUpload: 1,
            createFormProduct: true,
            rules: {},
            title: 'Import file',
            fileList: [],
            isDisabled: false,
            state: false,
            loading: false,
            dataError: [],
            dataImportExcel: [],
            showError: false,
            strBase64: '',
            fileName: ''
        }
    },
    components: {
        'create-form': FormData,
        'pop-up': Popup
    },
    methods: {
        togglePopup() {
            this.state = !this.state
            this.loading = false
            this.fileList = []
        },
        handleClosePopupImport () {
            this.state = false
        },
        beforeRemoveFile (file) {
            return this.$confirm('Cancel remove file ' + file.name + ' ?')
        },
        submitImport () {
            this.loading = true
            let dataBase64 = { 'fileName': this.fileName, 'dataBase64': this.strBase64 }
            this.$emit('importDataBase64', dataBase64)
        },
        dataImportError (val) {
            this.dataError = val
            if (this.dataError.length > 0) {
                this.showError = true
            }
        },
        dataSuccessful (val) {
            this.dataImportExcel = val
        },
        handleRemoveFile () {
            this.fileList = []
        },
        validateDataFile (val) {
            this.$emit('dataFileSelected', val)
        },
        //Processing Method for Uploading Files
        handleChange(file, fileList){
            this.fileTemp = file.raw
            if(this.fileTemp){
                if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                    || (this.fileTemp.type == 'application/vnd.ms-excel')){
                    this.fileName = file.name
                    let fileInout = document.querySelector('input[type=file]').files[0]
                    let reader = new FileReader()
                    let _this = this
                    reader.onload = function (e) {
                        _this.strBase64 = e.target.result
                    }
                    if (fileInout) {
                        reader.readAsDataURL(fileInout)
                    }
                } else {
                    this.fileList = []
                    this.$message({type:'warning', message:'Attachment format error, please delete and upload again!'})
                }
            } else {
                this.fileList = []
                this.$message({ type:'warning', message:'Please upload the attachment!'})
            }
        }
    }
}
</script>
<style>
    .message-error {
        border-top: 1px solid #cccccc;
        padding-top: 10px;
        margin-top: 20px;
    }
    .message-error ul li {
        list-style: none;
        text-align: left;
        padding: 2px 0px;
    }
    .message-error .message-error-title {
        font-weight: bold;
        font-size: 16px;
    }
    .message-error .message-error-content span{
        padding: 0 5px;
    }
</style>
