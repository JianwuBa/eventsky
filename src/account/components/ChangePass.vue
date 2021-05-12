<template>
  <div class="container">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
             <el-form-item label="原密码" prop="oldPass">
                <el-input type="password" v-model="ruleForm.oldPass" ></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" ></el-input>
            </el-form-item>
            <el-form-item label="重复新密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="savePassword('ruleForm')" class="saveInfo">保存</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            oldPass:'',
            pass: '',
            checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      savePassword(formName) {
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