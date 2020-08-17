<template>
    <div id="user-list" class="user-list">
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
    </div>
</template>
<script>
import userApi from '@/api/admin/user/index'
import TableData from '@/components/table/TableData'
export default {
    components: {
        'table-data': TableData
    },
    data () {
        return {
            tableData: []
        }
    },
    created () {
        this.showUserList()
    },
    methods: {
        showUserList () {
            userApi.getUserList().then(res => {
                // this.tableData = res.data
                console.log(res)
                this.tableData = []
                let Utils = this.Utils
                let _this = this
                res.data.data.forEach(element => {
                    let startDate = Utils.parseDateYYYYMMDD(element.startDate)
                    let endDate = Utils.parseDateYYYYMMDD(element.endDate)
                    let tokenStart = Utils.parseDateYYYYMMDD(element.tokenStart)
                    let tokenEnd = Utils.parseDateYYYYMMDD(element.tokenEnd)
                    _this.tableData.push({
                        'id': element.id,
                        'name': element.name,
                        'phone': element.phone,
                        'email': element.email,
                        'password': element.password,
                        'rolesId': element.rolesId,
                        'startDate': startDate,
                        'endDate': endDate,
                        'tokenStart': tokenStart,
                        'tokenEnd': tokenEnd,
                        'status': element.status
                    })
                });
                console.log(res)
            })
        }
    }
}
</script>