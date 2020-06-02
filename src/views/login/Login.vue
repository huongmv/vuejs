<template>
    <div class="app-login">
        <el-dialog
                :visible.sync="isOpenLoginDialog"
                :show-close="true"
                :before-close="destroyOnClose"
                :close-on-click-modal="true"
                width="20%">
            <!-- Login form -->
            <el-form v-show="isLogin"
                    class="login-form"
                    :model="loginForm"
                    :rules="rules"
                    ref="loginForm"
            >
                <el-row>
                    <el-col class="text-banner-login">{{this.messages}}</el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Email</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="loginId">
                            <el-input v-model="loginForm.email" placeholder="Enter email"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Password</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="loginId">
                            <el-input v-model="loginForm.password" placeholder="Enter password" type="password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="title-login">
                        <el-checkbox v-model="checkedRemember">Remember me</el-checkbox>
                    </el-col>
                    <el-col :span="12">
                        <a>Forgot Password?</a>
                    </el-col>
                </el-row>
                <el-row class="title-login mt1">
                    <el-button :loading="loading" @click="login">Login</el-button>
                </el-row>
                <el-row class="mt1">
                    Are you new? <a @click="signUp">Sign Up</a>
                </el-row>
            </el-form>
            <!-- End login form -->
            <!-- Register form -->
            <el-form v-show="isRegister"
                    class="register-form"
                    :model="registerForm"
                    :rules="registerRules"
                    ref="registerForm"
            >
                <el-row>
                    <el-col class="text-banner-login">{{this.messages}}</el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Email</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="loginId">
                            <el-input v-model="registerForm.email" placeholder="Enter email"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Password</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="loginId">
                            <el-input v-model="registerForm.password" placeholder="Enter password" type="password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Re-Password</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="loginId">
                            <el-input v-model="registerForm.rePassword" placeholder="Re-password" type="password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="title-login"> </el-col>
                    <el-col :span="12">
                        <a>Forgot Password?</a>
                    </el-col>
                </el-row>
                <el-row class="title-login mt1">
                    <el-button :loading="loading" @click="login">Login</el-button>
                </el-row>
                <el-row class="mt1">
                    Are you new? <a @click="signUp">Sign Up</a>
                </el-row>
            </el-form>
            <!-- End register form -->
        </el-dialog>
    </div>
</template>
<script>
import login from '@/api/login/index'
import Contants from '@/common/Constants'
export default {
    data(){
        return {
            checkedRemember: false,
            isOpenLoginDialog: true,
            loading: false,
            isLogin: true,
            isRegister: false,
            messages: 'Sign In',
            loginForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Enter email', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Enter password', trigger: 'blur' }
                ]
            },
            registerForm: {
                email: '',
                password: '',
                rePassword: ''
            },
            registerRules: {
                email: [
                    { required: true, message: 'Enter email', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Enter password', trigger: 'blur' }
                ],
                rePassword: [
                    { required: true, message: 'Enter re-password', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        openLoginForm () {
            this.$store.dispatch(Contants.LOGIN, true)
        },
        login: function () {
            let email = this.loginForm.email
            let password = this.loginForm.password
            // this.$store.dispatch('login', { email, password })
            //     .then(() => this.$router.push('/'))
            //     .catch(err => console.log(err))
            this.$store.dispatch('login', { email, password })
                .then(response => {
                    console.log('=======================')
                    console.log(response)
                })
                .catch(err => console.log(err))
        },
        closeForm (formName) {
            this.destroyOnClose()
        },
        destroyOnClose () {
            this.$refs['loginForm'].resetFields()
        },
        signUp () {

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
</style>
