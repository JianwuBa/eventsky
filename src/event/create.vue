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
                        <span>基本信息</span>
                    </div>
                    <div class="event-info">
                        <el-form :model="eventRuleForm" :rules="createEventRules" ref="eventRuleForm">
                            <div class="form-inner">
                                <el-form-item label="活动名称" prop="name" >
                                    <el-input v-model="eventRuleForm.name" placeholder="请输入活动名称"></el-input>
                                </el-form-item>
                                <el-form-item label="活动简介" prop="introduce">
                                    <el-input v-model="eventRuleForm.introduce" placeholder="一句话介绍活动"></el-input>
                                </el-form-item>
                                <el-form-item label="活动类别" prop="eventType">
                                    <el-select v-model="eventRuleForm.eventType" placeholder="选择活动类别">
                                        <el-option label="科技" value="keji"></el-option>
                                        <el-option label="教育" value="jiaoyu"></el-option>
                                        <el-option label="商务及创业" value="shangwu"></el-option>
                                        <el-option label="招聘会" value="zhaopin"></el-option>
                                        <el-option label="职业发展" value="zhiye"></el-option>
                                        <el-option label="健康生活 " value="jiankang"></el-option>
                                        <el-option label="市场推广" value="shichangtuig"></el-option>
                                        <el-option label="娱乐" value="yule"></el-option>
                                        <el-option label="旅游" value="lvyou"></el-option>
                                        <el-option label="其他" value="qita"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item prop="date" label="活动时间" required>
                                    <el-date-picker
                                    v-model="eventRuleForm.date"
                                    type="datetimerange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :default-time="['12:00:00']">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="活动形式" prop="eventForm">
                                    <el-radio-group v-model="eventRuleForm.eventForm">
                                        <el-radio label="线上"></el-radio>
                                        <el-radio label="线上+线下"></el-radio>
                                        <el-radio label="线下"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动地址" prop="adress" placeholder="请输入活动名称">
                                    <el-input v-model="eventRuleForm.adress"></el-input>
                                </el-form-item>
                                
                                
                            </div>
                            <el-form-item class="save-event-info">
                                <div class="save-event-btn">
                                <el-button type="primary" @click="submitForm('eventRuleForm')">立即创建</el-button>
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
  </div>    
</template>

<script>
    import Head from "./components/Head"
    import Aside from "./components/Aside"
    export default {
        data() {
            return {
                labelPosition: 'top',  
                eventRuleForm: {
                    name: '',
                    introduce: '',
                    eventType: '',
                    date: '',
                    eventForm: '',
                    adress: ''
                },
                createEventRules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    introduce: [
                        { required: true, message: '一句话介绍活动', trigger: 'blur' }
                    ],
                    eventType: [
                        { required: true, message: '选择活动类别', trigger: 'change' }
                    ],
                    date: [
                        { required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    adress: [
                        { required: true, message: '填写活动地址', trigger: 'blur' },
                    ]
                }
            };
        },
        components:{
            Head,
            Aside,
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            }
        }
    };
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
    .aside{
        margin-top: -1px;
    }
    .el-aside {
        color: #333;
    }
    .el-main{
        padding: 60px 0 0 190px;
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