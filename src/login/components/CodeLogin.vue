<template>
  <div>
      <el-form :model="formName" :rules="rules" ref="formName"  :hide-required-asterisk="true">
          <el-form-item label="邮箱账号" prop="email">
            <el-input v-model="formName.email" placeholder="请输入邮箱账号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode">
            <el-input v-model="formName.authCode" placeholder="请输入验证码">
              <template slot="append">
                <el-button type="primary" @click="registerCode()">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>
         
          <el-button type="primary" size="medium" class="login" @click="authCodeLogin('formName')">登录</el-button>
          <el-alert  v-if="errorMessage"  :title="errorMessageText" type="error"  center :closable="false"  show-icon> </el-alert>
      </el-form>
     
  </div>
</template>

<script>
    export default {
      data(){
        return{
          formName:{
            email:"",
            authCode:""
          },
          rules: {
            email:[
              { required: true, message: '请输入邮箱账号', trigger: 'blur' }
            ],
            authCode:[
              { required: true, message: '请输入验证码', trigger: 'blur' },
            ],
          },
           //验证码显示状态
          errorMessage:false,
          errorMessageText:""
        } 
        
      },
      methods:{
        registerCode(){
          this.$http.post("/user-service/auth/send?target="+this.formName.email+"&type=EMAIL_LOGIN").then(res => {
            console.log(res)
          })
        },
        authCodeLogin(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$http.post("/user-service/account/login_c?email="+this.formName.email+"&type=1&typeCode="+this.formName.authCode+"").then(res=>{
                console.log(res)
                if(res.data.rspCode == 1){
                  setTimeout(() => {
                    this.$router.push({path:'/info'})
                  }, 1000);
                }else if(res.data.rspCode == 400006){
                  this.errorMessage = true,
                  this.errorMessageText = "验证码错误"
                }
              })
            } else {
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
  /deep/ .el-alert--error.is-light{
      margin: 0;
      padding: 0;
      background: #fff;
      align-items: center;
    }
</style>