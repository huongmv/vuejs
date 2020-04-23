<template>
    <div class="app-list-data">
        <el-row>
            <el-col :span="6" v-show="hasTitle">{{ title }}</el-col>
            <slot name="button"></slot>
        </el-row>
        <div class="app-list-table">
            <el-table :data="showTable"
                      border
                      fit
                      :cellClassName="cellClassName"
                      v-bind="tableProps"
                      highlight-current-row
                      :empty-text="emptyText"
                      @current-change="rowClickCurrent"
                      style="width: 100%">
                <slot></slot>
            </el-table>
            <el-row align="right" v-show="hasPagination">
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
                default: () => '検索結果'
            },
            emptyText: String
        },
        data () {
            return {
                showTable: [],
                currentPage: 1,
                pageSize: 5,
                totalItem: 0
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
            }
        }
    }
</script>
<style scoped>
    .app-list-table {
        margin-top: 4px;
    }
</style>
