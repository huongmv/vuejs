<template>
    <div style="width: 20%; padding-left: 4px;">
        <el-row>
            <el-col :span="10">{{ title }}</el-col>
            <el-col :span="14" align="right">
                <i class="el-icon-remove-outline" v-if="isHiddenSearchPanel == false" @click="handleHideSearchPanel"></i>
                <i class="el-icon-circle-plus-outline" v-else @click="handleHideSearchPanel"></i>
            </el-col>
        </el-row>
        <div class="app-search-form" v-show="isHiddenSearchPanel == false">
            <el-form label-width="130px" :model="model" :rules="rules" ref="searchForm">
                <slot></slot>
                <el-form-item align="center">
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">検索</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormSearch',
        props: {
            title: String,
            model: Object,
            rules: Object,
            width: 'style="width: 20%; padding-left: 4px;"'
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
                this.$emit('on-search', this.$refs['searchForm'])
            }
        }
    }
</script>
