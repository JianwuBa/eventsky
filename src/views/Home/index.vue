<template>
  <div>
    <div class="header-banner">
        <Head></Head>
        <div class="banner">
            <div class="containers">
                <div class="left">
                    <h1 class="title" v-html="$t('INDEX_活动直播')"></h1>
                    <h1 class="title title-webEn"><span class="title-ji" v-html="$t('INDEX_及')"></span><span v-html="$t('INDEX_社交平台')"></span></h1>
                    <p class="text" v-html="$t('INDEX_扩大活动影响力连接活动参加者')">{{}}</p>
                    
                    <div class="apply" @click="register">免费注册</div>
                </div>
                <div class="right">
                    <img src="@/assets/banner-img.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <section class="section-odd">
        <h1 class="tit">{{$t('INDEX_随时随地轻松举办各种线上活动')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section1-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li>{{$t('INDEX_全球连线无需下载任何软件')}}</li>
                    <li>
                        <p>{{$t('INDEX_全套的活动组织工具包括')}}</p>
                    </li>
                    <li>
                        <p>{{$t('INDEX_适用于峰会研讨会讲座等各种类型')}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-even">
        <h1 class="tit">{{$t('INDEX_直播录播点播')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section2-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li>{{$t('INDEX_可直播活动现场也可录播或点播')}}</li>
                    <li>
                        {{$t('INDEX_全球部署优化保证视频和音频的交互速度和流畅度')}}
                    </li>
                    <li>
                        {{$t('INDEX_支持百万人实时互动无忧应对用户流量突增')}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-odd">
        <h1 class="tit">{{$t('INDEX_活动虚拟空间')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section3-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li>{{$t('INDEX_支持签到处等多种活动虚拟空间')}}</li>
                    <li>
                        {{$t('INDEX_让活动更有组织性和层次感促进有效互动和交流')}}
                    </li>
                    <li>
                        {{$t('INDEX_以不同的设计风格来展现不同的活动空间突出品牌形象')}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-even">
        <h1 class="tit">{{$t('INDEX_活动社交高效的人脉拓展')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section4-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li>{{$t('INDEX_全程文字图片表情音频视频的互动')}}</li>
                    <li>
                        {{$t('INDEX_嘉宾与嘉宾嘉宾与参加者以及参加者之间的1对1社交')}}
                    </li>
                    <li>
                        {{$t('INDEX_讨论区可以提问得到专业的回答')}}
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="section-odd">
      <h1 class="tit">{{$t('INDEX_长期活跃的用户社区')}}</h1>
      <div class="containers">
        <div class="left">
            <img src="@/assets/section5-1-img.png" alt="">
        </div>
        <div class="right">
            <ul>
                <li>{{$t('INDEX_以活动抓手建立长期活跃的用户社区')}}</li>
                <li>
                    {{$t('INDEX_活动前活动中活动后侧重点各不同')}}
                </li>
                <li>
                    {{$t('INDEX_为活动参加者提供长期的交流社区提高活动参加者的粘性和活跃度')}}
                </li>
            </ul>
        </div>
      </div>
    </section>
    <section class="section-even">
        <h1 class="tit"> {{$t('INDEX_活动插件全方位做好活动')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section5-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li> {{$t('INDEX_调查问卷轻松收集反馈意见并支持投票功能')}}</li>
                    <li>
                         {{$t('INDEX_参加者信息导入倒出自动导入主流客户管理系统或者Excel')}}
                    </li>
                    <li>
                         {{$t('INDEX_群发邮件及短信送活动通知及后续')}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-odd">
      <h1 class="tit">{{$t('INDEX_数据驱动量化了解优化预测活动的效果和趋势')}}</h1>
      <div class="containers">
          <div class="left">
              <img src="@/assets/section5-2-img.png" alt="">
          </div>
          <div class="right">
              <ul>
                  <li>{{$t('INDEX_后台控制自动收集活动数据并可视化呈现')}}</li>
                  <li>
                      {{$t('INDEX_量化和了解活动的关键指标浏览性互动性收入等关键指标')}}
                  </li>
                  <li>
                      {{$t('INDEX_实时优化和预测活动的效果和趋势')}}
                  </li>
              </ul>
          </div>
      </div>
    </section>
    <section class="section-even">
        <h1 class="tit"> {{$t('INDEX_全新的活动赞助渠道')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section6-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li> {{$t('INDEX_为活动主办方和商业赞助商提供全新的广告渠道')}}</li>
                    <li>
                         {{$t('INDEX_互相选择精准匹配多种接入点位和形式')}}
                    </li>
                    <li>
                         {{$t('INDEX_活动主办方可以大幅增加收入赞助商可以精准投放量化回报')}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-odd">
        <h1 class="tit"> {{$t('INDEX_轻松运营电商转化流量')}}</h1>
        <div class="containers">
            <div class="left">
                <img src="@/assets/section6-2-img.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li> {{$t('INDEX_售卖活动衍生品课件书籍商品服务等')}}</li>
                    <li>
                         {{$t('INDEX_开拓新的收入来源增加长期稳定的收入')}}
                    </li>
                    <li>
                         {{$t('INDEX_为活动参加者提供新的增值服务')}}
                    </li>
                </ul>
            </div>
        </div>
      </section>
      <section class="section-even responsive-platform">
        <h1 class="tit"> {{$t('INDEX_全平台自动适配无需下载')}}</h1>
        <div class="containers" >
            <img v-if="$i18n.locale == 'zh'" src="@/assets/section7-img.png"  alt="">
            <img v-if="$i18n.locale == 'en'" src="@/assets/section7en-img.png"  alt="">
        </div>
      </section>
      <footer>
          版权所有 © 2021 活动星空 EventSky.net
      </footer>
  </div>
</template>
<script>
  import Head from '@/views/login/components/LoginHead'
  export default {
    data() {
      return {
        
      }
    },
    components:{
        Head
    },
    methods:{
        register(){
            this.$router.push("/register")
        },
    }
    
  }
</script>
<style lang="css" scoped>
    .headerBg{
        background-image: url('../..//assets/header-bg.png');
    }
    header{
      width: 100%;
      height: 60px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10;
  }
  .header-banner{
      width: 100%;
      height: 710px;
      background-image: linear-gradient(to bottom right,#1784FA, #2947C5, #0B3EA5);
  }
  .containers{
      width: 1100px;
      margin: 0 auto;
  }
  header .containers{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
  }
  header .logo{
      height: 40px;
  }
  header .logo img{
      height: 100%;
  }
  header .head-nav{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
  }
  header .head-nav span{
      margin-left: 15px;
  }
  .banner{
      padding-top: 60px;
      height: 650px;
  }
  section:nth-of-type(odd){
      background: #fff;
  }
  section:nth-of-type(even){
      background: #F8F9FB;;
  }
  section{
      padding-top: 84px;
  }
  section .containers{
      display: flex;
      padding-top: 53px;
      align-items: center;
      padding-bottom: 44px;
      width: 900px;
  }
  section .tit{
      color: #333;
      font-size: 30px;
      text-align: center;
  }
  section .left{
      width: 450px;
  }
  section .left img{
      width: 100%;
  }
  section .right{
      width: 100%;
      padding-left:40px;
  }
  section .right ul li{
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
      position: relative;
      padding-left: 20px;
  }
  section .right ul li:last-child{
      margin-bottom: 0;
  }
  section .right ul li::before{
      content: '';
      width: 8px;
      height: 8px;
      background: #36AAE0;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top:6px;
  }
  section.section-even .containers {
      flex-direction: row-reverse;
  }
  .banner .containers{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 118px;
  }
  .banner .containers .left{
      flex: 1;        
      padding-left: 125px;

  }
    .banner .containers .left .title{
        font-size: 46px;
        color: #ffffff;
        text-align: left;
        letter-spacing: 20px;
    }

  .banner .containers .left .title:nth-of-type(2){
      margin-bottom: 52px;
      margin-top: 20px;
  }
  .banner .containers .left .title .title-ji{
      font-size: 36px;
  }
  .banner .containers .left .text{
      font-size: 24px;
      color: #fff;
      margin-bottom: 97px;
      line-height: 30px;
  }
  .banner .containers .left .text-phone{
      font-size: 24px;
      color: #fff;
      margin-bottom: 97px;
      display: none;
  }
  .banner .containers .left .apply{
      display: inline-block;
      padding: 0 40px;
      letter-spacing: 5px;
      background: #FFFFFF;
      border-radius: 6px;
      border: 1px solid #979797;
      cursor: pointer;
      line-height: 70px;
      font-size: 28px;
      color: #1760FF;
  }
  .banner .containers .right{
      flex: 1;
  }
  .banner .containers .right img{
      width: 650px;
      text-align: right;
  }
  .responsive-platform .containers{
      text-align: center;
      padding-top: 117px;
      padding-bottom: 116px;
  }
  .responsive-platform .containers img{
      margin: 0 auto;
      width: 681px;
  }
  footer{
      width: 100%;
      text-align: center;
      line-height: 140px;
      background: #F7F8FA;
      font-size: 14px;
      color: #333333;
  }
  .footer-btn{
      display: none;
  }
  .apply-infortmations{
      width: 100%;
      line-height: 46px;
      border-radius: 6px;
      padding-left: 8px;
      border: 1px solid #D7D7D7;
      display: flex;
      margin-bottom: 10px; font-size: 14px;
      color: #666;
      overflow: hidden;
  }
  .apply-infortmations span{
      width: 70px;
  }
  .apply-infortmations input.text{
      width: 100%;
      border: none;
      margin: 0;
      padding: 0;
      height: 46px;
      display: block;
      box-shadow: none;
      -moz-box-shadow: none;
      -o-box-shadow: none;
      -webkit-box-shadow: none;
  }
  .submit-apply{
      width: 100%;
      border-radius: 6px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      margin-top: 40px;
      background: #1E6CE5;
  }
  .apply-modal-body{
      background: #E8EEF4;padding: 35px;max-height: 800px;
  }
  apply-modal-body-success{
      background: #fff;
  }
  .applySuccess-dialig .modal-header{
      height: 50px;
  }
  .applySuccess-dialig .modal-header img{
      width: 22px;
  }
  .applySuccess-dialig{
      width: 340px;
      margin-left: -170px;
  }
  .applySuccess-dialig .ok{
      display: block;
      margin: 0 auto 26px;
      width: 50px;
  }
  .applySuccess-dialig .text1{
      font-size: 18px;
      text-align: center;
      color: #333;
      font-weight: bold;
  }
  .applySuccess-dialig .text2{
      font-size: 14px;
      text-align: center;
      color: #333;
  }
  .submit-applySuccess{
      line-height: 42px;
  }


</style>