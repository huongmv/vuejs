<template>
    <div id="product-list" class="product-list">
    <table-data
        :table-data="tableData"
        :has-pagination="true"
        empty-text="Data not found">
        <el-table-column prop="id" label="STT"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="startDate" label="Start Date"></el-table-column>
        <el-table-column prop="endDate" label="End Date"></el-table-column>
        <el-table-column prop="status" label="Status"></el-table-column>
        <el-table-column>
            <el-button type="warning">Edit</el-button>
            <el-button type="danger">Delete</el-button>
        </el-table-column>
    </table-data>
    </div>
</template>
<script>
import TableData from '@/components/table/TableData'
import moment from 'moment'
export default {
    components: {
        TableData
    },
    data () {
        return {
            tableData: [
                {
                    id: '1',
                    name: 'Product 01',
                    startDate: '2020-02-02',
                    endDate: '2022-02-02',
                    status: 1
                },
                {
                    id: '2',
                    name: 'Product 02',
                    startDate: '2020-02-02',
                    endDate: '2022-02-02',
                    status: 1
                },
                {
                    id: '3',
                    name: 'Product 03',
                    startDate: '2020-02-02',
                    endDate: '2022-02-02',
                    status: 1
                }
            ]
        }
    },
    created () {
        let Utils = this.Utils
        let datea = new Date()
        // let date = Utils.convertDate(datea, 'YYYY-MM-DD')
        // let datel = Utils.convertDate(datea, 'YYYY-MM-DD ddd', 'ja')
        moment.locale('');
        console.log(moment().format('LLLL'))
        console.log(moment().format('L'))
        console.log(moment().format('LL'))
        console.log(moment().format('LLL'))
        console.log(moment().format('LT'))
        console.log(moment().format('LTS'))
    }
}
</script>
