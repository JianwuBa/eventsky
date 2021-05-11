<template>
    <div class="container">
        <el-form :model="account" ref="account"  class="">
            <el-form-item label="邮箱账号" prop="name">
                <el-input v-model="account.name" placeholder="邮箱账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input v-model="account.pass" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="Login()">登录</el-button>
        </el-form>
        <div class="text">
            <span>忘记密码   </span>
            <span>｜ </span>
            <span>新用户注册</span>
        </div>
    </div>
</template>

<script>
export default {
     mounted(){
        console.log("密码登录")
    },
    data() {
      return {
        account: {
          name: '',
          pass:''
        }
      };
    },
    methods: {
     Login(){
        this.$http.post("/account/login_c?email="+this.account.name+"&type=2&typeCode="+this.account.pass+"").then(res => {
            console.log(res)
            if(res.data.rspCode == 1){
                alert("登录成功")
            }
        })
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
</style>