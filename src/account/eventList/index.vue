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
                        <div class="event-lists-null" v-if="total_count <= 0">
                            <img src="@/assets/image/empty.png" class="logo" alt="">
                            <p class="text">当前没有活动，请去创建新活动</p>
                            <el-button type="success" class="create-event" @click="createEvent">创建新活动</el-button>
                        </div>
                        <ul class="event-lists" v-if="total_count > 0">
                            <li v-for="item  in curArr" :key="item.webId" @click="eventDetail(item.webId)">
                                <div class="top">
                                    <img :src="item.bannelUrl" alt="">
                                </div>
                                <div class="bottom">
                                    <p class="name">{{item.title}}</p> 
                                    <p class="dic">{{item.digest}}</p>
                                    <p class="date">{{item.beginDate}}</p>
                                </div>
                            </li>
                        </ul>
                        <el-pagination
                        v-if="total_count > 0"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page"
                            background
                            :page-size="per_page"
                            layout="total, prev, pager, next, jumper"
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
    import api from '@/api/api'


 

    export default {
        data() {
            return{
                bannelUrl:'',
                curArr:[],//当前也的数据
                page:null,//当前第几页
                per_page:8,//每一页最多显示多少条数据
                total_count:null,//总共多少条数据
                eventArr:[]
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
            
             handleSizeChange(val){
                this.per_page = val
                this.getList()
            },
            handleCurrentChange(val){
                this.page = val
                this.getList()
            },
            getList() {
                console.log(this.page)
                api.getListAPI({'pageSize':this.per_page,'pageNo':this.page}).then(res => {
                    //数据处理
                    console.log(res)
                    this.curArr = res.data.data.results
                    this.total_count = res.data.data.totalRows
                }).catch(err => console.log(err))
            },
            createEvent(){
                this.$router.push('/login')
            },
            eventDetail(val){
                window.location.href = "http://192.168.1.216:8080/#/event/" + val
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
    .pagination{
        text-align: center;
    }
    
    
}
.event-lists-null{
    padding: 65px;
    text-align: center;
    .logo{
        width: 137px;
    }
    .text{
        font-size: 14px;
        color: #666;
        margin: 30px 0;
    }
    .create-event{
        background: #F5A623;
        border-radius: 4px;
        padding: 0 25px;
        line-height: 30px;
        border: none;
        height: 30px;
    }
}
    
</style>