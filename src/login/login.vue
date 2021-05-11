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
      </div>
    </div>
</template>

<script>
import Head from "./components/LoginHead"
import CodeLogin from './components/CodeLogin'
import PassLogin from './components/PassLogin'
export default {
    components:{
        CodeLogin,
        PassLogin,
        Head
    },
    data() {
      return {
          //默认第一个选项卡
          activeName: "pass",
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
        }
    }
}
</script>
<style  lang="less" scoped>
  .container{
    padding-top: 60px;
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
</style>