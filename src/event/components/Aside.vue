<template>
    <div class="container">
        <el-aside width="190px">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <p class="aside-tit">活动设置</p>
            <el-menu  default-active="1">
                
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">公司设置</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                
               <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">活动列表</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">宣传页面</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    
    /deep/ .el-aside{
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        border-right: solid 1px #e6e6e6;
        background: #597EF7;
        overflow: inherit;
    }
    /deep/ .el-menu{
        border-right: none;
        background:#597EF7 ;
    }
    /deep/ .el-menu-item{
        color: #fff;
        line-height: 42px;
        height: 42px;
    }
    /deep/ .el-menu-item.is-active{
        background: #3E62D8;
        .active-arrow{
            display: block;
        }
    }
    /deep/ .el-menu-item:focus, .el-menu-item:hover{
        background: #3E62D8;
    }
    /deep/ .el-menu-item i{
        color: #fff;
    }
    .logo{
        width: 190px;
        height: 60px;
        background: #597EF7;
        text-align: center;
        box-shadow: 0px 2px 4px 0px rgba(69, 69, 69, 0.26);
        margin-bottom: 1px;
        img{
            height: 28px;
            margin-top: 17px;
        }
    }
    /deep/ .el-menu-item .active-arrow{
        position: absolute;
        right: -19px;
        color: #3E62D8;
        line-height: 42px;
        display: none;
        top: 0;
    }
    .aside-tit{
        color:#fff;
        font-size: 14px;
        line-height: 50px;
        padding-left:22px ;
    }
</style>