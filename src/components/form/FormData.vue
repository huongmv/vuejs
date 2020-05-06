<template>
    <div id="form-data" class="form-data">
        <el-row>
            <el-col :span="1" align="left" style="font-size: 24px; font-weight: bold">
                <i class="el-icon-remove-outline" v-if="isHiddenSearchPanel == false" @click="handleHideSearchPanel"></i>
                <i class="el-icon-circle-plus-outline" v-else @click="handleHideSearchPanel"></i>
            </el-col>
            <el-col :span="10" align="left" style="font-size: 24px; font-weight: bold">{{ title }}</el-col>
        </el-row>
        <div class="app-form-data" v-show="isHiddenSearchPanel == false">
            <el-form label-width="130px" :model="model" :rules="rules" ref="formData">
                <slot></slot>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-data',
    props: {
        title: String,
        model: Object,
        rules: Object
    },
    data () {
        return {
            isHiddenSearchPanel: false
        }
    },
    methods: {
        handleHideSearchPanel () {
            this.isHiddenSearchPanel = !this.isHiddenSearchPanel
        },
        handleSearch () {
            this.$emit('on-search', this.$refs['formData'])
        }
    }
}
</script>
