<template>
  <div class="container">
        <el-form>
            <el-form-item label="邮箱地址" >
                <el-input :disabled="edit" :value="accountInfo.email"></el-input>
                <p class="change">去修改</p>
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
  </div>
</template>

<script>
export default {
    data() {
        return {
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
      };
    },
    created(){
        this.getInfo()
    },
    methods: {
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
</style>