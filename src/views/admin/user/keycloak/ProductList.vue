<template>
    <!-- <div id="product-list" class="product-list"> -->
    <div id="product-list" class="product-list">
        <img src="http://localhost:8080/src/main/resources/images/2020-08-25/8HMyhx.jpeg" />
    <!-- <form-search @dataProductSearch="handleProductSearch"></form-search> -->
    <!--table-->
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Monthly Recap Report</h5>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"> <i class="fas fa-minus"></i> </button>
                            <div class="btn-group">
                                
                                <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown"> <i class="fas fa-wrench"></i> </button>
                                <div class="dropdown-menu dropdown-menu-right" role="menu">
                                    <a href="#" class="dropdown-item">Action</a>
                                    <a href="#" class="dropdown-item">Another action</a>
                                    <a href="#" class="dropdown-item">Something else here</a>
                                    <a class="dropdown-divider"></a>
                                    <a href="#" class="dropdown-item">Separated link</a>
                                </div>
                            </div>
                            <button type="button" class="btn btn-tool" data-card-widget="remove"> <i class="fas fa-times"></i> </button>
                    </div>
                </div>
                <div class="card-body">
                    <table-data
                        :table-data="tableData"
                        :has-pagination="true"
                        :has-title="true"
                        :is-sortable="false"
                        empty-text="Data not found"
                        title="Product list"    
                        @selectedRow="handleSelectedRow"
                        @on-sort="handleSort">
                        <el-col slot="search" :span="24" class="slot-search">
                            <el-form :model="ruleFormSearch" :rules="ruleSearch" ref="ruleFormSearch" class="userSearchForm">
                                <!-- <el-col :span="4">
                                    <t-input v-model="ruleForm.productName" txtId="FirName" txtLabel = "Test"></t-input>
                                </el-col>
                                <el-col :span="4">
                                    <t-input v-model="ruleForm.productName" txtId="FirName" txtLabel = "Test"></t-input>
                                </el-col> -->
                            <el-col :span="3">
                                <el-date-picker type="date" :placeholder="$t('user.start_date')" v-model="ruleForm.startDate" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col :span="3">
                                <el-date-picker :placeholder="$t('user.end_date')" v-model="ruleForm.endDate" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col :span="4"><el-input :placeholder="$t('user.user_name')" v-model="ruleForm.productName" ></el-input></el-col>
                            <el-col :span="4">
                                    <!-- <el-switch v-model="ruleForm.delivery"></el-switch> -->
                                    <t-select></t-select>
                            </el-col>
                            <el-col :span="2">
                                <el-button type="primary" @click="searchForm('ruleFormSearch')"><i class="el-icon-search"></i> {{ $t('btn.search') }}</el-button>
                            </el-col>
                            <!-- <el-form-item :label="$t('product.product_name')" prop="productName">
                                <el-input v-model="ruleForm.productName"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('product.deadline')" required>
                                <el-col :span="6">
                                    <el-form-item prop="startDate">
                                        <el-date-picker type="date" :placeholder="$t('product.place_holder_pick_date')" v-model="ruleForm.startDate" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="1">-</el-col>
                                <el-col :span="6">
                                    <el-form-item prop="endDate">
                                        <el-date-picker :placeholder="$t('product.place_holder_pick_date')" v-model="ruleForm.endDate" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item :label="$t('product.status')" prop="delivery">
                                <el-col :span="1">
                                    <el-switch v-model="ruleForm.delivery"></el-switch>
                                </el-col>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')"><i class="el-icon-search"></i> {{ $t('btn.search') }}</el-button>
                                <el-button @click="resetForm('ruleForm')"><i class="el-icon-delete"></i> {{ $t('btn.reset') }}</el-button>
                                </el-form-item> -->
                            </el-form>
                            
                        </el-col>
                        <el-col class="row" slot="top">
                            <el-col class="btn-group col-sm-12 col-md-6" >
                                <el-button class="btn-in-table" icon="el-icon-plus el-icon-right" @click="handleCallFormCreate">{{ $t('btn.add_item') }}</el-button>
                                <el-button class="btn-in-table" v-show="deleteAllItem" icon="el-icon-delete el-icon-right" @click="deleteAllItems">{{$t('btn.delete_all')}}</el-button>
                            </el-col>
                            <el-col class="col-sm-12 col-md-6" ></el-col>
                        </el-col>
                        <el-col class="row" slot="bottom">
                            <el-col class="btn-group col-sm-12 col-md-12" >
                                <down-load-excel :data-export="tableData" :file-name="fileName"></down-load-excel>
                                <el-button class="btn-in-table" @click="handleImportBase64">{{ $t('btn.import_base64') }}<i class="el-icon-upload el-icon-right"></i></el-button>
                                <el-button class="btn-in-table" @click="handleImport">{{ $t('btn.import') }}<i class="el-icon-upload el-icon-right"></i></el-button>
                                <el-button class="btn-in-table" v-show="deleteAllItem" icon="el-icon-delete el-icon-right"  @click="deleteAllItems">{{$t('btn.delete_all')}}</el-button>
                            </el-col>
                        </el-col>
                        <el-table-column class="center" type="selection" width="40" style="text-align: center;"></el-table-column>
                        <el-table-column sortable class="center" prop="id" :label="$t('table.stt')" width="80"></el-table-column>
                        <el-table-column sortable class="center el-table-text" prop="name" :label="$t('table.name')" ></el-table-column>
                        <el-table-column sortable class="center" prop="startDate" :label="$t('table.start_date')"></el-table-column>
                        <el-table-column sortable class="center" prop="endDate" :label="$t('table.end_date')"></el-table-column>
                        <el-table-column sortable class="center" prop="status" :label="$t('table.status')"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="{row}">
                                <el-button circle type="warning" class="edit-item" @click="editItem(row)" icon="el-icon-edit"></el-button>
                                <el-button circle slot="reference" type="danger" v-bind:disabled="deleteDisabled" @click="deleteItem([row])" icon="el-icon-delete" ></el-button>
                              
                                <!-- <el-button type="warning" class="edit-item" @click="editItem(row)"><i class="el-icon-edit"></i><i class="icon-row-responsive">{{ $t('btn.edit') }}</i></el-button>
                                <el-button slot="reference" type="danger" v-bind:disabled="deleteDisabled" @click="deleteItem([row])"><i class="el-icon-delete"></i><i class="icon-row-responsive">{{ $t('btn.delete') }}</i></el-button> -->
                            </template>
                        </el-table-column>
                    </table-data>
                </div>
            </div>
        </div>
    </div>
    <!--end table-->

    <pop-up :dialog-visible="dialogVisible"
            @closePopup="handleClosePopup" class="popup-add-edit">
        <create-form :model="ruleForm" :rules="rules" :title="title" v-show="createFormProduct">
            <el-form-item label="Product Name" prop="name">
                <el-col :span="8">
                    <el-input ref="txtName" v-model="ruleForm.name" tabindex="1"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Product content" prop="content">
                <el-input type="textarea" v-model="ruleForm.content" tabindex="2"></el-input>
            </el-form-item>
            <el-form-item>
                <ck-editor @inputDataCkEditor="handleDataCkEditor"></ck-editor>
            </el-form-item>
            <el-form-item>
                <el-button tabindex="3" type="primary" :loading="loading" @click="submitForm('ruleForm')" v-show="updateEdit"><i class="el-icon-plus" v-show="iconPlus"></i> Create</el-button>
                <el-button type="warning" class="edit-item" @click="editsubmitForm"  v-show="editUpdate"><i class="el-icon-edit"></i><i class="icon-row-responsive"> Edit</i></el-button>
                <el-button tabindex="4" @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
        </create-form>
    </pop-up>
    <import-excel ref="importExcel" @dataFileSelected="handleDataFileSelected" @importData="handleImportData"></import-excel>
    <import-base64 ref="importBase64" @importDataBase64="handleImportDataBase64"></import-base64>
    <!--<country @changeCountry="handleChangeCountry"></country>-->
    </div>
