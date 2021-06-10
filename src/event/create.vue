<template>
  <div class="container">
    <el-container>
        <Aside :webId="eventRuleForm.eventWebId"></Aside>
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
                                    <el-input v-model="eventRuleForm.name" :value="eventRuleForm.name" placeholder="请输入活动名称"></el-input>
                                </el-form-item>
                                <el-form-item label="活动简介" prop="introduce">
                                    <el-input v-model="eventRuleForm.introduce" :value="eventRuleForm.introduce" placeholder="一句话介绍活动"></el-input>
                                </el-form-item>
                                <el-form-item label="活动类别" prop="eventTypeVal">
                                    <el-select v-model="eventRuleForm.eventTypeVal" placeholder="选择活动类别">
                                        <el-option  v-for="item in eventRuleForm.eventTypeArr"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-row  :gutter="20">
                                    <el-col :span="8">
                                        <el-form-item prop="timeZoneVal" label="时区" required>
                                            <el-select v-model="eventRuleForm.timeZoneVal"  placeholder="请选择时区">
                                                <el-option  v-for="item in eventRuleForm.timeZone"
                                                    :key="item.value"
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
                                            :value="eventRuleForm.date"
                                            type="datetimerange"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            :default-time="['12:00:00']">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            
                                <el-form-item label="活动形式" prop="eventForm">
                                    <el-radio-group v-model="eventRuleForm.eventForm" >
                                        <el-radio :label="1">线上</el-radio>
                                        <el-radio :label="2">线上+线下</el-radio>
                                        <el-radio :label="3">线下</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动地址" prop="adress" placeholder="请输入活动名称" v-if="eventRuleForm.eventForm !== 1">
                                    <el-input v-model="eventRuleForm.adress" :value="eventRuleForm.adress"></el-input>
                                </el-form-item>
                                
                                
                            </div>
                            <el-form-item class="save-event-info">
                                <div class="save-event-btn">
                                    <el-button type="primary" @click="submitForm('eventRuleForm')" v-if="!SaveBtnState">立即创建</el-button>
                                    <el-button type="primary" @click="saveEventInfo('eventRuleForm')" v-if="SaveBtnState">保存</el-button>
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
    import Head from "@/components/event/Head"
    import Aside from "@/components/event/Aside"
    import {getEventInfoShow,postSaveEventInfo,postCreateEventInfo} from "@/api/eventService.js"
    export default {
        data() {
            return {
                SaveBtnState:false,
                startDate:'',
                //请求路径
                requestUrl:'/event-service',
                labelPosition: 'top',  
                
                eventRuleForm: {
                    eventWebId:'',
                    name: '',
                    introduce: '',
                    eventType: '',
                    date: '',
                    eventForm: 2,
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
                    eventTypeVal:"",
                    eventTypeArr:[
                        {
                            value: 1,
                            label: '科技'
                        },
                        {
                            value: 2,
                            label: '教育'
                        },
                        {
                            value: 3,
                            label: '商务及创业'
                        },
                        {
                            value: 4,
                            label: '招聘会'
                        },
                        {
                            value: 5,
                            label: '职业发展'
                        },
                        {
                            value: 6,
                            label: '健康生活'
                        },
                        {
                            value: 7,
                            label: '市场推广'
                        },
                        {
                            value: 8,
                            label: '娱乐'
                        },
                        {
                            value: 9,
                            label: '游戏'
                        },
                         {
                            value: 10,
                            label: '其他'
                        }
                    ]
                },
                createEventRules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    introduce: [
                        { required: true, message: '一句话介绍活动', trigger: 'blur' }
                    ],
                    eventTypeVal: [
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
            //创建活动 信息
            createEventInfo(){
                let obj = {
                    beginDate: this.dateFormat(this.eventRuleForm.date[0]),
                    endDate:this.dateFormat(this.eventRuleForm.date[1]),
                    category:this.eventRuleForm.eventTypeVal,
                    digest:this.eventRuleForm.introduce,
                    locationType:this.eventRuleForm.eventForm,
                    timezone:this.eventRuleForm.timeZoneVal,
                    title:this.eventRuleForm.name,
                    location:this.eventRuleForm.adress
                }
                return obj
            },
            // 创建活动基本信息
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // let start = this.dateFormat(this.eventRuleForm.date[0])
                        // let end = this.dateFormat(this.eventRuleForm.date[1])
                        // this.$http.post(this.requestUrl+"/event_set/basic?beginDate="+start+"&endDate="+end+"&category="+this.eventRuleForm.eventTypeVal+"&digest="+this.eventRuleForm.introduce+"&locationType="+this.eventRuleForm.eventForm+"&timezone="+this.eventRuleForm.timeZoneVal+"&title="+this.eventRuleForm.name+"").then(res => {
                        postCreateEventInfo(this.createEventInfo()).then(res => {
                            console.log(res)
                            if(res.data.rspCode == 1){
                                this.eventRuleForm.eventWebId = res.data.data.webId
                                this.$router.push({path:"event",query:{webId:+this.eventRuleForm.eventWebId}})
                                this.SaveBtnState = true;
                                this.getEventInfo(this.eventRuleForm.eventWebId)
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //活动基本信息回显
            getEventInfo(wenId){
                console.log(wenId)

                // this.$http.get(this.requestUrl+"/event_set/basic/"+wenId+"").then(res => {
                    getEventInfoShow(wenId).then(res => {
                    console.log(res,'回显信息')
                    if(res.data.rspCode == 1){
                        let data = res.data.data
                        console.log(data)
                        this.eventRuleForm.name = data.title
                        this.eventRuleForm.introduce = data.digest
                        this.eventRuleForm.timeZoneVal = data.timezone
                        this.eventRuleForm.eventTypeVal = data.category
                        let beginDate = data.beginDate
                        let endDate = data.endDate
                        this.eventRuleForm.date = [new Date(beginDate),new Date(endDate)]
                        this.eventRuleForm.eventForm = data.locationType
                        this.eventRuleForm.adress = data.location
                    }
                    
                })
            },
            //修改 活动基本信息
            eventInfo(){
                let obj = {
                    beginDate:this.dateFormat(this.eventRuleForm.date[0]),
                    endDate:this.dateFormat(this.eventRuleForm.date[1]),
                    category:this.eventRuleForm.eventTypeVal,
                    digest:this.eventRuleForm.introduce,
                    locationType:this.eventRuleForm.eventForm,
                    timezone:this.eventRuleForm.timeZoneVal,
                    title:this.eventRuleForm.name,
                    webId:this.eventRuleForm.eventWebId,
                    location:this.eventRuleForm.adress
                }
                return obj
            },
            // 保存修改之后的活动基本信息
            saveEventInfo(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // let start = this.dateFormat(this.eventRuleForm.date[0])
                        // let end = this.dateFormat(this.eventRuleForm.date[1])
                        postSaveEventInfo(this.eventInfo()).then(res => {
                        // this.$http.post(this.requestUrl+"/event_set/basic?beginDate="+start+"&endDate="+end+"&category="+this.eventRuleForm.eventTypeVal+"&digest="+this.eventRuleForm.introduce+"&locationType="+this.eventRuleForm.eventForm+"&timezone="+this.eventRuleForm.timeZoneVal+"&title="+this.eventRuleForm.name+"&webId="+this.eventRuleForm.eventWebId+"&location="+this.eventRuleForm.adress+"").then(res => {
                            console.log(res)
                            if(res.data.rspCode == 1){
                               alert("修改成功")
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        created(){
            let webId = this.$route.query.webId
            console.log(webId,'这是web id')
            this.eventRuleForm.eventWebId = webId
            console.log(this.eventRuleForm.eventWebId,'活动ID')
            if(webId){
                this.SaveBtnState = true
            }
            this.getEventInfo(webId)
        }
       
        
    };
</script>
<style lang="less" scoped>
    .el-main{
        padding: 0 0 120px 190px;
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