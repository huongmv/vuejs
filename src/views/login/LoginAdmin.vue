<template>
    <div class="login-admin">
        <el-dialog
            :visible.sync="isOpenLoginDialog"
            :show-close="false"
            :before-close="destroyOnClose"
            :close-on-click-modal="true"
            width="20%">
            <el-form
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
            </el-form>
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
            loginForm: {
                email: '',
                password: ''
            },
            loading: false,
            messages: 'Sign In',
            rules: {
                email: [
                    { required: true, message: 'Enter email', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Enter password', trigger: 'blur' }
                ]
            },
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
        }
    }
}
</script>
<style>
    .login-admin .el-dialog {
        max-width: 450px;
    }
    .login-admin .title-login {
        font-size: 14px;
        font-weight: bold;
        text-align: left;
    }
    .login-admin .text-banner-login {
        font-size: 24px;
        font-weight: bold;
    }
    .login-admin .title-login button{
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        background: #167BFF;
    }
    .login-admin {
        background: #c0c1c8;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
