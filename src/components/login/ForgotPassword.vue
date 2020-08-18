<template>
    <el-form
         class="register-form"
         :model="forgotForm"
         :rules="rules"
         ref="forgotForm"
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
                    <el-input v-model="forgotForm.email" placeholder="Enter email"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row class="title-login mt1">
            <el-button :loading="loading" @click="forgotPassword('forgotForm')">Forgot Password</el-button>
        </el-row>
        <el-row class="mt1 bottom-login-form bottom-register-form">
            <el-col :span="12" class="text-right bottom-login-a">
                <a class="bottom-login-form-a" @click="loginUserForm">Login</a>
            </el-col>
            <el-col :span="12" class="text-left bottom-forgot-a">
                <a class="bottom-login-form-a" @click="signUpRegister">Register</a>
            </el-col>
        </el-row>
    </el-form>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                messages: 'Forgot Password',
                forgotForm: {
                    email: ''
                },
                rules: {
                    email: [
                        { required: true, message: 'Enter email', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                    ]
                }
            }
        },
        methods: {
            forgotPassword (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = this.forgotForm.email
                        let api = this.constApi.all.ALL_FORGOT_PASSWORD
                        this.callApi.apiParamPost(api, data).then(res => {
                        })
                    } else {
                        return false;
                    }
                });
            },
            loginUserForm () {
                this.$emit('loginForm', true)
            },
            signUpRegister () {
                this.$emit('registerForm', true)
            }
        }
    }
</script>
