<template>
  <div class="container">
    <el-container>
        <el-header class="account-header">
            <Head></Head>
        </el-header>
        <el-container class="aside">
            <Aside :webId="eventId"></Aside>
        <el-container>
                <el-main>
                    <InfoTit></InfoTit>
                    <div class="title">
                        <el-tabs v-model="activeName" @tab-click="OrderType">
                            <el-tab-pane label="参会者列表" name="participants" :key="'participants'">
                                <ParticipantsList></ParticipantsList>
                            </el-tab-pane>
                            <el-tab-pane label="订单列表" name="order" :key="'order'">
                                <OrderList></OrderList>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>    
</template>

<script>
    import Head from "@/components/event/Head"
    import Aside from "@/components/event/Aside"
    import InfoTit from "@/account/components/InfoTit"
    import OrderList from "@/views/orderList/orderList"
    import ParticipantsList from "@/views/orderList/participants"
   
    export default {
        data() {
            return{
                //默认第一个选项卡
                activeName: "order",
                isParticipants:true,
                isOrder:true,
                eventId:''
            }
        },
        components:{
            Head,
            Aside,
            InfoTit,
            OrderList,
            ParticipantsList
        },
        methods:{
            //参会者和订单列表切换
            OrderType(tab) {
                if(tab.name == "participants") {
                    this.isParticipants = true;
                    this.isOrder = false;
                } else if(tab.name == "order") {
                    this.isParticipants = false;
                    this.isOrder = true;
                }
            },
           
        },
        created(){
            console.log(this.$route.params.pathMatch)
            this.eventId = this.$route.params.pathMatch
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