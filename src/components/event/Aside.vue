<template>
    <div class="container">
        <el-aside width="190px">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <p class="aside-tit">活动设置</p>
            <el-menu  :default-active="activeIndex" >
                <el-menu-item index="1" @click="chanteRouter('/overview','1')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据分析</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                <el-menu-item index="2"  @click="chanteRouter('/live','2')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">直播设置</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                <el-menu-item index="3" @click="chanteRouter('/event','3')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">基本信息</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                <el-menu-item index="4" @click="chanteRouter('/event/detail/'+webId,'4')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">宣传页面</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
                 <el-menu-item index="5"  @click="chanteRouter('/stepevent/price/'+webId,'5')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">报名及票务</span>
                    <i class="el-icon-caret-right active-arrow"></i>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    props:['webId'],
    data(){
        return{
            activeIndex:'1'
        }
    },
    methods:{
        chanteRouter(path,index){
            console.log(index)
            this.activeIndex=index
            this.$router.push(path)
        }
    }
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