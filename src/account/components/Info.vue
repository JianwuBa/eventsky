<template>
  <div class="container">
        <el-form>
            <el-form-item label="邮箱地址" >
                <el-input :disabled="edit" :value="accountInfo.email"></el-input>
                <p class="change" @click="dialogFormVisible = true">去修改</p>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input :disabled="edit" :value="accountInfo.phone"></el-input>
                 <p class="change">去修改</p>
            </el-form-item>
        </el-form>
            <p class="line"></p>
            <p class="tit">基本信息</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="姓名" prop="fullName">
                <el-input v-model="ruleForm.fullName" :value="accountInfo.fullName"></el-input>
            </el-form-item>
            <el-form-item label="职位" prop="position">
                <el-input v-model="ruleForm.position" :value="accountInfo.position"></el-input>
            </el-form-item>
            <el-form-item label="公司" prop="company">
                <el-input v-model="ruleForm.company " :value="accountInfo.company"></el-input>
            </el-form-item>
            <el-button type="success" @click="saveInfo('ruleForm')" class="saveInfo">保存</el-button>
        </el-form>


        <el-dialog title="修改邮箱" :visible.sync="dialogFormVisible">
            <div class="form-container">
              <el-form :model="form">
                <el-form-item label="" :label-width="formLabelWidth">
                  <el-input v-model="form.email" autocomplete="off" placeholder="请输入邮箱号"></el-input>
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth" class="email-code">
                  <el-input v-model="form.code" autocomplete="off" placeholder="请输入6位验证码"></el-input>
                  <el-button plain class="send-code" @click="getEmailCode">发送验证码</el-button>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                  <el-alert :title="errorMessageText" v-if="errorMessage" type="error"  center :closable="false"  show-icon>
                  </el-alert>
                <el-button class="test-code" @click="testNewEmail">验证</el-button>
              </div>
            </div>
        </el-dialog>
  </div>
</template>


<script>
export default {
    data() {
        return {
          form: {
            email: '',
            code: ''
          },
          formLabelWidth: 'auto',
          dialogFormVisible: false,
            edit: true,
            ruleForm: {
                fullName: '',
                position: '',
                company: '',
            },
            accountInfo:{},
        rules: {
          fullName: [
            {  required:true,message: '请输入活动名称', trigger: 'blur' },
          ],
          position: [
            {  required:true,message: '请输入活动名称', trigger: 'blur' },
          ],
          company: [
            {  required:true,message: '请输入活动名称', trigger: 'blur' },
          ],
        },
        labelPosition: 'top',  
        errorMessage:false,
        errorMessageText:''
      };
    },
    created(){
        this.getInfo()
    },
    methods: {
      //保存修改后的基本信息
      saveInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$http.post("/account/update_info?company="+this.ruleForm.company+"&fullName="+this.ruleForm.fullName+"&position="+this.ruleForm.position+"").then(res => {
                console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 获取当前账号基恩信息
      getInfo(){
          this.$http.get("/account/info").then(res => {
              console.log(res)
              if(res.data.rspCode == 1){
                  this.accountInfo = res.data.data
                  this.ruleForm.fullName = res.data.data.fullName
                  this.ruleForm.position = res.data.data.position
                  this.ruleForm.company = res.data.data.company
              }
          })
      },
       //修改邮箱  获取验证码
      getEmailCode(){
        this.$http.post("/auth/send?target="+this.form.email+"&type=EMAIL_VALID").then( res => {
          console.log(res)
        })
      },
      //验证新邮箱
      testNewEmail(){
        this.$http.post("/account/update_email?authCode="+this.form.code+"&email="+this.form.email+"").then( res => {
          console.log(res)
          if(res.data.rspCode == 1){
            this.errorMessage = false;
            this.dialogFormVisible = false;
            this.accountInfo.email = this.form.email
          }
          else if(res.data.rspCode == 400006){
            this.errorMessage = true
            this.errorMessageText = "验证码错误"
          }else if(res.data.rspCode == 0){
            this.errorMessage = true
            this.errorMessageText = "请求失败"
          }
        })
      }
    },
   
  }
</script>

<style  lang="less" scoped>
    .container{
        width: 600px;
        margin: 0 auto;
        padding-top: 20px;
    }
    .line{
        height: 1px;
        background: #DDDDDD;
        width: 100%;
        margin-top:44px ;
        margin-bottom: 20px;
    }
    /deep/ .el-form-item__label{
        line-height: 30px;
    }
    /deep/ .el-form-item{
        margin-bottom:15px;
    }
    .tit{
        font-size: 14px;
        color: #323C47;
        margin-bottom: 10px;
    }
    .saveInfo{
        background: #F5A623;
        border-radius: 4px;
        border: 1px solid #F5A623;width: 120px;
        text-align: center;
        margin:33px auto 0;
        display: block;
        padding: 0;
        line-height: 30px;
    }
    .change{
        position: absolute;
        right: -55px;
        bottom: 0;
        font-size: 14px;
        color: #597EF7;
        line-height: 44px;
        cursor: pointer;
    }
    /deep/ .el-dialog__header{
          padding: 0;
          background: #F3F5F7;
          border-radius: 3px 3px 0px 0px;
          text-align: center;
          line-height: 50px;
          font-size: 14px;
          color: #333;
    }
    .form-container{
      width: 308px;
      margin: 0 auto;
      /deep/ .el-input__inner{
        background: #FFFFFF;
        border-radius: 3px;
        border: 1px solid #979797;
        text-align: center;
        line-height: 48px;
        height: 48px;
      }
      /deep/ .el-form-item__content{
        display: flex;
      }
      .send-code{
        border-radius: 3px;
        border: 1px solid #597EF7;    
        font-size: 14px;
        color: #597EF7;
        margin-left:20px;
      }
    }
    .dialog-footer{
      text-align: center;
      /deep/ .el-alert--error.is-light{
        background: #fff;
      }
       .test-code{
         background: #F5A623;
        border-radius: 3px;
        border: 1px solid #F5A623;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        padding: 0 50px;
      }
    }
   
</style>