<template>
    <el-form
         class="register-form"
         :model="registerForm"
         :rules="rules"
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
                <el-form-item prop="email">
                    <el-input v-model="registerForm.email" placeholder="Enter email"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="title-login">Password</el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form-item prop="password">
                    <el-input v-model="registerForm.password" placeholder="Enter password" type="password"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="title-login">Re-Password</el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form-item prop="rePassword">
                    <el-input v-model="registerForm.rePassword" placeholder="Re-password" type="password"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col v-for="item in validateData" :key="item.msg" class="msg-err"><label><i class="fas fa-exclamation-triangle"></i>{{item.msg}}</label></el-col>
        </el-row>
        <el-row class="title-login mt1">
            <el-button :loading="loading" @click="register('registerForm')">Register</el-button>
        </el-row>
        <el-row class="mt1 bottom-login-form bottom-register-form">
            <el-col :span="12" class="text-right bottom-login-a">
                <a class="bottom-login-form-a" @click="loginUserForm">Login</a>
            </el-col>
            <el-col :span="12" class="text-left bottom-forgot-a">
                <a class="bottom-login-form-a" @click="forgotPassword">Forgot Password?</a>
            </el-col>
        </el-row>
    </el-form>
</template>
<script>
import register from '@/api/login/index'
export default {
    data () {
        return {
            loading: false,
            messages: 'Register',
            validateData: [],
            registerForm: {
                email: '',
                password: '',
                rePassword: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Enter email', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
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
        register (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let dataRequest = {
                        'email': this.registerForm.email,
                        'password': this.registerForm.password,
                        'rePassword': this.registerForm.rePassword
                    }
                    register.register(dataRequest).then(res => {
                        if (res.data.id === null) {
                            this.$emit('closePopup')
                        } else {
                            this.validateData = []
                            this.validateData.push({ 'msg': res.data.email + ' is exist'})
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        loginUserForm () {
            this.$emit('loginForm', true)
        },
        forgotPassword () {
            this.$emit('forgotForm', true)
        }
    }
}
</script>
