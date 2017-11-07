<template>
  <div>
    <transition name="show">
      <login @oclose="close1" v-if="show"></login>
    </transition>
    <transition name="show">
      <about v-if="abshow" @close1="close">
        <p slot="s1">
          本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、 专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发 展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
        </p>
      </about>
    </transition>
    <transition name="show">
      <about v-if="payShow" @close1="close">
      <pay-page slot="pay1" :payShop="payShop"></pay-page>
      <banks slot="banks" @pay-show2="payS2"></banks>
      </about>
    </transition>

  <transition name="show">
    <about v-if="payShow2" @close1="close">
        <template slot="succ" >
         <b class="buyb">请检查你的支付状态！</b>
        <a href="#" class="buy" @click="payS3">支付成功</a>
        <a href="#" class="buy" @click="payS3">支付失败</a>
          </template>
     </about>
  </transition>
      <transition name="show">
        <about v-if="payShow3" @close1="close3">
       <p slot="s1">支付成功!</p>
     </about>
      </transition>
     
    <header class="header">
      <div class="header-wrap">
        <div class="header-logo">
          <router-link :to="{path:'/'}"><img src="../assets/logo.png" alt="vue"></router-link>
        </div>
        <nav class="header-nav">
          <ul>
            <li>
              <a href="#" @click="login" v-if="show2">登录</a>
              <a href="#" v-if="!show2">{{user}}</a>
            </li>
            <li>|</li>
            <li>
              <a href="#" v-if="show3">注册</a>
              <a href="#" v-if="!show3" @click="turn">退出</a>
            </li>
            <li>|</li>
            <li>
              <a href="#" @click="about">关于</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="content">
      <keep-alive>
        <router-view @pay-show="payS($event)"></router-view>
      </keep-alive>
    </div>
    <footer class="footer">
      © 2016 fishenal MIT
    </footer>
  </div>
</template>

<script>
import payPage from './page/detail/com-1/payPage'
import banks from './page/detail/com-1/bankPage'
import login from './page/login'
import about from './page/about'
export default {
  components: {
    login, about,payPage,banks
  },
  data() {
    return {
      show: false,
      abshow: false,
      show2: true,
      show3: true,
      user: "",
      payShow: false,
      payShow2:false,
      payShow3:false,
      payShop:{}
    }
  },
  methods: {
    payS3(){
      this.payShow3=true;
      this.payShow2=false;
    },
    payS2(){
      this.payShow2=true;
      this.payShow=false;
    },
    payS(shop) {
      this.payShow = true
     this.payShop=shop
    },
    login() {
      this.show = true
    },
    about() {
      this.abshow = true
    },
    close() {
      this.abshow = false
      this.payShow = false
      this.payShow2=false;
      
       
    },
    close3(){
 this.payShow3=false;
 this.$router.push({path:"/orderList"})
    },
    close1(aa) {
       
      this.show = false
     
      if (aa) {
        this.show2 = false;
        this.show3 = false;
        this.user = aa
      }
    },
    turn() {
      this.show2 = true;
      this.show3 = true;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  background-color: #f0f2f5;
}

.header {
  height: 90px;
  background-color: #363636;
  width: 100%;
}

.header-wrap {
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-logo img {
  height: 50px;
  margin-left: -8px;
}

.header-nav {
  position: absolute;
  right: 5px;
  color: #b2b2b2;
}

.header-nav li {
  display: inline-block;
  margin-left: 6px;
}

.header-nav a {
  color: #b2b2b2;
  font-size: 14px;
}

.footer {
  width: 100%;
  margin-top: 48px;
  background-color: #e3e4e8;
  color: #444;
  height: 100px;
  font-size: 14px;
  line-height: 100px;
  text-align: center;
}
.show-enter{
    transform: translateY(-500px);
}
.show-enter-active{
   transition: all .5s ease;
}
.show-leave-active {
  transform: translateY(-500px);
  transition: all .5s ease;
}
.buy {
  display: inline-block;
  width: 98px;
  height: 34px;
  background-color: #4fc08d;
  color: #fff;
  text-align: center;
  line-height: 34px;
}
.buyb{
  font-weight: normal;
}

</style>
