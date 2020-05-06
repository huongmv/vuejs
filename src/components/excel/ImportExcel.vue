<template>
    <pop-up :dialog-visible="state"
            @closePopup="handleClosePopupImport" class="popup-import">
        <create-form :model="ruleForm" :rules="rules" :title="title" v-show="createFormProduct"
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
export default {
    data () {
        return {
            limitUpload: 1,
            createFormProduct: true,
            ruleForm: {
                fileList: []
            },
            rules: {},
            title: '',
            fileList: [],
            isDisabled: false,
            state: false,
            loading: false,
            dataError: [],
            dataImportExcel: [],
            showError: false,
        }
    },
    components: {
        'create-form': FormData,
        'pop-up': Popup
    },
    methods: {
        togglePopup() {
          this.state = !this.state
        },
        handleClosePopupImport () {
            this.state = false
        },
        beforeRemoveFile (file) {
            return this.$confirm('Cancel remove file ' + file.name + ' ?')
        },
        submitImport () {
            console.log('cccccccccccccccccccccc')
            this.loading = true
        },
        dataImportError (val) {
            console.log('====================================')
            console.log(val)
            this.dataError = val
            // this.dataError.push({ 'sheetName': 'sheetName01', 'error': [{ 'key': 'A1', 'message': 'message', 'title': 'title', 'value': 'value'},{ 'key': 'A2', 'message': 'message', 'title': 'title', 'value': 'value'}] })
            // this.dataError.push({ 'sheetName': 'sheetName02', 'error': [{ 'key': 'A54', 'message': 'message', 'title': 'title', 'value': 'value'}] })
            // this.dataError.push({ 'sheetName': 'sheetName03', 'error': [{ 'key': 'A5', 'message': 'message', 'title': 'title', 'value': 'value'}] })
            if (this.dataError.length > 0) {
                this.showError = true
            }
        },
        dataSuccessful (val) {
            console.log(val)
        },
        handleRemoveFile () {
            this.filename = ''
        },
        validateDataFile (val) {
            this.$emit('dataFileSelected', val)
        },
        //Processing Method for Uploading Files
        handleChange(file, fileList){
            // console.log(file)
            // console.log(fileList)
            let _this = this
            let fileInout = document.querySelector('input[type=file]').files[0]
            let reader = new FileReader()
            reader.onload = function(e) {
                let data = new Uint8Array(e.target.result)
                let workbook = XLSX.read(data, {type: 'array', cellDates: true, dateNF: 'yyyy/mm/dd HH:mm:ss'})
                _this.validateDataFile(workbook)
            }
            reader.readAsArrayBuffer(fileInout)
            // let reader = new FileReader()
            // let _this = this
            // reader.onload = function (e) {
            //     // _this.strBasse = e.target.result
            //     _this.validateDataFile(e.target.result)
            // }
            // if (fileInout) {
            //     reader.readAsDataURL(fileInout)
            // }
            // // this.validateDataFile(file)
            // this.fileTemp = file.raw
            // if(this.fileTemp){
            //     if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            //         || (this.fileTemp.type == 'application/vnd.ms-excel')){
            //         this.importfxx(this.fileTemp)
            //     } else {
            //         this.$message({
            //             type:'warning',
            //             message:'Attachment format error, please delete and upload again!'
            //         })
            //     }
            // } else {
            //     this.$message({
            //         type:'warning',
            //         message:'Please upload the attachment!'
            //     })
            // }
        },
        //Processing method when exceeding the maximum number of uploaded files
        handleExceed(){
            this.$message({
                type:'warning',
                message:'Exceed the maximum number of uploaded files limit!'
            })
            return
        },
        //How to remove files
        handleRemove(file,fileList){
            this.fileTemp = null
        },
        importfxx(obj) {
            let _this = this
            let inputDOM = this.$refs.inputer
            // Retrieving file data through DOM

            this.file = event.currentTarget.files[0]

            let rABS = false //Read the file as a binary string
            let f = this.file

            let reader = new FileReader()
            //if (!FileReader.prototype.readAsBinaryString) {
            FileReader.prototype.readAsBinaryString = function(f) {
                let binary = ''
                let rABS = false //Read the file as a binary string
                let pt = this
                let wb //Read completed data
                let outdata
                let reader = new FileReader()
                reader.onload = function(e) {
                    let bytes = new Uint8Array(reader.result)
                    let length = bytes.byteLength
                    for (let i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i])
                    }
                    //If not introduced in main.js, you need to introduce it here to parse excel
                    // let XLSX = require('xlsx')
                    if (rABS) {
                        wb = XLSX.read(btoa(fixdata(binary)), {
                            //Manual conversion
                            type: 'base64'
                        })
                    } else {
                        wb = XLSX.read(binary, {
                            type: 'binary'
                        })
                    }
                    outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                    //outdata is read data (without header rows or headers, the header will be the subscript of the object)
                    //Data can be processed here.
                    // let arr = []
                    // outdata.map(v => {
                    //     let obj = {}
                    //     obj.code = v['Code']
                    //     obj.name = v['Name']
                    //     obj.pro = v['province']
                    //     obj.cit = v['city']
                    //     obj.dis = v['district']
                    //     arr.push(obj)
                    // })
                    // _this.da=arr
                    // _this.dalen=arr.length
                    // return arr
                }
                reader.readAsArrayBuffer(f)
            }
            if (rABS) {
                reader.readAsArrayBuffer(f)
            } else {
                reader.readAsBinaryString(f)
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
