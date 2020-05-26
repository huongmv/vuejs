<template><div></div></template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['countryChange'])
    },
    watch: {
        countryChange(countryChange) {
            this.$emit('changeCountry', countryChange)
            console.log('aaaaaaaaaaaaa countryChange')
        }
    }
}
</script>