</template>
<script>
import TableData from '@/components/table/TableData'
import FormData from '@/components/form/FormData'
import FormSearch from './ProductSearch'
import Popup from '@/components/popup/Popup'
import DownLoadExcel from '@/components/excel/ExportExcel'
import ImportExcel from '@/components/excel/ImportExcel'
import ImportBase64 from '@/components/excel/ImportBase64'
import XLSX from 'xlsx'
import ckEditor from '@/components/ckEditor/CkEditor'
import ckeditorImage from '@/components/ckEditor/uploadImages/ckeditorImage'
// import input from '../../../../components/input/Input.vue'
import selectMuntiple from '@/components/select/MuntipleSelect.vue'
export default {
    components: {
        TableData,
        'create-form': FormData,
        'pop-up': Popup,
        'down-load-excel': DownLoadExcel,
        'import-excel': ImportExcel,
        // 'form-search': FormSearch,
        'import-base64': ImportBase64,
        'ck-editor': ckEditor,
        't-select': selectMuntiple
        // 't-input': input
    },
    data () {
        return {
            tableData: [],
            ruleForm: {
                name: '',
                content: '',
                contentCkEditor: ''
            },
            rules: {
                name: [
                    { required: true, message: this.$t('message.please_input_name'), trigger: 'blur' },
                    { min: 3, max: 50, message: this.$t('message.length_should_30_50'), trigger: 'blur' }
                ]
            },
            ruleFormSearch: {
                productName: '',
                startDate: '',
                endDate: '',
                delivery: false
            },
            ruleSearch: {
                productName: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' }
                ],
                startDate: [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                endDate: [
                    { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
                ]
            },
            multipleSelection: [],
            deleteAllItem: false,
            deleteDisabled: false,
            dialogVisible: false,
            deleteConfirm: false,
            createFormProduct: true,
            loading: false,
            iconPlus: true,
            updateEdit: true,
            editUpdate: false,
            dataUpdate: [],
            title: '',
            dialogImportVisible: false,
            strBase64: '',
            fileList: [],
            isDisabled: false,
            fileName: 'file-name.xlsx',
            first: 'John',
            last: 'Doe'
        }
    },
    created () {
       this.loadDataProduct()
    },
    methods: {
        submitForm(formName) {
            if (this.ruleForm.name.length > 3 && this.ruleForm.content.length > 1){
                let utils = this.Utils
                let dateNow = utils.getDateYYYYMMDDHHmmss()
                ckeditorImage.uploadImgToDB(this.ruleForm.content).then(res => {
                    let dataRequest = { 'name': this.ruleForm.name, 'content': res, 'startDate': dateNow, 'endDate': dateNow  }
                    this.createDataProduct(dataRequest)
                })
            } else if (this.ruleForm.name.length < 3) {
                this.$message.error('Please input name.');
            }else if (this.ruleForm.content.length < 1) {
                this.$message.error('Please input content.');
            }
        },
        editsubmitForm () {
            let utils = this.Utils
            let dateNow = utils.getDateYYYYMMDDHHmmss()
            let dataRequest = { 'id': this.dataUpdate.id,  'name': this.ruleForm.name, 'content': this.ruleForm.content, 'startDate': dateNow, 'endDate': dateNow   }
            this.updateDataProduct(dataRequest)
        },
        resetForm(formName) {
            this.ruleForm.name = ''
            this.ruleForm.content = ''
        },
        loadDataProduct () {
            this.tableData = []
            let Utils = this.Utils
            let _this = this
            let api = this.constApi.admin.ADMIN_PRODUCT_LIST
            this.callApi.apiNotParamGet(api).then(response => {
                response.data.data.forEach(function (item, index) {
                    let startDate = Utils.parseDateYYYYMMDD(item.startDate)
                    let endDate = Utils.parseDateYYYYMMDD(item.endDate)
                    _this.tableData.push({
                        'id': item.id,
                        'name': item.name,
                        'content': item.content,
                        'startDate': startDate,
                        'endDate': endDate,
                        'status': item.status,
                        'displayOrder': item.displayOrder
                    })
                })
            })
        },
        handleSelectedRow (val) {
            if (val.length > 1){
                this.deleteAllItem = true
                this.deleteDisabled = true
                this.multipleSelection = val
            } else {
                this.deleteAllItem = false
                this.deleteDisabled = false
            }
        },
        handleSort (data) {
            let api = this.constApi.admin.ADMIN_CHANGE_DISPLAY_ORDER
            this.callApi.apiParamPost(api, { data: data }).then(response => {
                this.showMsgDialog(response.data.data, 'Change row')
            })
        },
        handleProductSearch (val) {
            this.tableData = val
        },
        editItem (val) {
            this.updateEdit = false
            this.editUpdate = true
            this.dialogVisible = !this.dialogVisible
            this.ruleForm.name = val.name
            this.ruleForm.content = val.content
            this.dataUpdate = val
            this.title = 'Edit item'
        },
        createDataProduct (data) {
            let api = this.constApi.admin.ADMIN_CREATE_PRODUCT
            this.callApi.apiParamPost(api, data).then(response => {
                this.showMsgDialog(response.data.data, 'Create')
            })
        },
        deleteItem (val) {
            let dataRequest = { data: val }
            let api = this.constApi.admin.ADMIN_DELETE_PRODUCT
            this.callApi.apiParamPost(api, dataRequest).then(response => {
                this.showMsgDialog(response.data.data, 'Delete')
            })
        },
        updateDataProduct (data) {
            let api = this.constApi.admin.ADMIN_EDIT_PRODUCT
            this.callApi.apiParamPost(api, data).then(response => {
                this.showMsgDialog(response.data.data, 'Update')
            })
        },
        deleteAllItems () {
            this.deleteItem(this.multipleSelection)
        },
        showMsgDialog (data, name) {
            if (data > 0) {
                this.$message({
                    message: name + ',' + name + ' is success.',
                    type: 'success'
                });
                this.loadDataProduct()
                this.handleClosePopup(false)
            } else {
                this.$message.error( name + ', ' + name +' is success error.')
            }
        },
        handleImportBase64 () {
            this.$refs.importBase64.togglePopup()
        },
        handleImport () {
            this.$refs.importExcel.togglePopup()
            this.title = 'Import'
        },
        handleDataFileSelected (val) {
            let Utils = this.Utils
            let product = val.Sheets['product']
            let outdataSheetProduct = XLSX.utils.sheet_to_json(product)
            let dataErrorRequest = []
            let dataSuccessfulRequest = []
            let arrSheetProduct = []
            let arrSheetProductError = []
            outdataSheetProduct.forEach(function (v, index) {
                let countCell = index + 2
                let obj = {}
                let stt = v['STT']
                let name = v['Name']
                let startDate = Utils.parseDateYYYYMMDD(v['Start Date'])
                let endDate = Utils.parseDateYYYYMMDD(v['End Date'])
                let status = v['Status']
                if (Utils.isNumber(stt)) {
                    obj.STT = stt
                } else {
                    arrSheetProductError.push({ 'key': 'A' + countCell, 'title': 'STT', 'value': stt, 'message': 'is not number' })
                }
                if (name === null) {
                    name = ''
                }
                obj.Name = name.toString()
                if (Utils.isDate(startDate)) {
                    obj.startDate = startDate
                } else {
                    arrSheetProductError.push({ 'key': 'C' + countCell, 'title': 'Start Date', 'value': startDate, 'message': 'is not format date' })
                }
                if (Utils.isDate(endDate)) {
                    obj.endDate = endDate
                } else {
                    arrSheetProductError.push({ 'key': 'D' + countCell, 'title': 'End Date', 'value': endDate, 'message': 'is not format date' })
                }
                if (Utils.isNumber(status)) {
                    obj.status = status
                } else {
                    arrSheetProductError.push({ 'key': 'E' + countCell, 'title': 'Status', 'value': status, 'message': 'is not number' })
                }
                arrSheetProduct.push(obj)
            })
            if (arrSheetProductError.length > 0) {
                dataErrorRequest.push({ 'sheetName': 'product', 'error': arrSheetProductError})
            } else {
                dataSuccessfulRequest.push({ 'sheetName': 'product', 'dataList': arrSheetProduct})
            }
            let product01 = val.Sheets['product01']
            let outdataSheetProduct01 = XLSX.utils.sheet_to_json(product01)
            let arrSheetProduct01 = []
            let arrSheetProduct01Error = []
            outdataSheetProduct01.forEach(function (v, index) {
                let countCell = index + 2
                let obj = {}
                let stt = v['STT']
                let name = v['Name']
                let status = v['Status']
                if (Utils.isNumber(stt)) {
                    obj.STT = stt
                } else {
                    arrSheetProduct01Error.push({ 'key': 'A' + countCell, 'title': 'STT', 'value': stt, 'message': 'is not number' })
                }
                if (name === null) {
                    name = ''
                }
                obj.Name = name.toString()
                if (Utils.isNumber(status)) {
                    obj.status = status
                } else {
                    arrSheetProduct01Error.push({ 'key': 'E' + countCell, 'title': 'Status', 'value': status, 'message': 'is not number' })
                }
                arrSheetProduct01.push(obj)
            })
            if (arrSheetProduct01Error.length > 0) {
                dataErrorRequest.push({ 'sheetName': 'product01', 'error': arrSheetProduct01Error})
            } else {
                dataSuccessfulRequest.push({ 'sheetName': 'product01', 'dataList': arrSheetProduct01})
            }
            // If is data error format
            if (dataErrorRequest.length > 0) {
                this.$refs.importExcel.dataImportError(dataErrorRequest)
            } else {
                this.$refs.importExcel.dataSuccessful(dataSuccessfulRequest)
            }
        },
        handleImportDataBase64 (val) {
            let api = this.constApi.admin.ADMIN_PRODUCT_IMPORT_EXCEL_BASE64
            this.callApi.apiParamPost(api, val).then(response => {
                this.$refs.importExcelBase64.togglePopup()
                this.showMsgDialog(response.data, 'Import')
            })
        },
        handleDataCkEditor (val) {
            this.ruleForm.content = val
        },
        handleImportData (val) {
            let api = this.constApi.admin.ADMIN_PRODUCT_IMPORT_EXCEL
            this.callApi.apiParamPost(api, { data: val }).then(response => {
                this.$refs.importExcel.togglePopup()
                this.showMsgDialog(response.data.data, 'Import')
            })
        },
        handleClosePopup (val) {
            this.dialogVisible = val
            this.ruleForm.name = ''
            this.ruleForm.content = ''
        },
        handleCallFormCreate () {
            this.dialogVisible = !this.dialogVisible
            this.updateEdit = true
            this.editUpdate = false
            this.title = 'Add item'
        },
        searchForm(ruleSearch) {
            this.$refs[ruleSearch].validate((valid) => {
                if (valid) {
                    let utils = this.Utils
                    let startDate = utils.parseDateYYYYMMDDHHmmss(this.ruleForm.startDate)
                    let endDate = utils.parseDateYYYYMMDDHHmmss(this.ruleForm.endDate)
                    let delivery = 1
                    if (this.ruleForm.delivery) {
                        delivery = 2
                    }
                    let dataSearch = {
                        'productName': this.ruleForm.productName,
                        'startDate': startDate,
                        'endDate': endDate,
                        'delivery': delivery
                    }
                    this.searchDataProduct(dataSearch)
                } else {
                    return false;
                }
            });
        },
        searchDataProduct (dataSearch) {
            let api = this.constApi.admin.ADMIN_SEARCH_PRODUCT
            this.callApi.apiParamPost(api, dataSearch).then(response => {
                this.$emit('dataProductSearch', response.data.data)
            })
        }
    },
    mounted() {
        let $ = this._$
        $('.txt-anima input').on('focusin', function() {
            $(this).parent().find('label').addClass('active');
        });

        $('.txt-anima input').on('focusout', function() {
            if (!this.value) {
                $(this).parent().find('label').removeClass('active');
            }
        });
        $('.txt-anima textarea').on('focusin', function() {
            $(this).parent().find('label').addClass('active');
        });

        $('.txt-anima textarea').on('focusout', function() {
            if (!this.value) {
                $(this).parent().find('label').removeClass('active');
            }
        });
    }
}
</script>
<style>

.popup-import .el-dialog{
    width: 40%;
}
.app-list-data .el-table .el-table__body tbody tr td.el-table_1_column_3 {
    text-align: left;
}
.btn-group .app-list-data, .btn-group .el-button {
    float: left;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: none;
}
.btn-group .btn-in-table:hover,
.btn-group .el-button:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
}
.userSearchForm .el-col{
    padding-right: 15px;
}
.slot-search {
    padding: 10px 0;
}
/* .product-list .popup-add-edit .el-dialog{
    width: 80%;
}
.product-list .popup-import .form-data .row-import{
    position: relative;
}
.product-list .popup-import .form-data .row-import .import-data .el-upload button{
    margin-right: 150px;
}
.product-list .popup-import .form-data .btn-submit {
    position: absolute;
    top: 0;
} */
</style>
