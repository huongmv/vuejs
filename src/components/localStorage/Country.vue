<template>
<div class="app-country">
    <el-select v-model="$i18n.locale" placeholder="Select" @change="handleChangeLocal">
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
import { mapState, mapMutations } from 'vuex'
export default {
    data () {
        return {
            country: []
        }
    },
    async mounted() {
        let api = this.constApi.all.ALL_CMN_COUNTRY_LIST
        await this.callApi.apiNotParamGet(api).then(res => {
            let _this = this
            this.country = []
            res.data.forEach(function (item) {
                _this.country.push({ 'id': item.id,'countryName': item.countryName,'countryCode': item.countryCode })
            })
        })
    },
      computed: {
        ...mapState(['countryChange'])
    },
    methods: {
        ...mapMutations([
        'CHANGE_COUNTRY'
        ]),
        handleChangeLocal () {
            this.CHANGE_COUNTRY(this.$i18n.locale)
        }
    }
}
</script>
