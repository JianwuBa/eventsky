<template>
  <div class="container">
    <Head></Head>
    <div class="register" >
      
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
        <div class="email-everification-code" v-show="emailCodeState">
          <h1 class="tit"><span>注册</span></h1>
          <el-form-item label="邮箱账号">
            <el-input v-model="target" placeholder="请输入邮箱账号"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="authCode" placeholder="请输入验证码">
              <template slot="append">
                <el-button type="primary" @click="registerCode()">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-alert  v-if="errorMessage"  :title="errorMessageText" type="error"  center :closable="false"  show-icon> </el-alert>
          <el-button type="primary" size="medium" @click="registerInformation()">注册</el-button>
         
        </div>
        <div class="account-information" v-show="informationState">
          <h1 class="tit"><span>基本信息</span></h1>
          <el-form-item label="姓名" prop="fullName">
            <el-input v-model="ruleForm.fullName" placeholder="请输入姓名" @input="change($event)"></el-input>
          </el-form-item>
           <el-form-item label="手机号" prop="phone" >
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" @input="change($event)"></el-input>
          </el-form-item>
           <el-form-item label="公司" prop="company">
            <el-input v-model="ruleForm.company" placeholder="请输入公司" @input="change($event)"></el-input>
          </el-form-item>
           <el-form-item label="职务" prop="position">
            <el-input v-model="ruleForm.position" placeholder="请输入职务" @input="change($event)"></el-input>
          </el-form-item>
          <el-button type="primary" size="medium" @click="submitForm('ruleForm')" style="position: relative;z-index: 999;">下一步</el-button>
        </div> 
        
      </el-form>
      <el-form :model="passwordForm" :rules="rules" ref="passwordForm"  class="demo-ruleForm">
        <div v-show="passwordState">
          <h1 class="tit"><span>设置密码</span></h1>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="passwordForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="passwordForm.checkPass"></el-input>
          </el-form-item>
          <el-button type="primary" size="medium" @click="submitPassword('passwordForm')">确认</el-button>
        </div>
      </el-form>
      <div class="service">
        <span>注册代表您同意活动星空的</span> 
        <span style="color:#7FA7F7;cursor:pointer;">《服务条款》</span>
      </div>
      <div class="login">
        <span>已有账号？</span>
        <span style="color:#7FA7F7;cursor:pointer;" @click="login">立即登录</span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./components/LoginHead"
import Footer from "./components/LoginFooter"
import {postRegisterCode ,postRegisterAccount ,postRegisterAccountInfo} from '@/api/userService.js'
export default {
  
  data() {
    // var validatePhone = (rule,value,callback)=> {
    //   const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    //   if(!reg.test(value)){
    //     return callback (new Error('请输入正确的11位手机号码'))
    //   }
    // };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.passwordForm.checkPass !== '') {
          this.$refs.passwordForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.passwordForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm:{
        //注册个人信息
        fullName:'',
        phone:'',
        company:'',
        position:'',
      },
      passwordForm:{
          pass: '',
          checkPass: '',
      },
      rules: {
        fullName:[
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone:[
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        company:[
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        position:[
          { required: true, message: '请输公司职务', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
      labelPosition: 'top',
      authCode: '',
      target :null,
      type :"EMAIL_SIGNUP",
      //邮箱和验证码状态
      emailCodeState:true,
      //个人信息状态
      informationState:false,
      //注册密码状态
      passwordState:false,
      //验证码显示状态
      errorMessage:false,
      errorMessageText:""
    };
  },
  components:{
    Head,
    Footer
  },
  methods:{
    login(){
      this.$router.push({path:'/login'})
    },
    registerCode(){
      // this.$http.post("/user-service/auth/send?target="+this.target+"&type=EMAIL_SIGNUP").then(res =>{
        postRegisterCode(this.target).then(res => {
        console.log(res)
        if(res.data.rspCode == 400005){
          this.errorMessage = true
          this.errorMessageText = "该邮箱已注册"
        }
      })
    },
    registerInformation(){
      // this.$http.post("/user-service/auth/check?type=EMAIL_SIGNUP&target="+this.target+"&authCode="+this.authCode+"").then(res =>{
        postRegisterAccount(this.target,this.authCode).then(res => {
        console.log(res)
        if(res.data.rspCode == 1){
          this.emailCodeState = false;
          this.informationState = true;
        }
        
        else if(res.data.rspCode == 400006){
          this.errorMessage = true
          this.errorMessageText = "验证码错误"
        }
      })
    },
   
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert("submit")
          this.informationState = false;
          this.passwordState = true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    registerInfos(){
      let obj = {
          authCode:this.authCode,
          company:this.ruleForm.company,
          email:this.target,
          fullName:this.ruleForm.fullName,
          passwd:this.passwordForm.pass,
          phone:this.ruleForm.phone,
          position:this.ruleForm.position
      }
      return obj
    },
    submitPassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$http.post("/user-service/account/signup_c?authCode="+this.authCode+"&company="+this.ruleForm.company+"&email="+this.target+"&fullName="+this.ruleForm.fullName+"&passwd="+this.passwordForm.pass+"&phone="+this.ruleForm.phone+"&position="+this.ruleForm.position+"").then(res=>{
            postRegisterAccountInfo(this.registerInfos()).then(res => {
            console.log(res)
            if(res.data.rspCode == 1){
              setTimeout(() => {
                this.$router.push({path:'/account/info'})
              }, 1000);
            }
            else if(res.data.rspCode == 1){
              alert("注册失败")
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    change(e){
      console.log(e)
      this.$forceUpdate()
    }
  }
}
</script>

<style  lang="less" scoped>
  .container{
    .register{
      width: 396px;
      margin: 150px auto 0;
      padding-bottom: 160px;
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
      .el-form--label-top{
        /deep/ .el-form-item__label{
          padding: 0;
        }
      }
      .el-input-group{
        /deep/ .el-input-group__append{
          background: #7FA8F7;
          border: none;
          color: #fff;
          margin-left: 10px;
        }
      }
      /deep/ .el-input__inner{
        line-height: 48px;
        height: 48px;
      }
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
      .service{
        text-align: center;
        font-size: 14px;
        color: #AEB3C4;
        padding: 20px 0 30px ;
        border-bottom: 1px solid #DDDDDD;
      }
      .login{
        font-size: 16px;
        color: #AEB3C4;
        text-align: center;
        padding-top: 18px;
      }
    }
    /deep/ .el-alert--error.is-light{
      margin: 0;
      padding: 0;
      background: #fff;
      align-items: center;
    }
  }
  
</style>