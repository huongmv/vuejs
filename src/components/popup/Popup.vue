<template>
    <div class="app-dialog">
        <el-dialog :visible.sync="dialogVisible"
                   :before-close="handleClose">
            <slot></slot>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        dialogVisible: Boolean
    },
    methods: {
        handleClose () {
            this.$emit('closePopup', false)
        }
    }
}
</script>
