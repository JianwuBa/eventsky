<template>
  <div class="container">
      <div class="event-info">
          <div class="post">
              <img :src="banUrl" alt="">
          </div>
          <div class="info">
              <p>{{eventName}}</p>
              <p class="date">时间：{{eventDate}}</p>
          </div>
      </div>
      
  </div>
</template>
<script>
import {getHeadInfo} from '@/api/eventService.js'
export default {
    data() {
        return {
            eventId:'',
            eventName:'',
            eventDate:'',
            banUrl:''
        }
    },
    methods:{
         getInfo(){
            getHeadInfo(this.eventId).then(res => {
                // console.log(res)
                if(res.data.rspCode == 1){
                    let data = res.data.data
                    this.eventId = data.webId
                    this.eventName = data.title
                    this.eventDate = data.beginDate
                    this.banUrl = data.bannelUrl
                }
            })
        }
    },
    created(){
        this.eventId = this.$route.params.pathMatch
        this.getInfo()
    }
}
</script>

<style  lang="less" scoped>
    .el-header {
        box-shadow: 0px 2px 4px 0px rgba(180, 180, 180, 0.26);
        height: 60px;
        position: fixed;
        left: 0;
        top: 0;
        padding: 0;
        width: 100%;
    }
    .container{
        width: 100%;
        padding: 0 133px 0 210px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .event-info{
            display: flex;
            align-items: center;
            .post{
                height: 44px;
                margin-right: 14px;
                img{
                    height: 100%;
                }
            }
            .info{
                font-size: 12px;
                color: #333;
                line-height: 18px;
                .date{
                    color: #666666;
                }
            }
        }
        .view{
            display: inline-block;
            background: #F5A623;
            padding: 0 7px;
            color: #fff;
            border-radius: 2px;
            line-height: 24px;
            font-size: 12px;
            cursor: pointer;
        }
    }
</style>