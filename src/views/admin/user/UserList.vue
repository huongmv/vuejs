<template>
    <!-- <div id="user-list" class="user-list">
        <table-data
            :table-data="tableData"
            :has-pagination="true"
            :has-title="true"
            :is-sortable="false"
            empty-text="Data not found"
            title="User list">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" :label="$t('user.stt')" width="80"></el-table-column>
            <el-table-column prop="name" :label="$t('user.name')" class="el-table-text"></el-table-column>
            <el-table-column prop="phone" :label="$t('user.phone')" class="el-table-text"></el-table-column>
            <el-table-column prop="email" :label="$t('user.email')" class="el-table-text"></el-table-column>
            <el-table-column prop="password" :label="$t('user.password')" class="el-table-text"></el-table-column>
            <el-table-column prop="rolesId" :label="$t('user.rolesId')" class="el-table-text"></el-table-column>
            <el-table-column prop="startDate" :label="$t('user.startDate')"></el-table-column>
            <el-table-column prop="endDate" :label="$t('user.endDate')"></el-table-column>
            <el-table-column prop="tokenStart" :label="$t('user.tokenStart')"></el-table-column>
            <el-table-column prop="tokenEnd" :label="$t('user.tokenEnd')"></el-table-column>
            <el-table-column prop="status" :label="$t('user.status')"></el-table-column>
        </table-data>
    </div> -->
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
                        title="User list"    
                        @selectedRow="handleSelectedRow"
                        @on-sort="handleSort">
                        <el-col slot="search" :span="24" class="slot-search">
                            <el-form :model="ruleFormSearch" :rules="ruleSearch" ref="ruleFormSearch" class="userSearchForm">
                            <el-col :span="3">
                                <el-date-picker type="date" :placeholder="$t('user.start_date')" v-model="ruleForm.startDate" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col :span="3">
                                <el-date-picker :placeholder="$t('user.end_date')" v-model="ruleForm.endDate" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col :span="4"><el-input :placeholder="$t('user.user_name')" v-model="ruleForm.productName" ></el-input></el-col>
                            <el-col :span="2">
                                <el-button type="primary" @click="searchForm('ruleFormSearch')"><i class="el-icon-search"></i> {{ $t('btn.search') }}</el-button>
                            </el-col>
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
                                <!-- <down-load-excel :data-export="tableData" :file-name="fileName"></down-load-excel> -->
                                <!-- <el-button class="btn-in-table" @click="handleImportBase64">{{ $t('btn.import_base64') }}<i class="el-icon-upload el-icon-right"></i></el-button>
                                <el-button class="btn-in-table" @click="handleImport">{{ $t('btn.import') }}<i class="el-icon-upload el-icon-right"></i></el-button> -->
                                <el-button class="btn-in-table" v-show="deleteAllItem" icon="el-icon-delete el-icon-right"  @click="deleteAllItems">{{$t('btn.delete_all')}}</el-button>
                            </el-col>
                        </el-col>
                        <el-table-column class="center" type="selection" width="40" style="text-align: center;"></el-table-column>
                        <el-table-column sortable class="center" prop="id" :label="$t('table.stt')" width="80"></el-table-column>
                        <el-table-column sortable class="center el-table-text" prop="name" :label="$t('table.name')" ></el-table-column>
                        <el-table-column sortable class="center" prop="email" :label="$t('table.email')"></el-table-column>
                        <el-table-column sortable class="center" prop="password" :label="$t('table.password')"></el-table-column>
                        <el-table-column sortable class="center" prop="rolesId" :label="$t('table.rolesId')"></el-table-column>
                        <el-table-column sortable class="center" prop="startDate" :label="$t('table.startDate')"></el-table-column>
                        <el-table-column sortable class="center" prop="endDate" :label="$t('table.endDate')"></el-table-column>
                        <el-table-column sortable class="center" prop="tokenStart" :label="$t('table.tokenStart')"></el-table-column>
                        <el-table-column sortable class="center" prop="tokenEnd" :label="$t('table.tokenEnd')"></el-table-column>
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
</template>
<script>
// import userApi from '@/api/admin/user/index'
import TableData from '@/components/table/TableData'
export default {
    components: {
        'table-data': TableData
    },
    data () {
        return {
            tableData: [],
            deleteAllItem: false,
            deleteDisabled: false,
            ruleForm: {
                name: '',
                content: '',
                contentCkEditor: ''
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
            }
        }
    },
    created () {
        this.loadUserList()
    },
    methods: {
        loadUserList () {
            this.tableData = []
            let Utils = this.Utils
            let _this = this
            let api = this.constApi.admin.ADMIN_USER_LIST
            this.callApi.apiNotParamGet(api).then(response => {
                response.data.data.forEach(function (item, index) {
                    let startDate = Utils.parseDateYYYYMMDD(item.startDate)
                    let endDate = Utils.parseDateYYYYMMDD(item.endDate)
                    let tokenStart = Utils.parseDateYYYYMMDD(item.tokenStart)
                    let tokenEnd = Utils.parseDateYYYYMMDD(item.tokenEnd)
                    _this.tableData.push({
                        'id': item.id,
                        'name': item.name,
                        'phone': item.phone,
                        'email': item.email,
                        'password': item.password,
                        'rolesId': item.rolesId,
                        'startDate': startDate,
                        'endDate': endDate,
                        'tokenStart': tokenStart,
                        'tokenEnd': tokenEnd,
                        'status': item.status
                    })
                })
            })
            // userApi.getUserList().then(res => {
            //     // this.tableData = res.data
            // let api = this.constApi.all.ADMIN_USER_LIST
            // // console.log(api);
            // // this.callApi.apiNotParamGet(api).then(res => {
            //     console.log(res);
            //     this.tableData = []
            //     let Utils = this.Utils
            //     let _this = this
            //     console.log(res);
            //     res.data.data.forEach(element => {
            //         let startDate = Utils.parseDateYYYYMMDD(element.startDate)
            //         let endDate = Utils.parseDateYYYYMMDD(element.endDate)
            //         let tokenStart = Utils.parseDateYYYYMMDD(element.tokenStart)
            //         let tokenEnd = Utils.parseDateYYYYMMDD(element.tokenEnd)
            //         _this.tableData.push({
            //             'id': element.id,
            //             'name': element.name,
            //             'phone': element.phone,
            //             'email': element.email,
            //             'password': element.password,
            //             'rolesId': element.rolesId,
            //             'startDate': startDate,
            //             'endDate': endDate,
            //             'tokenStart': tokenStart,
            //             'tokenEnd': tokenEnd,
            //             'status': element.status
            //         })
            //     });
            // })
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
        handleCallFormCreate () {
            this.dialogVisible = !this.dialogVisible
            this.updateEdit = true
            this.editUpdate = false
            this.title = 'Add item'
        },
        deleteAllItems () {
            this.deleteItem(this.multipleSelection)
        }
    }
}
</script>