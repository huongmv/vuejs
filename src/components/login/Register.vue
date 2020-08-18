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
            <div id="captcha">
                <div class="captcha">
                    <el-col :span="24" class="text-center bottom-login-a captcha-bg-001" v-bind:class="[classCaptcha]">
                        {{ captchaTxt }}
                    </el-col>
                </div>
                <div class="input-captcha">
                    <el-col :span="19" class="text-right"  style="padding-top: 5px">
                        <el-input class="input-captcha-color" v-model="registerForm.captcha" placeholder="Enter captcha"></el-input>
                    </el-col>
                    <el-col :span="4" class="text-right" style="padding: 5px 0 0 5px;">
                        <el-button class="input-captcha-color" @click="refreshCaptcha"><i class="fas fa-sync-alt"></i></el-button>
                    </el-col>
                </div>
            </div>
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
            captchaTxt: '',
            classCaptcha: '',
            loading: false,
            messages: 'Register',
            validateData: [],
            registerForm: {
                email: '',
                password: '',
                rePassword: '',
                captcha: ''
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
                ],
                captcha: [
                    { required: true, message: 'Enter captcha', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        register (formName) {
            let captcha = this.$cookies.get('captcha')
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.registerForm.captcha === captcha) {
                        this.registerFunction()
                    } else {
                        this.validateData = []
                        this.validateData.push({ 'msg': 'Captcha is wrong'})
                    }
                    
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
        },
        refreshCaptcha () {
            this.rndCaptcha()
        },
        rndCaptcha () {
            let utils = this.Utils
            utils.randomText(6)
            this.captchaTxt = this.$cookies.get('captcha')
            this.classCaptcha = utils.randomClass()
        },
        registerFunction () {
            let dataRequest = {
                'email': this.registerForm.email,
                'password': this.registerForm.password,
                'rePassword': this.registerForm.rePassword
            }
            let api = this.constApi.all.ALL_REGISTER
            this.callApi.apiParamPost(api, dataRequest).then(res => {
                let dataRes = res.data.data
                if (dataRes.isExist === false) {
                    this.$cookies.set('user', dataRes, 60 * 60 * 12)
                    localStorage.setItem('adminLogin', 'true')
                    this.$emit('closePopup')
                } else {
                    this.validateData = []
                    this.validateData.push({ 'msg': dataRes.email + ' is exist'})
                }
            })
        }
    },
    created () {
        this.rndCaptcha()
    }
}
</script>
<style>
.colorRed {
    color: red;
}
.colorBlue {
    color: blue;
}
</style>