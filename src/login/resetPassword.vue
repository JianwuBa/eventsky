<template>
    <div class="container">
        <Head></Head>

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
   
        return {
            
        }
    },
    methods:{
     
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
</style>