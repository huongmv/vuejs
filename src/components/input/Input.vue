<template>
    <!-- <el-button class="btn-in-table" v-on:click="downloadExcel">{{ $t('btn.export') }}<i class="el-icon-download el-icon-right"></i></el-button> -->
    <div class="txt-anima">
        <label :for="id">{{txtLabel}}</label>
        <input :id="id" type="text" :value="value" />
    </div>
</template>
<script>
export default ({
    props: {
        txtId: String,
        txtLabel: String,
        txtValue: String
    },
    data () {
        return {
            id: null,
            value: null
        }
    }, 
    mounted () {
        this.id = this.txtId
        this.value = this.txtValue
    }

})
</script>
