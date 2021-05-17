<template>
    <div class="container">
        <el-container>
            <Aside></Aside>
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
                                <el-card shadow="always">
                                直播主链接
                                </el-card>
                            </el-col>
                            <el-col :span="12">
                                <el-card shadow="hover">
                                观看链接
                                </el-card>
                            </el-col>
                            <el-col :span="24">
                                <el-card shadow="never">
                                报名链接
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>    
</template>

<script>
import Head from '@/event/components/Head'
import Aside from '@/event/components/Aside'
    export default {
        components:{
            Head,
            Aside
        }
    }
</script>

<style lang="less" scoped>
.el-main{
    .live-content{
        width: 888px;
        margin: 0 auto;
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
        }
    }
    .title{
        box-shadow: 0px 1px 0px 0px #EEEEEE;
        width: 100%;
    }
</style>