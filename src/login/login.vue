<template>
    <div class="container">
      <Head></Head>
      <div class="login">
        <el-tabs v-model="activeName" @tab-click="LoginType">
            <el-tab-pane label="验证码登录" name="code" :key="'code'">
                <CodeLogin v-if="isCode"></CodeLogin>
            </el-tab-pane>
            <el-tab-pane label="账号密码登录" name="pass" :key="'pass'">
                <PassLogin v-if="isPass"></PassLogin>    
            </el-tab-pane>
        </el-tabs>
         <div class="text">
            <span @click="forgetPass">忘记密码   </span>
            <span>｜ </span>
            <span @click="register">新用户注册</span>
      </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Head from "./components/LoginHead"
import CodeLogin from './components/CodeLogin'
import PassLogin from './components/PassLogin'
import Footer from "./components/LoginFooter"
export default {
    components:{
        CodeLogin,
        PassLogin,
        Head,
        Footer
    },
    data() {
      return {
          //默认第一个选项卡
          activeName: "code",
          isCode:true,
          isPass:true,
          labelPosition: 'top',
      }
    },
    mounted(){
        
    },
    methods:{
        LoginType(tab) {
            if(tab.name == "code") {
                this.isCode = true;
                this.isPass = false;
            } else if(tab.name == "pass") {
                this.isCode = false;
                this.isPass = true;
            }
        },
        forgetPass(){
          this.$router.push({path:'/forget-pass'})
        },
        register(){
          this.$router.push({path:'/register'})
        }
    }
}
</script>
<style  lang="less" scoped>
  .container{
    
    .login{
      width: 396px;
      margin: 150px auto 0;
    }
  }
  /deep/ .el-tabs__nav{
    width: 100%;
  }
  /deep/ .el-tabs__active-bar{
    width: 50%;
  }
  /deep/ .el-tabs__item{
    text-align: center;
    width: 50%;
  }
  .text{
      text-align: center;
      cursor: pointer;
      font-size: 16px;
      color: #75A6FE;
      margin-top: 20px;
  }
</style>