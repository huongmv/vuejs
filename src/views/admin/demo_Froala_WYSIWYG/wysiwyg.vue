<template>
    <div>
        <ck-editor @inputDataCkEditor="handleDataCkEditor"></ck-editor>
    </div>
</template>
<script>
import ckEditor from '@/components/ckEditor/CkEditor'
export default {
  name: 'app',
  components: {
    'ck-editor': ckEditor
  },
  data () {
    return {
        myHTML: ''
    }
  },
  methods: {
    handleDataCkEditor (val) {
        console.log(val)
    }
  }
}
</script>
<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>