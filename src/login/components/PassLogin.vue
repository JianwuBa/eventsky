<template>
    <div class="container">
        <el-form :model="account" :rules="rules" ref="account" :hide-required-asterisk="true">
            <el-form-item label="邮箱账号" prop="name">
                <el-input v-model="account.name" placeholder="邮箱账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="account.pass" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" @click="Login('account')">登录</el-button>
            </el-form-item>
            <el-alert  v-if="errorMessage"  :title="errorMessageText" type="error"  center :closable="false"  show-icon> </el-alert>
        </el-form>
    </div>
</template>

<script>
export default {
    mounted(){
       
    },
    data() {
      return {
        labelPosition: 'top',
        account: {
          name: '',
          pass:''
        },
        rules:{
          name: [
            { required: true, message: '请输入邮箱账号', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
        //验证码显示状态
        errorMessage:false,
        errorMessageText:""
      }
    },
    methods: {
      Login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("进来了")
            this.$http.post("/user-service/account/login_c?email="+this.account.name+"&type=2&typeCode="+this.account.pass+"").then(res => {
              console.log(res)
              if(res.data.rspCode == 1){
                setTimeout(() => {
                  this.$router.push({path:'/info'})
                }, 100);
              }else if(res.data.rspCode == 0){
                this.errorMessage = true
                this.errorMessageText = "密码错误"
              } 
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
      .text{
          text-align: center;
          cursor: pointer;
          font-size: 16px;
          color: #75A6FE;
          margin-top: 20px;
      }
      .container{
        padding-top: 0;
      }
      /deep/ .el-alert--error.is-light{
        margin: 0;
        padding: 0;
        background: #fff;
        align-items: center;
      }
</style>