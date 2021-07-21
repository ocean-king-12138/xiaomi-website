<template>
  <div class="box-three">
    <h2>手机</h2>
    <div class="right-title">
      <div class="inside">
        <p>查看更多</p>
        <i class="iconfont icon-jiantou back"></i>
      </div>
    </div>
    <div class="box">
      <div class="left-box">
        <img src="../images/BodyPartThreeOne/left.webp" alt="" />
      </div>
      <div class="right-box">
        <ul>
          <li v-for="item in listBox" :key="item.id">
            <div class="box">
              <img :src="item.url" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="body">{{ item.body }}</div>
              <div class="price">
                <p>{{ item.price }}</p>
                <del v-show="item.del ? true : false">{{ item.del }}</del>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const listBox = [
      {
        id: 1,
        url: "../src/images/bodyPartThreeOne/box-1-1.webp",
        title: "Note 10 Pro",
        body: "天玑1100年度旗舰芯，VC液冷散热",
        price: "1599元起",
        del: "1699元",
      },
      {
        id: 2,
        url: "../src/images/bodyPartThreeOne/box-1-2.webp",
        title: "Redmi Note 10 5G",
        body: "5G小金刚，旗舰长续航",
        price: "1099元起",
      },
      {
        id: 3,
        url: "../src/images/bodyPartThreeOne/box-1-3.webp",
        title: "小米MIX FOLD",
        body: "折叠大屏｜自研芯片",
        price: "9999元起",
        del: "1699元",
      },
      {
        id: 4,
        url: "../src/images/bodyPartThreeOne/box-1-4.webp",
        title: "小米11 Ultra",
        body: "1/1.12''GN2｜2K四微曲屏",
        price: "5499元起",
        del: "5999元",
      },
      {
        id: 5,
        url: "../src/images/bodyPartThreeOne/box-2-1.webp",
        title: "小米11 Pro",
        body: "1/1.12''GN2｜骁龙888",
        price: "4499元起",
        del: "4999元",
      },
      {
        id: 6,
        url: "../src/images/bodyPartThreeOne/box-2-2.webp",
        title: "小米11 青春版",
        body: "小米11 青春版 轻薄",
        price: "2099元起",
        del: "2299元",
      },
      {
        id: 7,
        url: "../src/images/bodyPartThreeOne/box-2-3.webp",
        title: "K40 游戏增强版",
        body: "轻薄电竞设计",
        price: "1999元起",
      },
      {
        id: 8,
        url: "../src/images/bodyPartThreeOne/box-2-4.webp",
        title: "黑鲨4 Pro",
        body: "黑鲨4 Pro",
        price: "3999元起",
      },
    ];
    return {
      listBox,
    };
  },
});
</script>
<style scoped>
.box-three {
  position: relative;
}
.box-three > h2 {
  margin-bottom: 10px;
}
.box-three .right-title {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 30px;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
}
.box-three .box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.left-box {
  display: inline-block;
  position: relative;
  width: 234px;
  height: 614px;
}
.left-box > img {
  width: 234px;
  height: 614px;
  cursor: pointer;
}
.left-box img {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
}
.left-box img:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.right-box {
  display: inline-block;
  width: 992px;
  height: 614px;
}
.right-title p {
  display: inline-block;
}
@font-face {
  font-family: "iconfont"; /* Project id 2665813 */
  src: url("//at.alicdn.com/t/font_2665813_1bihvwfhjr2.woff2?t=1625968632263")
      format("woff2"),
    url("//at.alicdn.com/t/font_2665813_1bihvwfhjr2.woff?t=1625968632263")
      format("woff"),
    url("//at.alicdn.com/t/font_2665813_1bihvwfhjr2.ttf?t=1625968632263")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantou::after {
  content: "\e83e";
}
.right-title .inside {
  width: fit-content;
  margin: 0 auto;
}
.right-title .inside:hover p {
  color: #ff6700;
}
.right-title .inside:hover .back {
  background-color: #ff6700;
}
.right-box > ul {
  display: flex;
  flex-wrap: wrap;
}
.right-box > ul > li {
  position: relative;
  width: 234px;
  height: 300px;
  background-color: #fff;
  margin-left: 10px;
  margin-bottom: 14px;
  transition: all 0.5s linear;
  cursor: pointer;
}
.right-box > ul > li:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
.right-box > ul > li > div {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 234px;
  height: 300px;
}
.right-box .box img {
  margin: 0 auto;
}
.right-box .box .title {
  margin: 0 auto;
}
.right-box .box .body {
  margin: 0 auto;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}
.right-box .box .price {
  margin: 0 auto;
}
.right-box .box p {
  display: inline-block;
  color: #ff6700;
}
.right-box .box del {
  display: inline-block;
  color: #b0b0b0;
}
</style>