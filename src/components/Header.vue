<template>
  <div class="header-pic"></div>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <ul>
          <li><a>小米商城</a></li>
          <li><a>MIUI</a></li>
          <li><a>IoT</a></li>
          <li><a>云服务</a></li>
          <li><a>天星数科</a></li>
          <li><a>有品</a></li>
          <li><a>小爱开放平台</a></li>
          <li><a>企业团购</a></li>
          <li><a>资质证照</a></li>
          <li><a>协议规则</a></li>
          <li><a>下载APP</a></li>
          <li><a>智能生活</a></li>
          <li><a>Select Location</a></li>
        </ul>
      </div>
      <div class="cart-trigger">
        <div
          class="iconfont icon-gwc inside"
          :class="{ 'change-back': changeBack }"
          @mouseover="changeBack = true"
          @mouseleave="changeBack = false"
        >
          <a>购物车</a>
        </div>
        <div class="miniCartMenu" :class="{ 'change-height': changeBack }">
          我是谁？？？
        </div>
      </div>
      <div class="site-user">
        <ul>
          <li><a>登录</a></li>
          <li><a>注册</a></li>
          <li><a>消息通知</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "Header",
  setup() {
    const changeBack = ref(false);

    onMounted(() => {});
    const funChange = {
      changeBack: () => {},
    };
    return {
      changeBack,
    };
  },
});
</script>
<style scoped>
.header-pic {
  top: 0;
  width: 100%;
  height: 120px;
  background-image: url(../images/header/headerOne.jpeg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 120px;
  min-width: 1226px;
  text-indent: -9999px;
}
.site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
.site-topbar a {
  color: #b0b0b0;
}
.site-topbar .container {
  width: 1226px;
  margin: 0 auto;
}
.site-topbar .container::after,
.site-topbar .container::before {
  content: "";
  display: block;
  clear: both;
}
.site-topbar .container .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}
.site-topbar .container .site-user {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
}
.site-topbar .container li {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
}
.site-topbar .container a:hover {
  color: aliceblue;
}
.site-topbar .container .cart-trigger {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  line-height: 40px;
  cursor: pointer;
}
.site-topbar .container .cart-trigger .inside {
  margin: 0 auto;
  width: 70px;
}

.site-topbar .container .cart-trigger .miniCartMenu {
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 20;
  width: 316px;
  height: 0px;
  background: white;
  color: #b0b0b0;
  line-height: 100px;
  text-align: center;
  -webkit-box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
  overflow: hidden;
}
.change-back {
  background: white;
}
.site-topbar .container .cart-trigger .change-height {
  height: 100px;
}
.contain .slide-box {
  width: 1126px;
  height: 0px;
}
.contain .slide-up-active {
  height: 200px;
}
/* .slide-up > li {
  float: left;
} */
/* .slide-up::after {
  content: "";
  clear: both;
  display: block;
} */
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_ly7508g0b6.woff2?t=1625546910145")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_ly7508g0b6.woff?t=1625546910145")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_ly7508g0b6.ttf?t=1625546910145")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gwc:before {
  content: "\e674";
}
</style>