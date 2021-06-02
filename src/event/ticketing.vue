<template>
    <div class="container">
        <el-container>
            <Aside></Aside>
            <el-container class="aside">
                
                <el-header class="event-create-head">
                    <Head></Head>
                </el-header>
                <el-main>
                    <div class="container">
                        <div class="top-tit">
                            <img src="@/assets/image/register-info.png"  alt="">
                            <span>报名及票务</span>
                        </div>
                        <div class="nav">
                            <el-tabs v-model="activeName" type="card" @tab-click="ticketType">
                                <el-tab-pane label="票务" name="ticket">
                                    <Ticket v-if="isTicket"></Ticket>
                                </el-tab-pane>
                                <el-tab-pane label="报名" name="register">
                                    <Register v-if="isRegister"></Register>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>    
</template>

<script>
    import Head from "@/components/event/Head"
    import Aside from "@/components/event/Aside"
    import Ticket from "./components/Ticket"
    import Register from "./components/Register"
    export default {
        data() {
            return {
                labelPosition: 'top', 
                activeName: 'ticket', 
                isTicket:true,
                isRegister:true,
            };
        },
        components:{
            Head,
            Aside,
            Ticket,
            Register
        },
        methods: {
            ticketType(tab) {
                if(tab.name == 'ticket'){
                    this.isTicket = true
                    this.isRegister = false
                }else if(tab.name == 'register'){
                    this.isTicket = false
                    this.isRegister = true
                }
            }
        }
    };
</script>
<style lang="less" scoped>
    .nav{
        /deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav{
            border: none;
        }
        /deep/ .el-tabs__item{
            width: 160px;
        }
    }
    .el-main{
        padding: 0 0 0 190px;
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