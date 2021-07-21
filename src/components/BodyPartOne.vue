<template>
  <div class="header">
    <div class="contain">
      <div class="logo"></div>
      <div class="con-bar">
        <div class="header-search">
          <input type="text" placeholder="小米" class="search-text" />
          <div class="submit-inside">
            <div class="icon-suo iconfont icon-sousuo"></div>
            <input type="submit" value="" class="search-btn" />
          </div>
        </div>
        <div class="con-item">
          <ul>
            <li>
              <a
                href=""
                @mouseover="
                  {
                    slideHeight = true;
                    flagName = '小米手机';
                  }
                "
                @mouseout="slideHeight = false"
                >小米手机</a
              >
            </li>
            <li>
              <a
                href=""
                @mouseover="
                  {
                    slideHeight = true;
                    flagName = 'Redmi红米';
                  }
                "
                @mouseout="slideHeight = false"
                >Redmi红米</a
              >
            </li>
            <li>
              <a
                href=""
                @mouseover="
                  {
                    slideHeight = true;
                    flagName = '电视';
                  }
                "
                @mouseout="slideHeight = false"
                >电视</a
              >
            </li>
            <li><a href="">笔记本</a></li>
            <li><a href="">家电</a></li>
            <li><a href="">路由器</a></li>
            <li><a href="">智能硬件</a></li>
            <li><a href="">服务</a></li>
            <li><a href="">社区</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-box" :class="{ 'slide-box-active': slideHeight }">
      <div class="in-box">
        <ul class="slide-ul">
          <li v-for="item in list[flagName]" :key="item.id" class="slide-item">
            <img :src="item.url" alt="" />
            <div class="title">{{ item.title }}</div>
            <div class="price">{{ item.price }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const flagName = ref("");
    const slideHeight = ref(false);
    const list = {
      小米手机: [
        {
          id: 1,
          url: "../src/images/bodyPartOne/list-1-1.webp",
          title: "小米MIX FOLD",
          price: "9999元起",
        },
        {
          id: 2,
          url: "../src/images/bodyPartOne/list-1-2.webp",
          title: "小米11 Ultra",
          price: "5499元起",
        },
        {
          id: 3,
          url: "../src/images/bodyPartOne/list-1-3.webp",
          title: "小米11 Pro",
          price: "4499元起",
        },
        {
          id: 4,
          url: "../src/images/bodyPartOne/list-1-4.webp",
          title: "小米11 青春版",
          price: "2099元起",
        },
        {
          id: 5,
          url: "../src/images/bodyPartOne/list-1-5.webp",
          title: "小米10S",
          price: "2999元起",
        },
        {
          id: 6,
          url: "../src/images/bodyPartOne/list-1-6.webp",
          title: "小米11",
          price: "3799元起",
        },
      ],
      Redmi红米: [
        {
          id: 1,
          url: "../src/images/bodyPartOne/list-2-1.webp",
          title: "Note 10 Pro",
          price: "1599元起",
        },
        {
          id: 2,
          url: "../src/images/bodyPartOne/list-2-2.webp",
          title: "Redmi Note 10 5G",
          price: "1099元起",
        },
        {
          id: 3,
          url: "../src/images/bodyPartOne/list-2-3.webp",
          title: "K40 游戏增强版",
          price: "1999元起",
        },
        {
          id: 4,
          url: "../src/images/bodyPartOne/list-2-4.webp",
          title: "K40 Pro 系列",
          price: "2799元起",
        },
        {
          id: 5,
          url: "../src/images/bodyPartOne/list-2-5.webp",
          title: "Redmi K40",
          price: "1999元起",
        },
        {
          id: 6,
          url: "../src/images/bodyPartOne/list-2-6.webp",
          title: "Redmi Note 9 系列",
          price: "999元起",
        },
      ],
      电视: [
        {
          id: 1,
          url: "../src/images/bodyPartOne/list-3-1.webp",
          title: "小米电视6 至尊版 55英寸",
          price: "5999元",
        },
        {
          id: 2,
          url: "../src/images/bodyPartOne/list-3-2.webp",
          title: "小米电视 ES55 2022款",
          price: "3399元",
        },
        {
          id: 3,
          url: "../src/images/bodyPartOne/list-3-3.webp",
          title: "小米电视大师 82英寸",
          price: "11999元",
        },
        {
          id: 4,
          url: "../src/images/bodyPartOne/list-3-4.webp",
          title: "小米透明电视",
          price: "49999元",
        },
        {
          id: 5,
          url: "../src/images/bodyPartOne/list-3-5.webp",
          title: "小米电视 大师 65英寸OLED",
          price: "9999元",
        },
        {
          id: 6,
          url: "../src/images/bodyPartOne/list-3-6.webp",
          title: "Redmi 智能电视 MAX 98''",
          price: "19999元",
        },
      ],
    };

    return {
      flagName,
      list,
      slideHeight,
    };
  },
});
</script>
<style scoped>
.header {
  height: 100px;
  min-width: 1226px;
  z-index: 20;
}
.header .contain {
  height: 100px;
  min-width: 1226px;
}
.header .contain .logo {
  float: left;
  width: 56px;
  height: 56px;
  background-image: url(../images/bodyPartOne/logo-mi.png);
  background-repeat: no-repeat;
  background-size: 56px;
}
.contain {
  width: 1226px;
  margin: 0 auto;
}
.contain .con-bar::after {
  content: "";
  clear: both;
  display: block;
}
.contain .con-bar {
  color: black;
  float: right;
}
.contain .con-bar li {
  float: left;
  margin-right: 5px;
}
.contain .con-bar a {
  display: block;
  padding: 26px 10px 38px;
  color: #333;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}
.contain .con-bar a:hover {
  color: salmon;
}
.con-bar .con-item {
  float: right;
}
.header-search {
  float: right;
  margin: auto 0;
  width: 300px;
  height: 60px;
  padding: 5px 0;
  position: relative;
}
.header-search .search-text {
  width: 223px;
  height: 48px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
  border: 1px solid gray;
  vertical-align: bottom;
}
.header-search .submit-inside {
  display: inline-block;
}
.header-search .submit-inside .search-btn:hover {
  background-color: rgb(240, 24, 0);
}
.header-search .search-btn {
  width: 52px;
  height: 50px;
  background: #fff;
  color: #616161;
  vertical-align: bottom;
}
.icon-suo {
  position: absolute;
  top: 30%;
  right: 8%;
}
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

.icon-sousuo::before {
  content: "\e617";
}
.slide-box {
  position: relative;
  width: 100%;
  min-width: 1226px;
  height: 0px;
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 5;
}
.in-box {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 1226px;
  z-index: 6;
}
.slide-box-active {
  height: 200px;
}
.slide-box li {
  float: left;
}
.slide-box .slide-ul::after {
  content: "";
  clear: both;
  display: block;
}
.slide-item {
  width: 160px;
  height: 110px;
  margin: 0 auto 16px;
  border-left: 1px solid #e0e0e0;
}
.in-box .slide-item:first-child {
  border-left: none;
}
.in-box .slide-ul {
  list-style-type: none;

  padding: 12px 0 0 30px;
}
.slide-item .title {
  margin: 0 auto;
  width: fit-content;
  height: 20px;
  line-height: 20px;
  font-size: 8px;
  color: #333;
}
.slide-item .price {
  margin: 0 auto;
  line-height: 20px;
  width: fit-content;
  height: 20px;
  font-size: 4px;
  color: #ff6700;
}
</style>