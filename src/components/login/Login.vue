<template>
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
        <el-row class="bottom-login-form">
            <el-col :span="12" class="title-login">
                <el-checkbox v-model="checkedRemember">Remember me</el-checkbox>
            </el-col>
            <el-col :span="12">
                <a @click="forgotPassword">Forgot Password?</a>
            </el-col>
        </el-row>
        <el-row>
            <el-col v-for="item in validateData" :key="item.msg" class="msg-err"><label><i class="fas fa-exclamation-triangle"></i>{{item.msg}}</label></el-col>
        </el-row>
        <el-row class="title-login mt1">
            <el-button :loading="loading" @click="login('loginForm')">Login</el-button>
        </el-row>
        <el-row class="mt1 bottom-login-form">
            Are you new? <a class="font-weight-bold" @click="signUpRegister">Sign Up</a>
        </el-row>
    </el-form>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            loading: false,
            messages: 'Sign In',
            checkedRemember: false,
            validateData: [],
            loginForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Enter email', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                    password: [
                    { required: true, message: 'Enter password', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let dataRequest = {
                        'email': this.loginForm.email,
                        'password': this.loginForm.password
                    }
                    let api = this.constApi.all.ALL_LOGIN
                    this.callApi.apiParamPost(api, dataRequest).then(res => {
                        let dataRes = res.data.data
                        if (dataRes.id > 0) {
                            this.$cookies.set('user', dataRes, 60 * 60 * 12)
                            localStorage.setItem('adminLogin', 'true')
                            this.$emit('closePopup')
                        } else {
                            this.validateData = []
                            this.validateData.push({ 'msg': 'email and password is wrong.'})
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        signUpRegister () {
            this.$emit('registerForm', true)
        },
        forgotPassword () {
            this.$emit('forgotForm', true)
        }
    }
}
</script>
