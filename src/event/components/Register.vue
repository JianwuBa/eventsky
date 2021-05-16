<template>
    <div class="container">
        
            <el-form :model="registerForm" :rules="registerRules" ref="registerForm">
                <h4 class="tit">默认报名信息收集*</h4>
                <div class="register-info">
                    <div class="info">
                        <el-form-item label="" prop="registerRame">
                            <el-input v-model="registerForm.registerRame" placeholder="姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="tel">
                            <el-input v-model="registerForm.tel" placeholder="手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="email">
                            <el-input v-model="registerForm.email" placeholder="邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="compony">
                            <el-input v-model="registerForm.compony" placeholder="公司"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="position">
                            <el-input v-model="registerForm.position" placeholder="职位"></el-input>
                        </el-form-item>
                    </div>
                    <div class="messages">
                        <el-form-item label="" prop="liveMessage">
                            <el-input  type="textarea" placeholder="留言"  v-model="registerForm.liveMessage"> </el-input>
                        </el-form-item>
                    </div>
                    
                </div>
                <h4 class="tit">报名者需填写社交账号*</h4>
                <el-form-item label="" class="accounts-type">
                    <el-checkbox-group v-model="registerForm.accounts">
                        <el-checkbox label="微信" checked name="type"></el-checkbox>
                        <el-checkbox label="领英" name="type"></el-checkbox>
                        <el-checkbox label="钉钉" name="type"></el-checkbox>
                        <el-checkbox label="知乎" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item class="registers">
                    <div class="save-event-btn">
                    <el-button type="primary" @click="registerFormInfo('registerForm')">保存</el-button>
                    </div>
                </el-form-item>
            </el-form>
            
            
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                registerForm:{
                    registerRame:'',
                    tel:"",
                    email:'',
                    compony:'',
                    position:'',
                    liveMessage:'',
                    accounts:[]
                },
                registerRules:{
                    registerRame: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                    ],
                    tel: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                    ],
                    compony: [
                        { required: true, message: '请输入公司', trigger: 'blur' },
                    ],
                    position: [
                        { required: true, message: '请输入职位', trigger: 'blur' },
                    ],
                    liveMessage: [
                        { required: true, message: '请输入留言', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            registerFormInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 940px;
        margin: 0 auto;
        .registers{
            width: 100%;
            border-radius: 3px;
            position: fixed;
            padding-left: 190px;
            left: 0;
            bottom: 50px;
            box-sizing: border-box;
            .save-event-btn{
                width:80%;
                background: #FFFFFF;
                box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.18);
                border-radius: 3px;
                margin: 0 auto;
                text-align: right;
                /deep/ .el-button{
                    background: #F5A623;
                    border-radius: 0px 3px 3px 0px;
                    line-height: 50px;
                    margin: 0;
                    padding: 0 70px;
                    color: #fff;
                    font-size: 16px;
                    border: none;
                }
            }
        }
        .tit{
            font-size: 14px;
            color: #323C47;
            margin-bottom: 8px;
        }
        .register-info{
            display: flex;
            border-bottom: 1px solid  #DDDDDD;
            margin-bottom: 15px;
            .info{
                flex: 1;
                margin-right: 18px;
                /deep/ .el-form-item{
                    margin-bottom: 15px;
                }
                /deep/ .el-form-item__error{
                    padding: 0;
                }
            }
            .messages{
                flex: 1;
                /deep/ .el-textarea__inner{
                    height: 260px;
                    resize: none;
                }
            }
            
        }
        .accounts-type{
            border-bottom: 1px solid  #DDDDDD;
            margin-bottom: 15px;
        }
    }
</style>