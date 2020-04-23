<template>
    <div>
        <header-client></header-client>
        <main-client></main-client>
        <footer-client></footer-client>
    </div>
</template>
<script>
import Header from '@/components/client/common/Header'
import Main from '@/components/client/common/Main'
import Slide from '@/components/client/common/Slidebar'
import Footer from '@/components/client/common/Footer'
export default {
    components: {
        'header-client': Header,
        'main-client': Main,
        'footer-client': Footer
    }
}
</script>
<style>
@import "../../assets/css/customer/sb-client.css";
@import "../../assets/font/icomoon/style.css";
</style>
