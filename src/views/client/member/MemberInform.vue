<template>
    <div>
        <div class="site-section">
            <div class="container">
                <div class="row">
                    <!-- Left -->
                    <div class="col-lg-8 single-content">
                        <!--Member inform-->
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="member-inform">
                            <el-form-item label="Name" required>
                                 <el-col :span="11">
                                    <el-form-item prop="firstName">
                                        <el-input v-model="ruleForm.firstName" placeholder="First name"></el-input>
                                    </el-form-item>
                                 </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                  <el-col :span="11">
                                    <el-form-item prop="lastname">
                                        <el-input v-model="ruleForm.lastname" placeholder="Last name"></el-input>
                                    </el-form-item>
                                 </el-col>
                            </el-form-item>
                            <el-form-item label="Gender" prop="gender">
                                <el-select v-model="ruleForm.gender" placeholder="Gender">
                                    <el-option label="Male" value="1"></el-option>
                                    <el-option label="Female" value="2"></el-option>
                                    <el-option label="Other" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Birthday" required class="member-inform-birthday">
                                <el-col :span="11">
                                    <el-col :span="7">
                                        <el-form-item prop="date">
                                            <el-input v-model="ruleForm.date" placeholder="DD"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="month">
                                            <!-- <el-input v-model="ruleForm.month" placeholder="Month"></el-input> -->
                                            <el-select v-model="ruleForm.month" placeholder="MM">
                                                <el-option label="1" value="01"></el-option>
                                                <el-option label="2" value="02"></el-option>
                                                <el-option label="3" value="03"></el-option>
                                                <el-option label="4" value="04"></el-option>
                                                <el-option label="5" value="05"></el-option>
                                                <el-option label="6" value="06"></el-option>
                                                <el-option label="7" value="07"></el-option>
                                                <el-option label="8" value="08"></el-option>
                                                <el-option label="9" value="09"></el-option>
                                                <el-option label="10" value="10"></el-option>
                                                <el-option label="11" value="21"></el-option>
                                                <el-option label="12" value="32"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="8">
                                        <el-form-item prop="year">
                                            <el-input v-model="ruleForm.year" placeholder="YYYY"></el-input>
                                        </el-form-item>   
                                     </el-col>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="Phone">
                                 <el-col :span="8">
                                    <el-form-item prop="phone">
                                        <el-input v-model="ruleForm.phone" placeholder="Phone"></el-input>
                                    </el-form-item>
                                 </el-col>
                            </el-form-item>
                            <el-form-item label="Mobile phone" required>
                                 <el-col :span="8">
                                    <el-form-item prop="mobilePhone">
                                        <el-input v-model="ruleForm.mobilePhone" placeholder="Mobile phone"></el-input>
                                    </el-form-item>
                                 </el-col>
                            </el-form-item>
                            <el-form-item label="Email" required>
                                 <el-col :span="8">
                                    <el-form-item prop="email">
                                        <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
                                    </el-form-item>
                                 </el-col>
                            </el-form-item>
                             <el-form-item label="Avatar">
                                 <el-col :span="24">
                                    <el-upload
                                        action="#"
                                        :on-change="handleChangeUploafFile"
                                        :before-remove="beforeRemove"
                                        list-type="picture-card"
                                        :auto-upload="false">
                                            <i slot="default" class="el-icon-plus"></i>
                                            <div slot="file" slot-scope="{file}">
                                            <img
                                                class="el-upload-list__item-thumbnail"
                                                :src="file.url" alt=""
                                            >
                                            <span class="el-upload-list__item-actions">
                                                <span
                                                class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)"
                                                >
                                                <i class="el-icon-zoom-in"></i>
                                                </span>
                                                <!-- <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleDownload(file)"
                                                >
                                                <i class="el-icon-download"></i>
                                                </span> -->
                                                <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleRemove(file)"
                                                >
                                                <i class="el-icon-delete"></i>
                                                </span>
                                            </span>
                                            </div>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                        </el-dialog>
                                 </el-col>
                            </el-form-item>
                            <el-form-item>
                                <el-col>
                                    <el-upload
                                    class="avatar-uploader"
                                    action="#"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :auto-upload="false"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="Address" prop="address">
                                <el-input type="textarea" v-model="ruleForm.address"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                                <el-button @click="resetForm('ruleForm')">Reset</el-button>
                            </el-form-item>
                        </el-form>
                        <!--End member inform-->
                    </div>
                    <!-- End left -->
                    <!-- Right -->
                    <div class="col-lg-3 ml-auto">
                        <div class="section-title">
                            <h2>Popular Posts</h2>
                        </div>

                        <div class="trend-entry d-flex">
                            <div class="number align-self-start">01</div>
                            <div class="trend-contents">
                                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                                <div class="post-meta">
                                    <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                                </div>
                            </div>
                        </div>

                        <div class="trend-entry d-flex">
                            <div class="number align-self-start">02</div>
                            <div class="trend-contents">
                                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                                <div class="post-meta">
                                    <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                                </div>
                            </div>
                        </div>

                        <div class="trend-entry d-flex">
                            <div class="number align-self-start">03</div>
                            <div class="trend-contents">
                                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                                <div class="post-meta">
                                    <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                                </div>
                            </div>
                        </div>

                        <div class="trend-entry d-flex pl-0">
                            <div class="number align-self-start">04</div>
                            <div class="trend-contents">
                                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                                <div class="post-meta">
                                    <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                                    <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                                </div>
                            </div>
                        </div>

                        <p>
                            <a href="#" class="more">See All Popular <span class="icon-keyboard_arrow_right"></span></a>
                        </p>
                    </div>
                    <!-- End right -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                imageUrl: '',
                ruleForm: {
                    firstName: '',
                    lastname: '',
                    gender: '',
                    date: '',
                    month: '',
                    year: '',
                    phone: '',
                    mobilePhone: '',
                    email: '',
                    address: '',
                    strBasse64: ''
                },
                rules: {
                    firstName: [
                        { required: true, message: 'Please input First name', trigger: 'blur' },
                        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                    ],
                    lastname: [
                        { required: true, message: 'Please input Last name', trigger: 'blur' }
                    ],
                    date: [
                        { pattern: /^[0-9]{1}$/,required: true, message: 'Please input a date', trigger: 'blur' },
                        { min: 1, max: 31, message: 'Date should be 1 to 31', trigger: 'blur' }
                    ],
                    month: [
                        { required: true, message: 'Please select a month', trigger: 'change' }
                    ],
                    year: [
                        { pattern: /^[0-9]{4}$/, required: true, message: 'Please input a year', trigger: 'blur' },
                        { min: 1970, max: 2020, message: 'Year should be 1970 to 2020', trigger: 'blur' }
                    ],
                    mobilePhone: [
                        { pattern: /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/, required: true, message: 'Please input a mobile phone', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                return this.$confirm(`Cancel the transfert of ${ file.name } ?`)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                console.log(this.dialogImageUrl)
            },
            handleDownload(file) {
                console.log(file);
            },
            handleChangeUploafFile (file) {
                this.filename = file.name
                if (this.filename.length > 0) {
                    this.ruleForm.inputName = this.filename
                }
                let fileInout = document.querySelector('input[type=file]').files[0]
                let reader = new FileReader()
                let _this = this
                reader.onload = function (e) {
                    _this.strBasse64 = e.target.result
                }
                if (fileInout) {
                    reader.readAsDataURL(fileInout)
                }
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`Cancel the transfert of ${ file.name } ?`)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 11024 / 11024 < 2;

                if (!isJPG) {
                this.$message.error('Avatar picture must be JPG format!');
                }
                if (!isLt2M) {
                this.$message.error('Avatar picture size can not exceed 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>
<style>
    .member-inform {
        text-align: left;
    }
    .member-inform .line {
        text-align: center;
    }
    .member-inform-birthday .el-form-item{
        padding-right: 10px;
        text-align: center;
    }
    .member-inform-birthday .el-form-item .el-input__inner {
        text-align: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
 </style>
