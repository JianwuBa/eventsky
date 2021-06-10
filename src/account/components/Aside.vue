<template>
    <div class="container">
        <el-aside width="190px">
              <!--<el-menu
                router
                :default-active="path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                 <el-menu-item index="/compony">
                  <i class="el-icon-menu"></i>
                  <span slot="title">公司设置</span>
                </el-menu-item>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>账户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/info">注册信息</el-menu-item>
                    <el-menu-item index="/jyjl">交易记录</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
               <el-menu-item index="event-list">
                  <i class="el-icon-menu"></i>
                  <span slot="title">活动列表</span>
                </el-menu-item>
              </el-menu>-->
              
            <el-menu class="el-menu-vertical-demo" :default-active="path" router>
                <NavMenu :menu="navs" ></NavMenu> 
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
import NavMenu from '@/account/components/NavMenu'
//公司设置
const compony = () =>
    import ('@/views/companySetup/index');

const info = () =>
    import ('@/account/info/index');

const eventList = () =>
    import ("@/account/eventList/index");

export default {
    props:['webId'],
    name: "XtAside",
    components:{
      NavMenu
    },
    data(){
        return{
            path:'',
            navs:[
          {
              id: 1,
              path: '/compony',
              comm: compony,
              title: '公司设置',
              icon: 'el-icon-office-building',
          },
          {
              id: 2,
              path: '/account',
              comm: info, // vue 的文件名字
              title: '账户管理',
              icon: 'el-icon-bank-card',
              children: [
                  { id: 11, title: '注册信息', icon: '', path: '/account/info', comm: info },
              ]
          },
          {
              id: 3,
              path: '/event-list',
              comm: eventList,
              title: '活动列表',
              icon: 'el-icon-wind-power',

          }]
        }
    },
    methods:{
      onRouteChanged(){
        this.path  = this.$route.path
      }
    },
     created () {
       this.onRouteChanged()
    },
    watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route': 'onRouteChanged'
        
    }
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
    .navIcon{
        height: 18px;
        margin-right: 5px;
    }
     .xtAside{
        height: 100%;
        .el-menu{
            border: none;
            height: 100%;
            &:not(.el-menu--collapse) { // 这里是解决点击收起展开按钮时的文字卡顿现象
                width: 200px;
            }
        }
    }
</style>