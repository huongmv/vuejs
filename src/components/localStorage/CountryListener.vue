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
            this.$cookie.set('test', countryChange, 1);
            console.log('aaaaaaaaaaaaa countryChange')
        }
    }
}
</script>
