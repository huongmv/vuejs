<template>
    <div class="login-admin">
            <el-form
                    class="login-form"
                    :model="loginForm"
                    :rules="rules"
                    ref="loginForm"
                    width="20%"
            >
                <el-row>
                    <el-col class="text-banner-login">{{this.messages}}</el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Email</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="email">
                            <el-input v-model="loginForm.email" placeholder="Enter email"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="title-login">Password</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item prop="password">
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
                <el-row>
                    <el-col v-for="item in validateData" :key="item.msg" class="msg-err"><label><i class="fas fa-exclamation-triangle"></i>{{item.msg}}</label></el-col>
                </el-row>
                <el-row class="title-login mt1">
                    <el-button :loading="loading" @click="login('loginForm')">Login</el-button>
                </el-row>
            </el-form>
    </div>
</template>
<script>
import login from '@/api/login/index'
import Contants from '@/common/Constants'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            checkedRemember: false,
            validateData: [],
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
    computed: {
        ...mapGetters(['isOpenLoginAdminDialog'])
    },
    methods: {
        login (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let dataRequest = {
                        'email': this.loginForm.email,
                        'password': this.loginForm.password
                    }
                    login.getInforUser(dataRequest).then(res => {
                        if (res.data.id === null) {
                            this.validateData = []
                            this.validateData.push({ 'msg': 'email and password is  wrong.'})
                            localStorage.setItem('alo123', 'false')
                            this.setToken(null)
                        } else {
                            this.setToken(res.data.token)
                            this.$cookies.set('user2', res.data)
                            localStorage.setItem('alo123', 'true')
                            this.$router.push({ name: 'HomeAdmin' })
                            this.destroyOnClose()
                            this.$emit('loginAdmin', true)
                        }
                    })
                } else {
                    return false;
                }
            })
        },
        setToken (token) {
            localStorage.setItem('id_token', token)
        },
        destroyOnClose () {
            this.$refs['loginForm'].resetFields()
        }
    }
}
</script>
<style>
    .login-admin  .msg-err {
        text-align: left;
        color: #e6a23c;
    }
    .login-admin .msg-err label i {
        padding-right: 5px;
    }
    .login-admin .el-dialog__wrapper{
        background: #cccccc;
    }
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
    .login-admin .login-form {
        width: 20%;
        margin: 5% auto;
        background: #ffffff;
        padding: 50px 20px;
    }
</style>
