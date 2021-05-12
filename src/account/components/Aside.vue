<template>
    <div class="container">
        <el-aside width="190px">
            <el-menu :default-openeds="['2']" default-active="2">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">公司设置</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>账户管理</template>
                    <el-menu-item index="2-1">注册信息</el-menu-item>
                    <el-menu-item index="2-2">交易记录</el-menu-item>
                    <el-menu-item index="2-3">提款到银行账户</el-menu-item>
                    <el-menu-item index="2-4">购买</el-menu-item>
                </el-submenu>
               <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">活动列表</span>
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
        overflow: hidden;
        height: 100%;
        position: fixed;
        left: 0;
        top: 61px;
        border-right: solid 1px #e6e6e6;
    }
    /deep/ .el-menu{
        border-right: none;
    }
</style>