<template>
  <div class="box-four">
    <img :src="headUrl" />
    <div class="box-inside">
      <h2>{{ headTitle }}</h2>
      <ul class="right-items">
        <li
          v-for="item in sourceDataA"
          :key="item"
          @mouseover="
            {
              if (item[1] !== boxInside) boxInside = item[1];
            }
          "
        >
          {{ item[0] }}
        </li>
      </ul>
      <div class="next-box">
        <div class="left-box">
          <div class="box-first"><img :src="sourceData[2]" alt="" /></div>
          <div class="box-second"><img :src="sourceData[3]" alt="" /></div>
        </div>
        <ul>
          <li v-for="item in boxInside" :key="item">
            <div class="item-box" v-if="item.id ? false : true">
              <img :src="item.url" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="body">{{ item.body }}</div>
              <div class="bottom">
                <span class="price">{{ item.price }}</span>
                <del v-show="item.del ? true : false" class="del">
                  {{ item.del }}
                </del>
              </div>
            </div>
            <div v-else class="box-last">
              <div class="box-last-first">
                <div>
                  <div class="title">{{ item.title }}</div>
                  <div class="bottom">
                    <span class="price">{{ item.price }}</span>
                    <del v-show="item.del ? true : false" class="del">
                      {{ item.del }}
                    </del>
                  </div>
                </div>
                <img :src="item.url" alt="" />
              </div>
              <div class="box-last-second">
                <div>
                  <div class="one">浏览更多</div>
                  <div class="two">热门</div>
                </div>
                <div class="icon-jiantou iconfont"></div>
              </div>
            </div>
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
  props: { headImg: Array, headTitle: Array, sourceData: Array },
  setup(props) {
    const headUrl = props.headImg;
    const headTitle = props.headTitle;
    const sourceData = props.sourceData;
    //@ts-ignore
    const sourceDataA = sourceData.slice(0, 2);
    //@ts-ignore
    const boxInside = ref(sourceData[0][1]);
    return {
      sourceDataA,
      boxInside,
      sourceData,
      headTitle,
      headUrl,
    };
  },
});
</script>
<style scoped>
.box-four {
  position: relative;
  overflow: hidden;
}

.box-four > img {
  margin-top: 10px;
  margin-bottom: 10px;
}
.box-four .box-inside {
  position: relative;
}
.box-four .right-items {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}
.box-four .right-items > li {
  font-size: 16px;
  margin-left: 10px;
  user-select: none;
  cursor: pointer;
  transition: all ease-in 0.5s;
}
.box-four .right-items > li:hover {
  color: #ff6700;
  border-bottom: 1px solid #ff6700;
}
.next-box {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.next-box .left-box img {
  display: block;
  width: 234px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
}
.left-box {
  width: 234px;
  height: 614px;
}
.left-box .box-first {
  width: 234px;
  height: 300px;
  position: relative;
  margin-bottom: 14px;
}
.left-box .box-second {
  position: relative;
}
.next-box .left-box .box-first:hover,
.next-box .left-box .box-second:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
.next-box ul {
  width: 992px;
  height: 614px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
}
.next-box ul li {
  width: 244px;
  height: 314px;
  position: relative;
}
.next-box .item-box {
  width: 234px;
  height: 300px;
  margin-left: 14px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;
  position: absolute;
  transition: all 0.5s ease;
  user-select: none;
  cursor: pointer;
  animation-name: changeOp;
  animation-duration: 2s;
}
@keyframes changeOp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1 !important;
  }
}
.next-box .item-box:hover {
  top: -2px;
  left: -2px;
  box-shadow: rgba(0, 0, 0, 0.2);
}
.next-box .item-box img {
  margin: 0 auto;
  width: 160px;
  height: 160px;
}
.next-box .item-box .title {
  margin: 0 auto;
  font-size: 14px;
  height: 18px;
  font-weight: 400;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.next-box .item-box .body {
  margin: 0 auto;
  font-size: 12px;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
}
.next-box .item-box .bottom {
  margin: 0 auto;
}
.bottom .price {
  color: #ff6700;
}
.bottom .del {
  color: #b0b0b0;
}
.box-last {
  overflow: hidden;
  height: 600px;
}
.box-last-first {
  position: relative;
  width: 234px;
  height: 140px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-left: 10px;
  transition: all 0.5s ease-in-out;
}
.box-last-first img {
  width: 80px;
  height: 80px;
}
.box-last .box-last-first .title,
.box-last .box-last-first .bottom {
  width: 94px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 42px;
  font-size: 14px;
  margin-left: 10px;
}
.box-last-first:hover,
.box-last-second:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
.box-last-second {
  position: relative;
  width: 234px;
  height: 140px;
  background-color: #fff;
  margin-left: 10px;
  transition: all 0.5s ease-in-out;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box-last-second .one {
  font-size: 18px;
  color: #333;
}
.box-last-second .two {
  font-size: 12px;
  color: #757575;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_x9y19c2kyja.woff2?t=1626143936034")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_x9y19c2kyja.woff?t=1626143936034")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_x9y19c2kyja.ttf?t=1626143936034")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantou:before {
  content: "\e61d";
}
</style>