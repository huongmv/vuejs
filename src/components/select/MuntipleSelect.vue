<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    v-bind="options"
    placeholder="Choose tags for your article">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        // options: [{
        //   value: 'HTML',
        //   label: 'HTML'
        // }, {
        //   value: 'CSS',
        //   label: 'CSS'
        // }, {
        //   value: 'JavaScript',
        //   label: 'JavaScript'
        // }],
        value: []
      }
    },
    props: {
      options: Object
    }
  }
</script>