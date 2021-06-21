<template>
    <div>
        <div class="container">
            <div class="event-info">
                <div class="post">
                    <img src="@/assets/section2-img.png" alt="">
                </div>
                <div class="info">
                    <p>2021年春季线上展览会</p>
                    <p class="date">时间：2021-04-12 8:00-12:00</p>
                </div>
            </div>
            <div class="view">
                预览
            </div>
        </div>
        <Aside :webId="eventId"></Aside>
    </div>
</template>

<script>
    import Aside from "@/components/event/Aside"
    export default {
        data(){
            return{
                eventId:''
            }
        },
        components:{
            Aside
        },
        created(){
            this.eventId = this.$route.params.pathMatch
        }
    }
</script>

<style lang="less" scoped>
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