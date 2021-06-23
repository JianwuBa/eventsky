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
                                    <img :src="componyForm.logoUrl" alt="">
                                </div>
                                <p class="name">{{componyForm.componyName}}</p>
                                <el-upload  
                                    name="eskFile"
                                    ref="upload"
                                    :action="upload.url"
                                    :on-success="handleFileSuccess"
                                    :on-error="handleFileFail"
                                    :file-list="filePostList"
                                    :on-change="updateImg"
                                    drag
                                >
                                <p class="name">上传公司 logo</p>
                                </el-upload>
                            </div>
                            <div class="right">
                                <el-form :model="componyForm" :rules="rules" ref="componyForm" :hide-required-asterisk="true">
                                    <el-form-item label="公司名称" prop="componyName">
                                        <el-input v-model.lazy="componyForm.componyName" placeholder="请输入公司名称" :value="componyForm.componyName" ></el-input>
                                    </el-form-item>
                                    <el-form-item label="一句话简要介绍" prop="introduce">
                                        <el-input v-model="componyForm.introduce" placeholder="一句话简要介绍" :value="componyForm.introduce"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司域名" prop="link">
                                    <span style="font-size:12px;color:#999;">填写公司专属域名（支持数字和英文字母的组合，3到20个字符）</span>
                                        <el-input placeholder="" :value="componyForm.link" v-model="componyForm.link">
                                            <template slot="prepend">https://</template>
                                            <template slot="append">.eventsky.cn</template>
                                        </el-input>
                                    </el-form-item>
                                     <div class="compony-code">
                                        <p class="tit">公司二维码</p>
                                        
                                        <img :src="componyForm.codeUrl" alt="">
                                        <el-button type="primary" class="save" @click="submitComponyInfo('componyForm')">确认</el-button>
                                    </div>
                                </el-form>
                            </div>

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
import {getComponyInfo,postCcompanyChange} from "@/api/userService"
export default {
    components:{
        Head,
        Aside
    },
    data() {
      return {
        filePostList:[],
        
        componyForm:{
            componyName:'',
            introduce:'',
            link:'',
            codeUrl:'',
            //logo图片显示的url
            logoUrl:''
        },
        rules:{
            componyName: [
                { required: true, message: '请输入公司名称', trigger: 'blur' },
            ],
            introduce: [
                { required: false, message: '一句话简要介绍', trigger: 'change'}
            ],
            link: [
                { required: true, message: '填写公司专属域名（支持数字和英文字母的组合，3到20个字符）', trigger: 'change' }
            ],
        },
        upload: {
            url:'/file-service/upload'
        },
        
        // 默认公司logo
        defaultLogo:true,

      };
    },
    created(){
        this.getComponyInfo()
    },
    methods: {
        componyChangeInfo(){
            let obj = {
                barcodeUrl:this.componyForm.codeUrl,
                companyIntro:this.componyForm.introduce,
                companyName:this.componyForm.componyName,
                domain:this.componyForm.link,
                logoUrl:this.componyForm.logoUrl
            }
            return obj
        },
        //公司信息提交
        submitComponyInfo(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    postCcompanyChange(this.componyChangeInfo()).then(res => {
                    // this.$http.post("/user-service/company/update_info?barcodeUrl="+this.componyForm.codeUrl+"&companyIntro="+this.componyForm.introduce+"&companyName="+this.componyForm.componyName+"&domain="+this.componyForm.link+"&logoUrl="+this.componyForm.logoUrl+"").then(res =>{
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getComponyInfo(){
            // this.$http.get("/user-service/company/info").then(res => {
                getComponyInfo().then(res => {
                console.log(res)
                if(res.data.rspCode == 1){
                    this.componyForm.componyName =  res.data.data.companyName
                    this.componyForm.introduce =  res.data.data.companyIntro
                    this.componyForm.link =  res.data.data.domain
                    this.componyForm.codeUrl = res.data.data.barcodeUrl
                    this.componyForm.logoUrl = res.data.data.logoUrl
                }
            })
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
            this.componyForm.logoUrl = response.filePath
            this.defaultLogo = false
        },
        // 文件上传失败
        handleFileFail(err, file, fileList){
            console.log(err)
            console.log(file)
            console.log(fileList)
            alert("上传失败")
        },
        
         updateImg(file, fileList) {
            this.filePostList = fileList.slice(-1);
        },
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
    .main-container{
        width: 820px;
        margin: 0 auto;
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
            justify-content: space-between;
            .left{
                width:140px;
                .logo{
                    width: 100%;
                    height: 140px;
                    border-radius: 50%;
                    border: 1px solid #C9C9C9;
                    margin: 0 auto;
                    text-align: center;
                    line-height: 140px;
                    position: relative;
                    overflow: hidden;
                    margin-right: 62px;
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
                    text-align: center;
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
                /deep/ .el-upload{
                    display: block;
                }
            }
            .right{
                width: 618px;
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