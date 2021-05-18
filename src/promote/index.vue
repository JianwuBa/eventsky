<template>
    <div>
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
                        <span>宣传页面</span>
                    </div>
                    <div class="promote">
                        <el-form >
                            <el-form-item >
                                <h4 class="tit">活动详情</h4>
                                      {{ msg }}
                                        <tinymce-editor ref="editor"
                                        v-model="msg"
                                        :disabled="disabled"
                                        :base-url="baseUrl"
                                        :language="language"
                                        :skin="skin"
                                        @onClick="onClick">
                                        </tinymce-editor>
                                        <button @click="clear">清空内容</button>
                                        <button @click="disabled = true">禁用</button>
                                        <button @click="disabled = false">启用</button>
                            </el-form-item>
                            <el-form-item >
                                <h4 class="tit">上传活动横幅 <span style="font-size:12px;color:#999;font-weight:normal;">最佳尺寸：1200x420px</span></h4>
                                <div class="banner">
                                    <img src="../assets/image/default-img.png" class="default" v-if="defaultBan" alt="">
                                    <img :src="bannerUrl" class="" v-if="!defaultBan" alt="">
                                </div>
                                <el-upload
                                    ref="upload"
                                    name="eskFile"
                                    :action="upload.url"
                                    :on-change="handleBanChange"
                                    :on-success="handleBanSuccess"
                                    :on-error="handleBanFail"
                                    :file-list="fileBanList">
                                    <el-button >点击上传</el-button>
                                    
                                </el-upload>
                            </el-form-item>
                            <el-form-item >
                                <div class="event-post-video">
                                    <div class="post">
                                        <h4 class="tit">上传活动海报 <span style="font-size:12px;color:#999;font-weight:normal;">最佳尺寸：750x1334px</span></h4>
                                        <div class="banner">
                                            <img src="../assets/image/default-img.png" class="default" v-if="defaultPost" alt="">
                                            <img :src="postUrl" class="" v-if="!defaultPost" alt="">
                                        </div>
                                        <el-upload
                                                ref="upload"
                                                name="eskFile"
                                                :action="upload.url"
                                                :on-change="handlePostChange"
                                                :on-success="handlePostSuccess"
                                                :on-error="handlePostFail"
                                                :file-list="filePostList">
                                            <el-button >上传海报</el-button>
                                        </el-upload>
                                    </div>
                                        <div class="video">
                                            <h4 class="tit">添加活动视频</h4>
                                            <el-select placeholder="选择活动类别" v-model="value">
                                                <el-option label="优酷" value="1"> </el-option>
                                                <el-option label="腾讯" value="2"> </el-option>
                                                <el-option label="爱奇艺" value="3"> </el-option>
                                                <el-option label="芒果" value="4">  </el-option>
                                                <el-option label="YouTube" value="5">  </el-option>
                                                <el-option label="其他" value="6">  </el-option>
                                            </el-select>
                                       <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="videoLink">
                                        </el-input>
                                    </div>
                                </div>
                                
                            </el-form-item>
                            <el-form-item class="save-event-info">
                                <div class="save-event-btn">
                                    <el-button type="primary" >立即创建</el-button>
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
    import {Head} from "@/event/components/Head"
    import {Aside} from "@/event/components/Aside"
    import TinymceEditor from "./components/tinymce-editor"
    import 'tinymce/icons/default/icons.min.js'
    export default {
        components:{
            Head,
            Aside,
            TinymceEditor
        },
        data(){
            return {
                value:'',
                //编辑器
                msg: 'Welcome to Use Tinymce Editor-liubing.me',
                disabled: false,
                baseUrl: process.env.NODE_ENV === 'production' ? '/vue-use-tinymce' : '',
                language: 'zh_CN',
                skin: 'oxide',

                upload:{
                    url:'/file-service/upload',
                },
                fileBanList: [],
                filePostList:[],
                bannerUrl:'',
                defaultBan:true,
                defaultPost:true,
                videoLink:'',
            }
        },
        methods:{
            handleBanChange(file, fileList) {
                this.fileBanList = fileList.slice(-1);
            },
            handlePostChange(file, fileList) {
                this.filePostList = fileList.slice(-1);
            },
            //ban上传成功
            handleBanSuccess(response, file, fileList){
                console.log(response)
                console.log(file)
                console.log(fileList)
                this.bannerUrl = response.filePath
                this.defaultBan = false
            },
            // ban上传失败
            handleBanFail(err, file, fileList){
                console.log(err)
                console.log(file)
                console.log(fileList)
                alert("上传失败")
            },
            //post上传成功
            handlePostSuccess(response, file, fileList){
                console.log(response)
                console.log(file)
                console.log(fileList)
                this.postUrl = response.filePath
                this.defaultPost = false
            },
            // post上传失败
            handlePostFail(err, file, fileList){
                console.log(err)
                console.log(file)
                console.log(fileList)
                alert("上传失败")
            },
            // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
        }
    }
</script>

<style lang="less" scoped>

    .el-main{
        padding: 0 0 0 190px;
        overflow: initial;
         .container{
            position: relative;
            .promote{
                width: 713px;
                margin: 20px auto 0; 
                padding-bottom: 140px;
                .tit{
                    color: #333333;
                    font-size:14px;
                    line-height: 30px;
                }
                /deep/ .el-form-item__content{
                    line-height: 20px;
                }
                /deep/ .ql-container{
                    height: 334px;
                }
                /deep/ .el-upload{
                    text-align: right;
                    display: block;
                    .el-button{
                        border-radius: 2px;
                        border: 1px solid #1890FF;
                        line-height: 24px;
                        color: #1890FF;
                        padding: 0 18px;
                        margin-top: 10px;
                    }
                }
                
                .banner{
                    width: 100%;
                    height: 210px;
                    border-radius: 3px;
                    border: 1px solid #D2D6DE;
                    position: relative;
                    .default{
                        width: 75px;
                    }
                    img{
                        position: absolute;
                        margin: auto;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        top: 0;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .event-post-video{
                    display: flex;
                    .post{
                        width: 45%;
                        .banner{
                            width: 188px;
                            height: 334px;
                        }
                        /deep/ .el-upload{
                            width: 188px;
                        }
                    }
                    .video{
                        width: 55%;
                        /deep/ .el-textarea__inner{
                            height: 280px;
                            resize: none;
                        }
                        .el-select{
                            width: 100%;
                            margin-bottom: 14px;
                        }
                    }
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
    
</style>