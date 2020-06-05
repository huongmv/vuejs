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
// import login from '@/api/login/index'
// import Contants from '@/common/Constants'
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
            // checkedRemember: false,
            // loading: false,
            isLogin: true,
            isRegister: false,
            isForgot: false,
            // messages: 'Sign In',
            // validateData: [
            //     {
            //         msg: 'Enter data 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
            //     },
            //     {
            //         msg: 'Enter data 2'
            //     },
            //     {
            //         msg: 'Enter data 3'
            //     }
            // ],
            // loginForm: {
            //     email: '',
            //     password: ''
            // },
            // rules: {
            //     email: [
            //         { required: true, message: 'Enter email', trigger: 'blur' },
            //         { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            //     ],
            //     password: [
            //         { required: true, message: 'Enter password', trigger: 'blur' }
            //     ],
            //     rePassword: [
            //         { required: true, message: 'Enter re-password', trigger: 'blur' }
            //     ]
            // },
            // registerForm: {
            //     email: '',
            //     password: '',
            //     rePassword: ''
            // },
            // forgotForm: {
            //     email: ''
            // }
        }
    },
    computed: {
        ...mapGetters(['isOpenLoginDialog'])
    },
    methods: {
        // openLoginForm () {
        //     this.$store.dispatch(Contants.LOGIN, true)
        // },
        // login: function () {
        //     let email = this.loginForm.email
        //     let password = this.loginForm.password
        //     // this.$store.dispatch('login', { email, password })
        //     //     .then(() => this.$router.push('/'))
        //     //     .catch(err => console.log(err))
        //     this.$store.dispatch('login', { email, password })
        //         .then(response => {
        //             console.log('=======================')
        //             console.log(response)
        //         })
        //         .catch(err => console.log(err))
        // },
        // register (registerForm) {
        //     console.log(registerForm)
        //     this.$refs['registerForm'].validate((valid) => {
        //         if (valid) {
        //             alert('submit!');
        //         } else {
        //             console.log('error submit!!');
        //             return false;
        //         }
        //     });
        // },
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
        // ,
        //  signUp () {
        //     this.messages = 'Register'
        //     this.isLogin = false
        //     this.isRegister = true
        //     this.isForgot = false
        // },
        // forgotPassword () {
        //     this.messages = 'Forgot Password'
        //     this.isLogin = false
        //     this.isRegister = false
        //     this.isForgot = true
        // },
        // loginUser () {
        //     this.messages = 'Sign In'
        //     this.isLogin = true
        //     this.isRegister = false
        //     this.isForgot = false
        // }
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
