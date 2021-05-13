<template>
    <div class="container">
    <Head></Head>
    <div class="forget-pass" v-show="forgetPass">
        <h1 class="tit"><span>忘记密码</span></h1>
        <el-form :model="ruleForm"  ref="ruleForm" >
            
            <el-form-item label="邮箱账号">
                <el-input v-model="ruleForm.email" placeholder="请输入邮箱账号"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="ruleForm.code" placeholder="请输入验证码">
                <template slot="append">
                    <el-button type="primary" @click="registerCode()">发送验证码</el-button>
                </template>
                </el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="submitCode()">确定</el-button>
            <el-alert  v-if="errorMessage"  :title="errorMessageText" type="error"  center :closable="false"  show-icon> </el-alert>
            <el-alert :title="codeSuccessMessageText" v-if="codeSuccessMessage"  type="success"  center  :closable="false" show-icon></el-alert>
        </el-form>
        </div>
        <div class="forget-pass" v-show="resetPassStates">
            <h1 class="tit"><span>重置密码</span></h1>
            <el-form :model="ruleFormPass" :rules="rules" ref="ruleFormPass" >
                <el-form-item label="设置新密码" prop="pass">
                    <el-input type="password" v-model="ruleFormPass.pass" placeholder="请输入密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码" prop="checkPass">
                    <el-input type="password" v-model="ruleFormPass.checkPass" autocomplete="off" placeholder="请重复输入新密码">
                    </el-input>
                </el-form-item>
                <el-button type="primary" size="medium" @click="resetPass('ruleFormPass')">确定</el-button>
            </el-form>
            <el-alert  :title="successMessageText" v-if="successMessage"  type="success"  center  :closable="false"   show-icon></el-alert>
        </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./components/LoginHead"
import Footer from "./components/LoginFooter"
export default {
    components:{
        Head,
        Footer
    },
    data(){
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleFormPass.checkPass !== '') {
                this.$refs.ruleFormPass.validateField('checkPass');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleFormPass.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return{
            ruleForm:{
                email:'',
                code:''
            },
            ruleFormPass: {
                pass: '',
                checkPass: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            },
            //验证码显示状态
            errorMessage:false,
            errorMessageText:"",
            //忘记密码
            forgetPass:true,
            //重置密码
            resetPassStates:false,
            //重置密码成功
            successMessage:false,
            successMessageText:"",
            //验证码正确
            codeSuccessMessageText:false,
            codeSuccessMessage:""
        }
    },
    methods:{
        //获取验证码
        registerCode(){
            this.$http.post("/auth/send?target="+this.ruleForm.email+"&type=EMAIL_RESET_PASSWD").then(res=>{
                console.log(res);
            })
        },
        // 校验验证码
        submitCode(){
            this.$http.post("/auth/check?target="+this.ruleForm.email+"&type=EMAIL_RESET_PASSWD&authCode="+this.ruleForm.code+"").then(res=>{
                console.log(res);
                if(res.data.rspCode == 400006){
                    
                    this.errorMessage = true,
                    this.errorMessageText = "验证码错误"
                }else if(res.data.rspCode == 1){
                    this.codeSuccessMessage = true
                    this.codeSuccessMessageText = "验证码成功，自动跳转请稍后"
                    setTimeout(() => {
                        this.forgetPass=false;
                        this.resetPassStates = true;
                    }, 1000);
                    
                }
            })
        },
        // 重置密码
        resetPass(ruleFormPass){
            this.$refs[ruleFormPass].validate((valid) => {
                if (valid) {
                    this.$http.post("/account/reset_passwd?authCode="+this.ruleForm.code+"&email="+this.ruleForm.email+"&passwd="+this.ruleFormPass.pass+"").then(res => {
                        console.log(res)
                        if(res.data.rspCode == 1){
                            this.successMessage = true
                            this.successMessageText = "重置密码成功，自动跳转登录页面"
                        }
                        setTimeout(() => {
                            this.$router.push({path:'/login'})
                        }, 1000);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style  lang="less" scoped>
    /deep/ .el-button--medium{
        width: 100%;
        background: #597EF7;
        color: #597EF7;
        color: #fff;
        padding: 0;
        margin: 0;
        border-radius: 4px;
        line-height: 50px;
        margin-top: 36px;
        font-size: 16px;
    }
 
    /deep/ .el-input-group__append{
        background: #7FA8F7;
        border: none;
        color: #fff;
        margin-left: 10px;
    }
    .forget-pass{
        width: 396px;
        margin: 150px auto 0;
        .tit{
            font-size: 24px;
            color: #333;
            font-weight: normal;
            line-height: 50px;
            text-align: center;
            margin-bottom: 30px;
            span{
                display: block;
                width: 200px;
                margin: 0 auto;
                border-bottom: 2px solid #027AFF;
            }
        }
    }
    /deep/ .el-alert--error.is-light{
      padding: 0;
      margin-top: 15px;
      background: #fff;
      align-items: center;
    }
    /deep/.el-alert{
        background: #fff;
    }
</style>