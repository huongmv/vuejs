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
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data () {
        return {
            country: [],
            urlImages: '../../images/flag/16px/',
            iconName: 'flag-vietnam-16.png'
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
            // this.$store.dispatch('countryChange', this.$i18n.locale)
            // this.$emit('changeCountry', this.$i18n.locale)
            // localStorage.setItem('countryChange', this.$i18n.locale)
        }
    }
}
</script>
