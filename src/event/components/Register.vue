<template>
    <div class="container">
        
            <el-form :model="registerForm" :rules="registerRules" ref="registerForm">
                <h4 class="tit">默认报名信息收集*</h4>
                <div class="register-info">
                    <div class="info">
                        <el-form-item label="" prop="registerRame">
                            <el-input  placeholder="姓名" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="tel">
                            <el-input placeholder="手机号" disabled>  </el-input>
                        </el-form-item>
                        <el-form-item label="" prop="email">
                            <el-input  placeholder="邮箱" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="compony">
                            <el-input placeholder="公司" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="position">
                            <el-input  placeholder="职位" disabled></el-input>
                        </el-form-item>
                    </div>
                    <div class="messages">
                        <el-form-item label="" prop="liveMessage">
                            <el-input  type="textarea" placeholder="留言" disabled> </el-input>
                        </el-form-item>
                    </div>
                </div>
                <h4 class="tit">报名者需填写社交账号*</h4>
                <el-form-item label="" class="accounts-type">

                 
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedQuestion" @change="handleCheckedQuestionChange">
                    <el-checkbox v-for="item in registerForm.accounts" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                </el-checkbox-group>


                </el-form-item>
                <el-form-item class="registers">
                    <div class="save-event-btn">
                    <el-button type="primary" @click="registerFormInfo()">保存</el-button>
                    </div>
                </el-form-item>
            </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                checkedQuestion: [],
                isIndeterminate: true,    
                eventId:'',
                requestUrl:'/event-service',
                registerFormVal:'',
                registerForm:{
                    accounts:[
                        {
                            value:7,
                            label:"微信"
                        },
                        {
                            value:8,
                            label:"领英"
                        },
                        {
                            value:9,
                            label:"丁丁"
                        },
                        {
                            value:10,
                            label:"知乎"
                        },
                    ]
                },
                registerRules:{
                    
                }
            }
        },
        methods:{
            handleCheckedQuestionChange(value) {
                console.log(value)
                let checkedCount = value.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.registerForm.accounts.length;
            },
            //门票问题form数据
            questionData(){
                let obj = {
                    webId:this.eventId,
                    socialType:this.checkedQuestion,
                }
                return obj
            },
            registerFormInfo() {
                const formData = new FormData();
                Object.keys(this.questionData()).forEach((key) => {
                    formData.append(key, this.questionData()[key]);
                });
                this.$http.post(this.requestUrl+"/question/social/"+this.eventId,formData).then(res =>{
                    if(res.data.rspCode == 1){
                        alert("保存成功")
                    }
                })
            },
            getRegisterFormInfo(){
                this.$http.get(this.requestUrl+"/question/list/"+this.eventId,{params:{webId:this.eventId}}).then(res =>{
                    res.data.data.filter(item => {
                        if(item.type == 'SOCIAL_WECHAT'){
                            this.checkedQuestion.push(7)
                        }
                        if(item.type == 'SOCIAL_LINKEDIN'){
                            this.checkedQuestion.push(8)
                        }
                        if(item.type == 'SOCIAL_DINGDING'){
                            this.checkedQuestion.push(9)
                        }
                        if(item.type == 'SOCIAL_ZHIHU'){
                            this.checkedQuestion.push(10)
                        }
                    })
                    //console.log(this.checkedQuestion)
                })
                
            },
        },
        created() {
            let webId = this.$route.params.pathMatch
            this.eventId = webId
            this.getRegisterFormInfo()
        },
    }
</script>

<style lang="less" scoped>
    .container{
        width: 940px;
        margin: 0 auto;
        .registers{
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
        .tit{
            font-size: 14px;
            color: #323C47;
            margin-bottom: 8px;
        }
        .register-info{
            display: flex;
            border-bottom: 1px solid  #DDDDDD;
            margin-bottom: 15px;
            .info{
                flex: 1;
                margin-right: 18px;
                /deep/ .el-form-item{
                    margin-bottom: 15px;
                }
                /deep/ .el-form-item__error{
                    padding: 0;
                }
            }
            .messages{
                flex: 1;
                /deep/ .el-textarea__inner{
                    height: 260px;
                    resize: none;
                }
            }
            
        }
        .accounts-type{
            border-bottom: 1px solid  #DDDDDD;
            margin-bottom: 15px;
        }
    }
</style>