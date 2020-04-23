<template>
    <div id="product-list" class="product-list">
    <table-data
        :table-data="tableData"
        :has-pagination="true"
        :has-title="true"
        empty-text="Data not found"
        title="Product list">
        <el-col :span="17" slot="button" align="right">
            <el-button type="primary" @click="dialogUploadVisible = true">Add item</el-button>
        </el-col>
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
    <search-form :model="ruleForm" title="Add item" >
        <el-form-item label="Product Name" prop="name">
            <el-col :span="8">
                <el-input v-model="ruleForm.name"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
    </search-form>
    </div>
</template>
<script>
import TableData from '@/components/table/TableData'
import FormSearch from '@/components/form/FormData'
import moment from 'moment'
export default {
    components: {
        TableData,
        'search-form': FormSearch
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
            ],
            ruleForm: {
                name: '',
                content: ''
            }
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
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
