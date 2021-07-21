<template>
  <div class="last">
    <div class="box">
      <img src="../images/bodyPartLast/img.webp" alt="" />
      <h2>视频</h2>
      <div class="right-box">查看更多</div>
      <ul class="box-list">
        <li v-for="item in boxList" :key="item">
          <div class="item-box">
            <div class="iconfont icon-bofangjian left-box"></div>
            <img :src="item.url" alt="" />
            <div class="title">{{ item.title }}</div>
            <div class="body">{{ item.body }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const boxList = [
      {
        url: "../src/images/bodyPartLast/box-1.webp",
        title: "2021年春季新品发布会第一场",
        body: " ",
      },
      {
        url: "../src/images/bodyPartLast/box-2.webp",
        title: "Redmi 10X系列发布会",
        body: "Redmi 10X系列发布会",
      },
      {
        url: "../src/images/bodyPartLast/box-3.webp",
        title: "小米10 青春版 发布会",
        body: " ",
      },
      {
        url: "../src/images/bodyPartLast/box-4.webp",
        title: "小米10 8K手机拍大片",
        body: " ",
      },
    ];
    return {
      boxList,
    };
  },
});
</script>
<style scoped>
.last {
  background-color: #f5f5f5;
  height: 500px;
}
.box {
  width: 1226px;
  margin: 0 auto;
  position: relative;
}
.box > img {
  width: 100%;
  height: 120px;
}
.right-box {
  position: absolute;
  right: 0;
  top: 135px;
}
.box-list {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
}
.item-box {
  position: relative;
  width: 296px;
  height: 285px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 0;
}
.item-box:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
.item-box > img {
  width: 296px;
  height: 180px;
}
.item-box .title {
  margin: 0 auto 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-box .body {
  height: 18px;
  margin: 0 auto;
  font-size: 12px;
  color: #b0b0b0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.left-box {
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_gj70wcgr2sf.woff2?t=1626844718315")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_gj70wcgr2sf.woff?t=1626844718315")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_gj70wcgr2sf.ttf?t=1626844718315")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 40px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.item-box:hover .icon-bofangjian:before {
  color: salmon;
}
.icon-bofangjian:before {
  content: "\e624";
  transition: all 1s ease-in-out;
}
</style>