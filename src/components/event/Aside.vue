<template>
    <div class="container">
        <el-aside width="190px">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <p class="aside-tit">活动设置</p>
            <el-menu  :default-active="path" router>
                <template v-for="(item,index) in navList" >
                    <el-menu-item :index="item.path" :key="index">
                        <img :src="item.imgIcon" class="navIcon" alt="">
                        <span >{{item.title}}</span>
                        <i class="el-icon-caret-right active-arrow"></i>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    props:['webId'],
    data(){
        return{
            path:'',
            navList:[
                {
                    "title":'数据分析',
                    "path":"/overview/"+this.webId,
                    "imgIcon":require("@/assets/image/sjfx.png")
                },
                {

                    "title":'直播设置',
                    "path":"/set-live/"+this.webId,
                    "imgIcon":require("@/assets/image/zbsz.png")
                },
                {

                    "title":'基本信息',
                    "path":"/event/detail/"+this.webId,
                    "imgIcon":require("@/assets/image/jbxx.png")
                },
                {

                    "title":'报名及票务',
                    "path":"/stepevent/price/"+this.webId,
                    "imgIcon":require("@/assets/image/bmpw.png")
                },
                {

                    "title":'参会者',
                    "path":"/order-list/"+this.webId,
                    "imgIcon":require("@/assets/image/chz.png")
                }
            ]
        }
    },
    methods:{
        onRouteChanged(){
            let that = this
            that.path  = that.$route.path
        }
    },
    created () {
       // console.log(this.webId)
        this.onRouteChanged()
       // console.log(this.webId,"aside")
    },
    watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route': 'onRouteChanged'
    }
}
</script>

<style lang="less" scoped>
    .navIcon{
        height: 18px;
        margin-right: 16px;
        width: 18px;
    }
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
        margin-bottom: 10px;
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