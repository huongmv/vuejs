<template>
    <div class="app-list-data ">
        <!-- <el-row>
            <el-col :span="1" align="left" style="font-size: 24px; font-weight: bold">
                <i class="el-icon-remove-outline" v-if="isHiddenSearchPanel == false" @click="handleHideSearchPanel"></i>
                <i class="el-icon-circle-plus-outline" v-else @click="handleHideSearchPanel"></i>
            </el-col>
            <el-col :span="12" align="left" style="font-size: 24px; font-weight: bold" v-show="hasTitle">{{ title }}</el-col>
        </el-row> -->
        <el-row v-show="isHiddenSearchPanel == false">
            <slot name="search"></slot>
        </el-row> 
        <el-row v-show="isHiddenSearchPanel == false">
            <slot name="top"></slot>
        </el-row> 
        <div class="app-list-table" v-show="isHiddenSearchPanel == false">
            <el-table :data="showTable"
                border
                fit
                :cellClassName="cellClassName"
                v-bind="tableProps"
                highlight-current-row
                :empty-text="emptyText"
                @current-change="rowClickCurrent"
                @selection-change="handleSelectionChange"
                style="width: 100%">
                <slot></slot>
            </el-table>
            <el-row align="left" v-show="hasPagination">
                <div class="block">
                <el-pagination type="local"
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page.sync="currentPage"
                               :page-sizes="[5, 10, 20, 50, 100]"
                               :page-size="pageSize"
                               layout="total, sizes, prev, pager, next"
                               :total="totalItem">
                </el-pagination>
                </div>
            </el-row>
        </div>
        <el-row v-show="isHiddenSearchPanel == false">
            <slot name="bottom"></slot>
        </el-row> 
    </div>
    
</template>

<script>
import Sortable from 'sortablejs'
export default {
    name: 'TableData',
    props: {
        tableData: Array,
        hasPagination: Boolean,
        hasTitle: Boolean,
        isSortable: Boolean,
        cellClassName: Function,
        tableProps: Object,
        title: {
            type: String,
            default: () => 'Không có dữ liệu'
        },
        emptyText: String
    },
    create(){
        this.isSortable = false
    },
    data () {
        return {
            showTable: [],
            currentPage: 1,
            pageSize: 5,
            totalItem: 0,
            isHiddenSearchPanel: false
        }
    },
    watch: {
        tableData: function (val) {
            this.paginateData()
        }
    },
    mounted () {
        this.paginateData()
        if (this.isSortable) {
            const table = document.querySelector('.el-table__body-wrapper tbody')
            const self = this
            Sortable.create(table, {
                onEnd ({ newIndex, oldIndex }) {
                    const sortedData = self.getSortedData(newIndex, oldIndex)
                    const targetRow = self.tableData.splice(oldIndex, 1)[0]
                    self.tableData.splice(newIndex, 0, targetRow)
                    // get sorted items
                    self.$emit('on-sort', sortedData)
                }
            })
        }
    },
    methods: {
        handleSizeChange (val) {
            this.pageSize = val
            this.paginateData()
        },
        handleCurrentChange (val) {
            this.currentPage = val
            this.paginateData()
        },
        paginateData () {
            this.totalItem = this.tableData.length
            this.showTable = this.hasPagination ? this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) : this.tableData
        },
        rowClickCurrent (val) {
            this.$emit('currentChange', val)
        },
        getSortedData (newIndex, oldIndex) {
            let changeData = []
            changeData.push({ id: this.showTable[oldIndex].id, displayOrder: this.showTable[newIndex].displayOrder })
            if (newIndex > oldIndex) {
                for (let i = oldIndex + 1; i <= newIndex; i++) {
                    let item = { id: this.showTable[i].id, displayOrder: this.showTable[i - 1].displayOrder }
                    changeData.push(item)
                }
            } else {
                for (let i = newIndex; i < oldIndex; i++) {
                    let item = { id: this.showTable[i].id, displayOrder: this.showTable[i + 1].displayOrder }
                    changeData.push(item)
                }
            }
            return changeData
        },
        handleSelectionChange(val) {
            this.$emit('selectedRow', val)
        },
        handleHideSearchPanel () {
            this.isHiddenSearchPanel = !this.isHiddenSearchPanel
        }
    }
}
</script>
<style scoped>
    .app-list-table {
        margin-top: 4px;
    }
    .app-list-table .has-gutter {
        background: #757575 !important;
        background-color: #757575 !important;
        color: #616161 !important;
    }
    .app-list-table .el-table td {
        padding: unset
    }
</style>
