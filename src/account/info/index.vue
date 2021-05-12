<template>
  <div class="container">
    <el-container>
        <el-header class="account-header">
            <Head></Head>
        </el-header>
        <el-container class="aside">
            <Aside></Aside>
        <el-container>
        <el-main>
            <InfoTit></InfoTit>
            <div class="title">
                <el-tabs v-model="activeName" @tab-click="LoginType">
                    <el-tab-pane label="基本信息" name="info" :key="'info'">
                        <Info></Info>
                    </el-tab-pane>
                    <el-tab-pane label="修改密码" name="changePass" :key="'changePass'">
                        <ChangePass></ChangePass>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>    
</template>

<script>
    import Head from "../components/Head"
    import Aside from "../components/Aside"
    import InfoTit from "../components/InfoTit"
    import Info from "../components/Info"
    import ChangePass from "../components/ChangePass"
    export default {
        data() {
            return{
                //默认第一个选项卡
                activeName: "info",
                isInfo:true,
                isChangePass:true,
            }
        },
        components:{
            Head,
            Aside,
            InfoTit,
            Info,
            ChangePass
        },
        methods:{
            LoginType(tab) {
                if(tab.name == "info") {
                    this.isInfo = true;
                    this.isChangePass = false;
                } else if(tab.name == "changePass") {
                    this.isInfo = false;
                    this.isChangePass = true;
                }
            }
        }
    };
</script>
<style lang="less" scoped>
  .el-header {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(180, 180, 180, 0.26);
    height: 60px;
  }
  .aside{
      margin-top: 1px;
  }
  .el-aside {
    color: #333;
  }
  .el-main{
      padding: 0;
      padding-left: 190px;
  }
  .title{
      box-shadow: 0px 1px 0px 0px #EEEEEE;
      width: 100%;
  }
  /deep/ .el-tabs--top .el-tabs__item.is-top:nth-child(2){
      padding: 0 52px;
  }
  /deep/ .el-tabs--top .el-tabs__item.is-top:last-child{
      padding: 0 52px;
  }
    /deep/ .el-tabs--top  .el-tabs__item.is-active{
        background: #597EF7;
        border-radius: 6px 6px 0px 0px;
        border: 1px solid #DDDDDD;
        color: #fff;
        margin: 0 10px;
        line-height: 38px;
        border: none;
    }
    /deep/ .el-tabs--top  .el-tabs__item{
        background: #FFFFFF;
        border-radius: 6px 6px 0px 0px;
        border: 1px solid #DDDDDD;
        border-bottom: none;
    }
    /deep/ .el-tabs__nav{
        margin: 0 auto;
        float: none;
        text-align: center;
    }
    /deep/ .el-tabs__active-bar{
        display: none;
    }
</style>