<template>
    <div class="app-login">
        <el-dialog
            :visible.sync="isOpenLoginDialog"
            :show-close="true"
            :before-close="destroyOnClose"
            :close-on-click-modal="true"
            width="20%">
            <!-- Login form -->
            <login-form v-show="isLogin" @registerForm="handleRegisterForm" @forgotForm="handleForgotForm" @closePopup="destroyOnClose"></login-form>
            <!-- End login form -->
            <!-- Register form -->
            <register v-show="isRegister" @forgotForm="handleForgotForm" @loginForm="handleLoginForm" @closePopup="destroyOnClose"></register>
            <!-- End register form -->
            <!-- Forgot Password form -->
            <forgot-password v-show="isForgot" @loginForm="handleLoginForm" @registerForm="handleRegisterForm" @closePopup="destroyOnClose"></forgot-password>
            <!-- End Forgot Password form -->
        </el-dialog>
    </div>
</template>
<script>
import LoginForm from '@/components/login/Login'
import Register from '@/components/login/Register'
import ForgotPassword from '@/components/login/ForgotPassword'
import { mapGetters } from 'vuex'
export default {
    components: {
      'login-form': LoginForm,
      'register': Register,
      'forgot-password': ForgotPassword
    },
    data(){
        return {
            isLogin: true,
            isRegister: false,
            isForgot: false,
        }
    },
    computed: {
        ...mapGetters(['isOpenLoginDialog'])
    },
    methods: {
        destroyOnClose () {
            this.isLogin = true
            this.isRegister = false
            this.isForgot = false
            this.$emit('closePopupLogin', false)
        },
        handleRegisterForm (val) {
            this.isLogin = !val
            this.isRegister = val
            this.isForgot = !val
        },
        handleLoginForm (val) {
            this.isLogin = val
            this.isRegister = !val
            this.isForgot = !val
        },
        handleForgotForm (val) {
            this.isLogin = !val
            this.isRegister = !val
            this.isForgot = val
        }
    }
}
</script>
<style>
.app-login .el-dialog {
    max-width: 450px;
}
.app-login .title-login {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
}
.app-login .text-banner-login {
    font-size: 24px;
    font-weight: bold;
}
.app-login .title-login button{
    width: 100%;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    background: #167BFF;
}
.app-login .title-login .el-checkbox__label,
.app-login .bottom-login-form a {
    color: #3b5998;
    cursor: pointer;
}
.app-login .title-login .el-checkbox__label:hover,
.app-login .bottom-login-form a:hover {
    text-decoration: underline;
}
.app-login .bottom-login-form a.bottom-login-form-a {
    font-weight: bold;
}
.app-login .bottom-login-form .bottom-login-a {
    border-right: 2px solid #3b5998;
}
.app-login .bottom-login-form .bottom-login-a a {
    padding-right: 5px;
}
.app-login .bottom-login-form .bottom-forgot-a a {
    padding-left: 5px;
}
.app-login .msg-err {
    text-align: left;
}
.app-login .msg-err label i {
    padding-right: 5px;
    color: #e6a23c;
}
</style>
