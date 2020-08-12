<template>
    <div>
        <div class="change-password">
            <div class="container">
                <!-- <el-row class="text-left">
                    <el-col :span="12">Changde password</el-col>
                </el-row> -->
                <div class="row">
                    <!-- Left -->
                    <div class="col-lg-8 single-content">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
                            <el-form-item label="Email" prop="email" class="col-lg-8">
                                <el-col>
                                    <el-input id="email" v-model="ruleForm.email" disabled></el-input>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="Password" prop="password" class="col-lg-8">
                                <el-col :span="14">
                                    <el-input id="password" max="30" :type="passwordType" v-model="ruleForm.password"></el-input>
                                </el-col>
                            <el-col :span="2"><i class="el-icon-view show-password" @click="showPassword"></i></el-col>
                            </el-form-item>
                            <el-form-item label="Re-password" prop="rePassword" class="col-lg-8">
                                <el-col :span="14">
                                    <el-input id="rePassword" max="30" :type="rePasswordType" v-model="ruleForm.rePassword" @input="comparePassword"></el-input>
                                </el-col>
                                <el-col :span="2"><i class="el-icon-view show-password" @click="showRepassword"></i></el-col>
                            </el-form-item>
                            <el-row v-show="compare">
                                <el-col style="padding-left: 130px; text-align: left;">aaaaa</el-col>
                            </el-row>
                            <el-form-item label="Code" prop="code" class="col-lg-5">
                                <el-input v-model="ruleForm.code"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">Changde password</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import api from '@/api/login/index'
export default {
    data(){
        return {
            passwordType: 'password',
            rePasswordType: 'password',
            compare: false,
            ruleForm: {
                email: '',
                password: '',
                rePassword: '',
                code: ''
            },
            rules: {
                password: [
                    { required: true, message: 'Please input Password', trigger: 'blur' },
                    { min: 6, max: 30, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                rePassword: [
                    { required: true, message: 'Please input Re-password', trigger: 'blur' },
                    { min: 6, max: 30, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: 'Please input Code', trigger: 'blur' }
                ],
            }
           
        }
    },
    methods: {
         submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.compare === false) {
                    let data = {
                        'email': this.ruleForm.email,
                        'password': this.ruleForm.password,
                        'rePassword': this.ruleForm.rePassword,
                        'code': this.ruleForm.code
                    }
                    api.changePassByEmail(data).then(res => {
                        console.log(res)
                    })
                }
            } else {
                return false;
            }
        })
      },
      showPassword () {
        //   this.passwordType = this.passwordType === 'password' ? 'text' : 'passowrd'
        let password = document.querySelector('#password')
        this.showAndHide(password)
      },
      showRepassword () {
        let password = document.querySelector('#rePassword')
        this.showAndHide(password)
      },
      showAndHide(password) {
        if (password.getAttribute('type') === 'password') {
            password.setAttribute('type', 'text')
        } else {
            password.setAttribute('type', 'password')
        }
      },
      comparePassword (val) {
        if (val === this.ruleForm.password) {
            this.compare = false
        } else {
            this.compare = true
        }

      }
    },
    created () {
        this.ruleForm.email = this.$route.query.email
    }
}
</script>
<style>
    .change-password {
        padding-top: 2%;
    }
    .show-password {
        font-size: 20px;
        cursor: pointer;
        padding-left: 5px;
        color: cornflowerblue;
    }
</style>