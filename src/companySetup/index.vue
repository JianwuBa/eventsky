<template>
  <div class="container">
        <el-container>
            <el-header class="account-header">
                <Head></Head>
            </el-header>
            <el-container class="aside">
                <Aside></Aside>
            <el-container>
                <el-main >
                    <div class="main-container">
                        <h1 class="tit">公司信息设置</h1>
                        <div class="compony-setup">
                            <div class="left">
                                <div class="logo">
                                    <i v-if="defaultLogo" class="el-icon-office-building default-logo" ></i>
                                    <img :src="logoUrl" alt="">
                                </div>
                                <p class="name">{{componyForm.componyName}}</p>
                                <el-upload  
                                    name="eskFile"
                                    ref="upload"
                                    :action="upload.url"
                                    :disabled="upload.isUploading"
                                    :on-success="handleFileSuccess"
                                    :on-error="handleFileFail"

                                    :on-change="updateImg"
                                    :on-progress="handleFileUploadProgress"
                                    drag
                                >
                                <p class="name">上传公司 logo</p>
                                </el-upload>
                            </div>
                            <div class="right">
                                <el-form :model="componyForm" :rules="rules" ref="componyForm" :hide-required-asterisk="true">
                                    <el-form-item label="公司名称" prop="componyName">
                                        <el-input v-model="componyForm.componyName" placeholder="请输入公司名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="一句话简要介绍" prop="introduce">
                                        <el-input v-model="componyForm.introduce" placeholder="一句话简要介绍"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司域名" prop="link">
                                        <el-input placeholder="填写公司专属域名（支持数字和英文字母的组合，3到20个字符）"  v-model="componyForm.link">
                                            <template slot="prepend">Http://</template>
                                            <template slot="append">.com</template>
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </div>

                        </div>
                        <div class="compony-code">
                            <p class="tit">公司二维码</p>
                            
                            <img src="" alt="">
                            <el-button type="primary" class="save" @click="submitComponyInfo('componyForm')">确认</el-button>
                        </div>
                    </div>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Head from "@/account/components/Head"
import Aside from "@/account/components/Aside"
export default {
    components:{
        Head,
        Aside
    },
    data() {
      return {
        componyForm:{
            componyName:'',
            introduce:'',
            link:''
        },
        rules:{
            componyName: [
                { required: true, message: '请输入公司名称', trigger: 'blur' },
            ],
            introduce: [
                { required: true, message: '一句话简要介绍', trigger: 'change' }
            ],
            link: [
                { type: 'date', required: true, message: '填写公司专属域名（支持数字和英文字母的组合，3到20个字符）', trigger: 'change' }
            ],
        },
        upload: {
            // 弹出层标题（用户导入）
            title: '',
            // 是否禁用上传
            isUploading: false,
            businessType: 'TDataCatalog',
            // 是否更新已经存在的用户数据
            // updateSupport: 0,
            // 设置上传的请求头部
            
            // 上传的地址
            url:'/upload'
           
        },
        //logo图片显示的url
        logoUrl:'',
        // 默认公司logo
        defaultLogo:true,

      };
    },
    methods: {
        //公司信息提交
        submitComponyInfo(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        //文件上传成功
        handleFileSuccess(response, file, fileList){
            console.log(response)
            console.log(file)
            console.log(fileList)
            this.logoUrl = response.filePath
            this.defaultLogo = false
        },
        // 文件上传失败
        handleFileFail(err, file, fileList){
            console.log(err)
            console.log(file)
            console.log(fileList)
            alert("上传失败")
        },
        //
        handleFileUploadProgress(event, file, fileList){
            console.log(event,file,fileList)
            //this.upload.isUploading = true
        },
        updateImg(file, fileList){
            console.log(file,fileList)
            this.fileList = fileList.slice(-1)
        }

    }
}
</script>

<style lang="less" scoped>
    .el-header {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px rgba(180, 180, 180, 0.26);
        height: 60px;
    }
    .aside{
        margin-top: 1px;
    }
    .el-aside {
        color: #333;
    }
    .el-main{
        padding: 0;
        padding-left: 190px;
    }
    .main-container{
        padding: 30px;
        .tit{
            font-size: 20px;
            color: #333;
        }
        .compony-setup{
            display: flex;
            padding-top: 50px;
            .left{
                width: 45%;
                text-align: center;
                .logo{
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    border: 1px solid #C9C9C9;
                    margin: 0 auto;
                    text-align: center;
                    line-height: 140px;
                    position: relative;
                    overflow: hidden;
                    img{
                        margin: auto;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .default-logo{
                        font-size: 88px;
                        margin-top: 26px;
                        color: #C9C9C9;
                    }
                }
                .name{
                    font-size: 18px;
                    color: #000;
                    margin-top: 10px;
                }
                /deep/ .el-upload-dragger{
                    width: 100%;
                    height: auto;
                    border: none;
                    
                    p{
                        font-size: 14px;
                        color: #027AFF;
                        cursor: pointer;    
                    }
                }
            }
            .right{
                width: 55%;
                /deep/ .el-form-item{
                    margin-bottom: 10px;
                }
            }
        }
        .compony-code{
            text-align: center;
            .tit{
                font-size: 12px;
                color: #4A4A4A;
                margin-top: 30px;
            }
            img{
                width: 140px;
                height: 140px;
                margin: 10px auto 50px;
                display: block;
            }
            /deep/ .el-button{
                background: #F5A623;
                border-radius: 4px;
                border: 1px solid #F5A623;
                line-height: 30px;
                padding: 0 46px;
            }
        }
    }
</style>