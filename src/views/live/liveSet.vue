<template>
    <div class="container">
        <el-container>
            <Aside :webId="eventId"></Aside>
            <el-container class="aside">
                <el-header class="event-create-head">
                    <Head></Head>
                </el-header>
                <el-main>
                    <div class="top-tit">
                        <img src="@/assets/image/register-info.png"  alt="">
                        <span>基本信息</span>
                    </div>
                    <div class="live-content">
                        <el-row :gutter="12">
                            <el-col :span="12">
                                <el-card shadow="always" class="live-card"> 
                                    <div class="top">
                                        <img src="@/assets/image/camera-333.png" alt="">
                                        <p>直播主链接</p>
                                    </div>
                                    <div class="bottom">
                                        <div class="left">
                                            <p class="text"> 给本次活动的主讲嘉宾使用，点击后即可加入开播。</p>
                                            
                                            <p class="link"> <a :href="'/live-host/'+eventId">https://www.eventsky.cn/live/{{eventId}}</a> </p>
                                        </div>
                                        <div class="right">
                                            <img src="@/assets/image/camera.png" alt="">
                                            <p>去直播</p>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card shadow="always" class="watch live-card">
                                    <div class="top">
                                        <img src="@/assets/image/view.png" alt="">
                                        <p>观看链接</p>
                                    </div>
                                    <div class="bottom">
                                        <div class="left">
                                            <p class="text"> 活动参加者报名后，系统会把此参会链接通过邮件、短信、微信，发送给参加者。</p>
                                            <div class="pass">
                                               
                                            </div>
                                            <p class="link"> <a href="">https://www.1212121313eventSky.cn</a> </p>
                                        </div>
                                        <div class="right">
                                            <img src="@/assets/image/play.png" alt="">
                                            <p>去观看</p>
                                        </div>
                                    </div>
                                    <div class="view-num">
                                        观看：{{liveViws}}
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="24">
                                <el-card shadow="never" class="register-card">

                                    <div class="top">
                                        <img src="@/assets/image/tic.png" alt="">
                                        <p>报名链接</p>
                                    </div>
                                    <div class="bottom">
                                        <div class="left">
                                            <p class="text">本次活动报名页面的链接，可把此链接和二维码发送或分享出去。点击即可报名参加此活动。</p>
                                                <el-input placeholder="">
                                                    <template slot="prepend">https://eventsky.cn/</template>
                                                </el-input>
                                        </div>
                                        <div class="right">
                                            <img :src="codeUrl" alt="">
                                        </div>
                                    </div>
                                    <div class="view-num">
                                        观看：{{liveViws}}
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
            </el-container>
        </el-container>
        <div class="save-event-info">
            <div class="save-event-btn">
                <el-button type="primary" >保存</el-button>
            </div>
        </div>
    </div>    
</template>

<script>
import Head from '@/components/event/Head'
import Aside from '@/components/event/Aside'
import {getLiveInfo} from '@/api/liveService.js'
    export default {
        data () {
            return {
                radio: '1',
                eventId:'',
                liveViws:'',
                codeUrl:'',
                banUrl:''
            };
        },
        components:{
            Head,
            Aside
        },
        methods:{
           liveInfo(){
               getLiveInfo(this.eventId).then(res => {
                    console.log(res)
                    if(res.data.rspCode == 1){
                        this.liveViws = res.data.data.eventVO.views
                        this.banUrl = res.data.data.eventVO.bannelUrl
                        this.codeUrl = res.data.data.eventVO.barcodeUrl
                    }
               })
           }
        },
        created(){
            this.eventId = this.$route.params.pathMatch
            this.liveInfo()
        }
    }
</script>

<style lang="less" scoped>
.save-event-info{
        width: 100%;
        border-radius: 3px;
        position: fixed;
        padding-left: 190px;
        left: 0;
        bottom: 50px;
        box-sizing: border-box;
        .save-event-btn{
            width:80%;
            background: #FFFFFF;
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.18);
            border-radius: 3px;
            margin: 0 auto;
            text-align: right;
            /deep/ .el-button{
                background: #F5A623;
                border-radius: 0px 3px 3px 0px;
                line-height: 50px;
                margin: 0;
                padding: 0 70px;
                color: #fff;
                font-size: 16px;
                border: none;
            }
        }
    }
