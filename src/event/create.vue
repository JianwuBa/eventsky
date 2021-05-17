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
                                        <el-option label="科技" value="1"></el-option>
                                        <el-option label="教育" value="2"></el-option>
                                        <el-option label="商务及创业" value="3"></el-option>
                                        <el-option label="招聘会" value="4"></el-option>
                                        <el-option label="职业发展" value="5"></el-option>
                                        <el-option label="健康生活 " value="6"></el-option>
                                        <el-option label="市场推广" value="7"></el-option>
                                        <el-option label="娱乐" value="8"></el-option>
                                        <el-option label="旅游" value="9"></el-option>
                                        <el-option label="其他" value="10"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-row  :gutter="20">
                                    <el-col :span="8">
                                        <el-form-item prop="timeZoneVal" label="时区" required>
                                            <el-select v-model="eventRuleForm.timeZoneVal" placeholder="请选择时区">
                                                <el-option  v-for="(item , index) in eventRuleForm.timeZone"
                                                    :key="index"
                                                    :label="item.label"
                                                    :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-form-item prop="date" label="活动时间" required>
                                            <el-date-picker
                                            v-model="eventRuleForm.date"
                                            type="datetimerange"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            :default-time="['12:00:00']">
                                            </el-date-picker>
                                            {{eventRuleForm.date}}
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            
                                <el-form-item label="活动形式" prop="eventForm">
                                    <el-radio-group v-model="eventRuleForm.eventForm">
                                        <el-radio label="1">线上</el-radio>
                                        <el-radio label="2">线上+线下</el-radio>
                                        <el-radio label="3">线下</el-radio>
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
                //时区
                
                startDate:'',
                //请求路径
                requestUrl:'',
                labelPosition: 'top',  
                eventRuleForm: {
                    name: '',
                    introduce: '',
                    eventType: '',
                    date: '',
                    eventForm: '',
                    adress: '',
                    timeZoneVal:'',
                    timeZone:[
                        {
                            value: '东八区',
                            label: '东八区'
                        },
                        {
                            value: '东九区',
                            label: '东九区'
                        },
                        {
                            value: '东十区',
                            label: '东十区'
                        },
                        {
                            value: '东七区',
                            label: '东七区'
                        },
                    ],

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
                    ],
                    timeZoneVal: [
                        { required: false, message: '请选择时区', trigger: 'change' },
                    ],
                    eventForm: [
                        { required: true, message: '请选择活动形式', trigger: 'change' },
                    ],
                }
            };
        },
        components:{
            Head,
            Aside,
        },
            
        methods: {
            dateFormat(data){
                console.log(data) 
                let dt = new Date(data)
                let yyyy = dt.getFullYear()
                let MM = (dt.getMonth() + 1).toString().padStart(2, '0')
                let dd = dt.getDate().toString().padStart(2, '0')
                let h = dt.getHours().toString().padStart(2, '0')
                let m = dt.getMinutes().toString().padStart(2, '0')
                let s = dt.getSeconds().toString().padStart(2, '0')
                return yyyy + '-' + MM + '-' + dd + ' ' + h + ':' + m + ':' + s
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    let start = this.dateFormat(this.eventRuleForm.date[0])
                    let end = this.dateFormat(this.eventRuleForm.date[1])
                    this.$http.post(this.requestUrl+"/event_set/basic?beginDate="+start+"&endDate="+end+"&category="+this.eventRuleForm.eventType+"&digest="+this.eventRuleForm.introduce+"&locationType="+this.eventRuleForm.eventForm+"&timezone="+this.eventRuleForm.timeZoneVal+"&title="+this.eventRuleForm.name+"").then(res => {
                        console.log(res)
                        if(res.data.rspCode == 1){
                            alert(11)
                        }
                    })
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