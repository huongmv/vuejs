<template>
<div class="app-country">
    <el-select v-model="$i18n.locale" placeholder="Select" @change="handleChang">
        <el-option
            v-for="item in country"
            :key="item.id"
            :label="item.countryName"
            :value="item.countryCode">
        </el-option>
    </el-select>
</div>
</template>
<script>
import dataCountry from '@/api/cmn/index'
export default {
    data () {
        return {
            country: [],
            value1: []
        }
    },
    async mounted() {
        await dataCountry.dataCountry().then(res => {
            let _this = this
            this.country = []
            res.data.forEach(function (item) {
                _this.country.push({ 'id': item.id,'countryName': item.countryName,'countryCode': item.countryCode })
            })
        })
        localStorage.setItem('country', JSON.stringify(this.country))
        console.log(localStorage.getItem('country'))
    },
    methods: {
        handleChang () {
            this.$bus.$emit('refreshCountry', this.value1)
            console.log(this.value1)
            this.$_lenguage = this.value1
        }
    },
    beforeCreate () {
        this.$_lenguage = this.value1
    }
    // ,
    // watch: {
    //     country(newCountry) {
    //         localStorage.setItem('country', JSON.stringify(newCountry))
    //     }
    // }
}
</script>
