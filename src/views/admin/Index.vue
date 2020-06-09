<template>
    <!-- Page Wrapper -->
    <div id="wrapper">
        <slide></slide>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <nav-ad></nav-ad>
                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <demo-nav></demo-nav>
                    <router-view></router-view>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->
            <footer-ad></footer-ad>
        </div>
        <!-- End of Content Wrapper -->
        <login-admin-form v-show="isLoginAdmin"></login-admin-form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import slideBar from '@/components/admin/common/Sidebar'
import navAdmin from '@/components/admin/common/Nav'
import demoNav from '@/components/admin/common/DemoNav'
import footerAdmin from '@/components/admin/common/Footer'
import { SET_OPEN_LOGIN_ADMIN_DIALOG } from '@/store/ActionStore'
import LoginAdminForm from '@/views/login/LoginAdmin'
export default {
    data () {
      return {
          isLoginAdmin: false
      }
    },
    components: {
        'slide': slideBar,
        'nav-ad': navAdmin,
        'demo-nav': demoNav,
        'footer-ad': footerAdmin,
        'login-admin-form': LoginAdminForm
    },
    computed: {
        ...mapGetters(['isOpenLoginAdminDialog'])
    },
    methods: {
        checkCookieAd () {
            let user = this.$cookies.get('user2')
            console.log(user)
            if (user !== null && user !== '' && user !== 'null') {
                console.log('login')
                // this.emailLogin = user.email
                // this.isLogin = false
            } else {
                this.isLoginAdmin = false
                console.log('not login')
                // this.emailLogin = ''
                // this.isLogin = true
            }
        }
    },
    created () {
        console.log('aaaaa')
        this.checkCookieAd()
    }
}
</script>
<style>
@import "../../assets/css/customer/sb-admin.css";
@import "../../assets/css/customer/admin.css";
</style>
