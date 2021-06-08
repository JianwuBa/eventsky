<template>
  <div class="container">
      <div class="left">
            <el-upload
                class="upload-logo"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture">
            <el-button size="small" type="primary">上传logo</el-button>
            </el-upload>
      </div>
      <div class="center">
        <el-button type="success" class="create-event" @click="createEvent">创建新活动</el-button>
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="right">
          <div class="sign-out">
                <img src="@/assets/image/signout.png" style="width:20px;" alt="">
                <span @click="loginOut">退出</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           
            input3: '',
        }
    },
    methods: {
        createEvent(){
            this.$router.push('/event')
        },
        loginOut(){
             this.$router.push('/')
        }
    }
}
</script>

<style  lang="less" scoped>
    .container{
        width: 100%;
        padding: 0 30px 0 52px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        top: 0;
        .left{
            .upload-logo{
                border-radius: 4px;
                border: 1px solid #027AFF;
                line-height: 30px;
                font-size: 14px;
                
                padding: 0 20px;
            }
            /deep/ .el-button--small{
                padding: 0;
                background: none;color: #027AFF;
                border: 0;
                padding: 0;
            }
        }
        .center{
            display: flex;
            width: 100%;
            justify-content: center;
            .el-select .el-input {
                width: 130px;
            }
            .input-with-select .el-input-group__prepend {
                background-color: #fff;
            }
            .create-event{
                background: #F5A623;
                border-radius: 4px;
                padding: 0 25px;
                line-height: 30px;
                border: none;
                height: 30px;
                margin-right: 40px;
            }
            /deep/ .el-input-group{
                width: 217px;
                /deep/ .el-button{
                    padding: 0;
                }
            }
            /deep/ .el-input__inner{
                 line-height: 30px;
                 height: 30px;
            }
            /deep/ .el-input-group__append{
                background-color: #fff;
                border-left: none;
                padding: 0 8px;
            }
        }
        .sign-out{
            cursor: pointer;
            img{
                vertical-align: middle;
                margin-right: 10px;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
            width: 150px;
            text-align: right;
        }
    }
</style>