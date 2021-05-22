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
                    <div class="event-list-content">
                        <h3 class="tit">活动列表</h3>

                        <ul class="event-lists">
                            <li v-for="(item ,index) in curArr" :key="index">
                                <div class="top">
                                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fp2_cri_cn%2F1fae384a6d57edb7835b1143983fbc0f.jpg&refer=http%3A%2F%2Ftc.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624240271&t=0999755d14ab194a9bc7b00ea6be1e4d" alt="">
                                </div>
                                <div class="bottom">
                                    <p class="name">{{item.eventTit}}</p>
                                    <p class="dic">{{item.eventDic}}</p>
                                    <p class="date">{{item.eventDate}}</p>
                                </div>
                            </li>
                        </ul>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page"
                            background
                            :page-sizes="[3, 4, 5]"
                            :page-size="per_page"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total_count"
                            class="pagination">
                        </el-pagination>
                    </div>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>    
</template>

<script>
    import Head from "../components/Head"
    import Aside from "../components/Aside"
    export default {
        data() {
            return{
                curArr:[],//当前也的数据
                page:1,//当前第几页
                per_page:4,//每一页最多显示多少条数据
                total_count:15,//总共多少条数据
                eventArr:[
                    {
                        eventBan:'',
                        eventTit:'2021年春季线上展览会1',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },

                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会2',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会3',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会4',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },{
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会5',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'',
                        eventTit:'2021年春季线上展览会6',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },

                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会7',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会8',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会9',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },{
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会10',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'',
                        eventTit:'2021年春季线上展览会11',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },

                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会12',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会13',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                    {
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会14',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },{
                        eventBan:'@/assets/banner-img.png',
                        eventTit:'2021年春季线上展览会15',
                        eventDic:'周六上午8点到12点之间，新体验新创新！',
                        eventDate:'时间：2021-04-12 8:00-12:00'
                    },
                ]
            }
        },
        components:{
            Head,
            Aside,
        },
        created(){
            this.getList()
        },
        methods:{
            getList(){
                console.log("请求数据")
                this.curArr = this.eventArr.slice((this.page-1)*this.per_page,this.page*this.per_page)
            },
             handleSizeChange(val){
                console.log(val)
                this.per_page = val
                this.getList()
            },
            handleCurrentChange(val){
                this.page = val
                this.getList()
            },
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
.event-list-content{
    width: 100%;
    padding: 30px 0;
    .tit{
        padding: 0 30px;
        font-size: 18px;
        color: #333;
    }
    .event-lists{
        width: 100%;
        padding: 30px 30px 0;
        display: flex;
        flex-wrap:wrap;
        box-sizing: border-box;
        li{
            width: 24%;
            margin-bottom:20px;
            margin-right: 1%;
            border-radius: 10px;
            overflow: hidden;
            &:nth-child(4n+4){
                margin-right: 0;
            }
            height: 236px;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
            cursor: pointer;
            .top{
                width: 100%;
                height: 108px;
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .bottom{
                padding: 6px;
                .tit{
                    font-size: 14px;
                    color: #333;
                    margin-top: 17px;
                    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
                    line-height: 20px;
                }
                .dic{
                    font-size: 12px;
                    color: #999;
                    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
                    margin-top: 19px;
                }
                .date{
                    font-size: 12px;
                    color: #333;
                    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
                    margin-top: 20px;
                }
            }
        }
    }
}
  
    
</style>