.el-main{
    .top-tit{
        height: 80px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        img{
            height: 44px;
            margin-right: 12px;
        }
        span{
            font-size: 14px;
            color: #666666;
        }
    }
    .live-content{
        .register-card{
            margin-top: 20px;
            position: relative;
             .view-num{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 13px;
                background: #CDE5FF;
                border-radius: 2px;color: #666666;font-size: 14px;
                line-height: 24px;
                padding: 0 10px;
            }
            .top{
                margin-bottom: 0;
            }
            .bottom{
                .right{
                    width: 130px;
                    height: 130px;
                    margin: 0;
                    padding: 2px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            /deep/ .el-input__inner{
                height: 30px;
                line-height: 30px;
            }
        }
        .live-card{
            height: 165px;
            position: relative;
            .view-num{
                position: absolute;
                
                top: 13px;
                right: 20px;
                background: #CDE5FF;
                border-radius: 2px;color: #666666;font-size: 14px;
                line-height: 24px;
                padding: 0 10px;
            }
        }
        .watch{
            .top{
                margin-bottom: 18px;
            }
            .bottom{
                .left{
                    width: 320px;
                    .text{
                        margin-bottom: 10px;
                    }
                    .pass{
                        display: flex;
                        align-items:flex-start;
                        font-size: 12px;
                        color: #666;
                        margin-bottom: 10px;
                        .signin-pass{
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
        width: 900px;
        margin: 0 auto;
        .top{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img{
                width: 20px;
                margin-right: 10px;
            }
            p {
                font-size: 14px;
                color: #333333;

            }
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                font-size: 12px;
                margin-bottom: 25px;
                color:#666
            }
            .pass{
                
                margin-bottom: 23px;
                width: 100%;
                span{
                    font-size: 12px;
                    color: #333;
                    display: inline-block;
                }
                /deep/ .el-input{
                    display: inline-block;
                    width: auto;
                }
                /deep/ .el-input__inner{
                    border: none;
                    border-bottom: 1px solid #333;
                    text-align: center;
                    height: 20px;
                    border-radius: 0;
                    line-height: 20px;
                    width: 100px;
                }
            }
            .link{
                background: #FFFFFF;
                border-radius: 2px;
                border: 1px solid #DDDDDD;
                line-height: 28px;
                padding-left:7px;
                width: 278px;
                a{
                font-size: 12px;
                color: #027AFF;
                text-decoration: none;
                }
            }
            .right{
                width: 64px;
                height: 76px;
                background: #FFFFFF;
                border-radius: 4px;
                border: 1px solid #DDDDDD;
                text-align: center;
                padding-top:6px;
                cursor: pointer;
                img{
                    width: 45px;
                }
                p{
                    color: #333;
                    font-size: 12px;
                }
            }
        }
    }
        padding: 0 0 0 210px;
        height: 100%;
        .container{
            position: relative;
            .event-info{
                margin: 0 auto;
                padding: 20px 50px 70px 40px;
                .form-inner{
                    width: 796px;
                    margin: 0 auto;
                }
            }
            .save-event-info{
                width: 100%;
                border-radius: 3px;
                position: fixed;
                padding-left: 190px;
                left: 0;
                bottom: 50px;
                box-sizing: border-box;
                .save-event-btn{
                    width:80%;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.18);
                    border-radius: 3px;
                    margin: 0 auto;
                    text-align: right;
                    /deep/ .el-button{
                        background: #F5A623;
                        border-radius: 0px 3px 3px 0px;
                        line-height: 50px;
                        margin: 0;
                        padding: 0 70px;
                        color: #fff;
                        font-size: 16px;
                        border: none;
                    }
                }
            }
            /deep/ .el-radio-group{
                width: 100%;
            }
            /deep/ .el-range-editor.el-input__inner{
                width: 100%;
            }
            /deep/ .el-form-item__label{
                color: #323C47;
                font-size: 14px;
                line-height: 30px;
                padding: 0;
                margin: 0;
            }
            /deep/ .el-form-item{
                margin-bottom: 20px;
            }
            /deep/ .el-select{
                width: 100%;
            }

        }
    }
    .title{
        box-shadow: 0px 1px 0px 0px #EEEEEE;
        width: 100%;
    }
</style>