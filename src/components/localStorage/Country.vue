<template>
<div class="app-country">
    <el-select v-model="value1" placeholder="Select">
        <el-option
            v-for="item in country"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</div>
</template>
<script>
export default {
    data () {
        return {
            country: [],
            value1: []
        }
    },
    mounted() {
        this.country =  [{
            value: '1',
            label: 'VN'
        }, {
            value: '2',
            label: 'JA'
        }, {
            value: '3',
            label: 'USA'
        }]
        localStorage.setItem('country', JSON.stringify(this.country))
        // console.log(localStorage.getItem('country'))
    },
    watch: {
        country(newCountry) {
            localStorage.setItem('country', JSON.stringify(newCountry))
        }
    }
}
</script>
