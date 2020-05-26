<template>
    <div class="app-search">
        <el-row>
            <el-col :span="1" align="left" style="font-size: 24px; font-weight: bold">
                <i class="el-icon-remove-outline" v-if="isHiddenSearchPanel == false" @click="handleHideSearchPanel"></i>
                <i class="el-icon-circle-plus-outline" v-else @click="handleHideSearchPanel"></i>
            </el-col>
            <el-col :span="10" align="left" style="font-size: 24px; font-weight: bold">{{ title }}</el-col>
        </el-row>
        <div class="app-search-form" v-show="isHiddenSearchPanel">
            <el-form label-width="130px" :model="ruleSearch" :rules="rulesSearch" ref="searchForm">
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
        ruleSearch: Object,
        rulesSearch: Object
    },
    data () {
        return {
            isHiddenSearchPanel: true,
            locate: localStorage.getItem('countryChange') || 'en'
        }
    },
    methods: {
        handleHideSearchPanel () {
            this.isHiddenSearchPanel = !this.isHiddenSearchPanel
        },
        handleSearch (formName) {
            this.$emit('on-search', this.$refs['searchForm'])
        }
    }
}
</script>
