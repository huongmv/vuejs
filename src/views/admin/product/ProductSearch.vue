<template>
    <div class="pr-search">
        <el-row>
            <el-col :span="1" align="left" style="font-size: 24px; font-weight: bold">
                <i class="el-icon-remove-outline" v-if="isHiddenSearchPanel == false" @click="handleHideSearchPanel"></i>
                <i class="el-icon-circle-plus-outline" v-else @click="handleHideSearchPanel"></i>
            </el-col>
            <el-col :span="10" align="left" style="font-size: 24px; font-weight: bold">{{ title }}</el-col>
        </el-row>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item :label="$t('product.product_name')" prop="productName">
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
                <!--<el-button @click="testForm"><i class="el-icon-delete"></i> Test</el-button>-->
            </el-form-item>
        </el-form>
        <!--<country @changeCountry="handleChangeCountry"></country>-->
    </div>
</template>
<script>
import product from '@/api/product/index'
import country from '@/components/localStorage/CountryListener'
export default {
    // components: {
    //   'country': country
    // },
    data () {
        return {
            isHiddenSearchPanel: true,
            title: 'Product search',
            locate: '',
            ruleForm: {
                productName: '',
                startDate: '',
                endDate: '',
                delivery: false
            },
            rules: {
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
    methods: {
        handleHideSearchPanel () {
            this.isHiddenSearchPanel = !this.isHiddenSearchPanel
        },
        submitForm(ruleSearch) {
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
        resetForm(ruleSearch) {
            this.$refs[ruleSearch].resetFields();
        },
        searchDataProduct (dataSearch) {
            product.searchData(dataSearch).then(response => {
                this.$emit('dataProductSearch', response.data)
            })
        }
    }
}
</script>
<style>
.pr-search {
    width: 100%;
    padding-bottom: 20px;
}
.pr-search .el-form {
    padding: 20px 10px;
    border: 1px solid #cccccc;
    border-radius: 10px;
}
</style>
