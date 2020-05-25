<template>
    <el-button type="primary" v-on:click="downloadExcel">{{ $t('btn.export') }}<i class="el-icon-download el-icon-right"></i></el-button>
</template>
<script>
import XLSX from 'xlsx';
export default {
    props: {
        dataExport: Array,
        fileName: String
    },
    methods: {
        downloadExcel () {
            const data = XLSX.utils.json_to_sheet(this.dataExport)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, data, 'data')
            XLSX.writeFile(wb,this.fileName)
        }
    }
}
</script>
