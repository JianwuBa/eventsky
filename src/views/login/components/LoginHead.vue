<template>
    <header class="header">
        <div class="containers">
            <div class="logo" @click="goHome">
                <img src="@/assets/logocn.png" alt="">
            </div>
            <div class="head-nav">
                <span @click="register">免费注册</span>
                <span @click="login">登陆</span>
                <span  @click="langZh">中文</span>
                <span @click="langEn"> English</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
      langZh(){
        this.$i18n.locale = 'zh'
        window.localStorage.setItem('lang',this.$i18n.locale)
      },
      langEn(){
        this.$i18n.locale = 'en'
        window.localStorage.setItem('lang',this.$i18n.locale)
      },
      login(){
          this.$router.push("/login")
      },
      register(){
          this.$router.push("/register")
      },
      goHome(){
           this.$router.push("/")
      }
    }
}
</script>

<style>
    header{
      width: 100%;
      height: 60px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10;background-image: linear-gradient(to bottom right,#1784FA, #2947C5, #0B3EA5);
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
      cursor: pointer;
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
</style>