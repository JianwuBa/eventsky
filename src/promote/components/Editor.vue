<template>
        <quill-editor v-model="content" ref="myQuillEditor" style="height: 400px;width:713px"  :options="editorOption">
        </quill-editor>
</template>

<script>
    import { Quill, quillEditor } from 'vue-quill-editor'
    import {container, ImageExtend} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
  
    //引入font.css 
    import '@/assets/css/font.css'
    
    // 自定义字体大小
    let Size = Quill.import('attributors/style/size')
    Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
    Quill.register(Size, true)
    // 自定义字体类型
    var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
        '宋体', '黑体'
    ]
    var Font = Quill.import('formats/font')
    Font.whitelist = fonts
    Quill.register(Font, true)

    export default {
        //name: 'FuncFormsEdit',
    components: {
        quillEditor
    },
    data() {
        return {
            content: null,
            editorOption: {
                placeholder: "添加活动详情及图片",
                theme: "snow", // or 'bubble' 
                modules: {
                    //ImageResize: {},
                    ImageExtend: {
                        loading: true,  // 可选参数 是否显示上传进度和提示语
                        name: 'img',  // 图片参数名
                        size: 8,  // 可选参数 图片大小，单位为M，1M = 1024kb
                        action: '/file-service/upload',  // 服务器地址, 如果action为空，则采用base64插入图片
                        // response 为一个函数用来获取服务器返回的具体图片地址
                        // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
                        // 则 return res.data.url
                        response: (res) => {
                            console.log(res)
                            return res.info
                        },
                        headers: (xhr) => {
                            console.log(xhr)
                        },  // 可选参数 设置请求头部
                        start: () => {},  // 可选参数 自定义开始上传触发事件
                        end: () => {},  // 可选参数 自定义上传结束触发的事件，无论成功或者失败
                        error: () => {},  // 可选参数 自定义网络错误触发的事件
                        change: (xhr, formData) => {
                            console.log(xhr,formData)
                        } // 可选参数 选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
                    },
                    toolbar: {
                        container: container,  // container为工具栏，此次引入了全部工具栏，也可自行配置
                    }
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>

