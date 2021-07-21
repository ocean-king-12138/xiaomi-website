<template>
  <div class="home">
    <div class="contain">
      <div class="box-one">
        <h2>小米秒杀</h2>
        <div class="miaosha">
          <div class="time">
            <div class="box-first">10:00 场</div>
            <div class="box-second">
              <img
                src="../images/bodyPartThree/xiazai.jpg"
                alt=""
                width="34"
                height="53"
              />
            </div>
            <div class="box-third">距离结束还有</div>
            <div class="box-fourth">
              <span>{{ hour }}</span
              ><i>：</i><span>{{ minute }}</span
              ><i>：</i><span>{{ second }}</span>
            </div>
          </div>
          <div class="flash-lists">
            <ul :style="translatFlash">
              <li
                v-for="item in flashList"
                :key="item.style"
                :style="{ 'border-top-color': item.style }"
              >
                <img :src="item.url" alt="" />
                <div class="title">
                  <h3>{{ item.title }}</h3>
                </div>
                <p class="body">{{ item.body }}</p>
                <div class="price">
                  <span>{{ item.price }}</span>
                  <del>{{ item.del }}</del>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="button-group">
          <div
            class="left iconfont"
            :class="
              leftAble === true
                ? 'icon-jiantou1-left'
                : 'icon-jiantou1-red-left'
            "
            @click="moveLeft"
          ></div>
          <div
            class="right iconfont"
            @click="moveRight"
            :class="
              rightAble === true
                ? 'icon-jiantou1-right'
                : 'icon-jiantou1-red-right'
            "
          ></div>
        </div>
      </div>
      <div class="box-two">
        <img src="../images/bodyPartThree/box-2.webp" alt="" />
      </div>
      <BodyPartThreeOne></BodyPartThreeOne>
      <BodyPartThreeTwo
        :headImg="headImg[0]"
        :headTitle="headTitle[0]"
        :sourceData="sourceDataOne"
      ></BodyPartThreeTwo>
      <BodyPartThreeTwo
        :headImg="headImg[1]"
        :headTitle="headTitle[1]"
        :sourceData="sourceDataOne"
      ></BodyPartThreeTwo>
      <BodyPartThreeTwo
        :headImg="headImg[2]"
        :headTitle="headTitle[2]"
        :sourceData="sourceDataOne"
      ></BodyPartThreeTwo>
      <BodyPartThreeTwo
        :headImg="headImg[3]"
        :headTitle="headTitle[3]"
        :sourceData="sourceDataOne"
      ></BodyPartThreeTwo>
      <BodyPartThreeTwo
        :headImg="headImg[4]"
        :headTitle="headTitle[4]"
        :sourceData="sourceDataOne"
      ></BodyPartThreeTwo>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BodyPartThreeOne from "./BodyPartThreeOne.vue";
import BodyPartThreeTwo from "./BodyPartThreeTwo.vue";
export default defineComponent({
  name: "App",
  components: { BodyPartThreeOne, BodyPartThreeTwo },
  setup() {
    const hour = ref(null);
    const minute = ref(null);
    const second = ref(null);
    const AppendZero = (t: number) => {
      if (t < 10) return "0" + t;
      else return t;
    };
    setInterval(() => {
      let myDate = new Date();
      //@ts-ignore
      hour.value = AppendZero(myDate.getHours());
      //@ts-ignore
      minute.value = AppendZero(myDate.getMinutes());
      //@ts-ignore
      second.value = AppendZero(myDate.getSeconds());
    }, 1000);
    const flashList = [
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
      {
        url: "../src/images/bodyPartThree/flash-1-1.webp",
        title: "小米全面屏电视43英寸 E43K 黑色 43英寸",
        body: "全面屏设计，海量内容",
        price: "1399元",
        del: "1599元",
        style: "#ff6709",
      },
    ];
    const translatFlash = ref(null);
    let i = 0;
    const leftAble = ref(true);
    const moveLeft = () => {
      if (i == 1) {
        //@ts-ignore
        translatFlash.value = {
          transform: `translate3d(0px, 0px, 0px)`,
          "transition-duration": " 1000ms",
        };
      } else {
        i = 0;
        leftAble.value = false;
      }
    };
    const rightAble = ref(true);
    const moveRight = () => {
      if (i < 1) {
        //@ts-ignore
        translatFlash.value = {
          transform: `translate3d(-${++i * 978}px, 0px, 0px)`,
          "transition-duration": " 1000ms",
        };
        rightAble.value = false;
      }
    };
    const headImg = [
      "../src/images/bodyPartThreeTwo/header-1.webp",
      "../src/images/bodyPartThreeTwo/header-2.webp",
      "../src/images/bodyPartThreeTwo/header-3.webp",
      "../src/images/bodyPartThreeTwo/header-4.webp",
      "../src/images/bodyPartThreeTwo/header-5.webp",
    ];
    const headTitle = ["家电", "智能", "搭配", "配件", "周边"];
    const sourceDataOne = [
      [
        "热门",
        [
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-1-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            id: true,
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-last.jpg",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
        ],
      ],
      [
        "电视影音",
        [
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-2-2.webp",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
          {
            id: true,
            url: "../src/images/bodyPartThreeTwo/sourceDataOne-last.jpg",
            title: "小米全面屏电视65英寸 E65X",
            body: "全面屏设计",
            price: "2999元",
            del: "3299元",
          },
        ],
      ],
      "../src/images/bodyPartThreeTwo/sourceDataOne-1-1.webp",
      "../src/images/bodyPartThreeTwo/sourceDataOne-1-1.webp",
    ];
    return {
      sourceDataOne,
      headTitle,
      headImg,
      rightAble,
      leftAble,
      translatFlash,
      moveLeft,
      moveRight,
      hour,
      minute,
      second,
      flashList,
    };
  },
});
</script>
<style scoped>
.home {
  margin-top: 40px;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 12px;
  min-width: 1226px;
  background-color: #f5f5f5;
}
.home .contain {
  width: 1226px;
  height: 5120px;
  margin: 0 auto;
}
.box-one {
  position: relative;
}
.box-one > h2 {
  font-weight: 400;
  margin-right: 100px;
}
.box-one .miaosha {
  height: 340px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.box-one .miaosha .time {
  width: 234px;
  height: 340px;
  background-color: #f1eded;
  border-top: 1px solid #e53935;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.box-first {
  order: 1;
  font-size: 12px;
  color: #e53935;
}
.box-second {
  order: 2;
}
.box-third {
  order: 3;
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
}
.box-fourth {
  order: 4;
}
.box-fourth i {
  width: 15px;
  height: 46px;
}
.box-fourth span {
  width: 46px;
  height: 46px;
  background-color: #605751;
  color: #fff;
  font-size: 24px;
  line-height: 46px;
}
.box-one .miaosha .flash-lists {
  width: 978px;
  height: 340px;
  overflow: hidden;
}
.flash-lists ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms;
}
.flash-lists > ul > li {
  flex-shrink: 0;
  width: 234.5px;
  height: 339px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  border-top: 1px solid;

  /* border: 1px solid grey; */
  background-color: rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
}
.flash-lists ul li img {
  width: 160px;
  height: 160px;
}
.flash-lists .title {
  width: 160px;
}
.flash-lists h3 {
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.flash-lists .body {
  font-size: 12px;
  text-overflow: ellipsis;
  color: #b0b0b0;
  overflow: hidden;
  white-space: nowrap;
}
.flash-lists .price span,
.flash-lists .price del {
  font-size: 12px;
}
.flash-lists .price span {
  color: #ff6709;
}
.flash-lists .price del {
  color: #b0b0b0;
}

.button-group {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 25px;
}
.button-group .left {
  width: fit-content;
  height: 20px;
  line-height: 20px;
  padding-right: 10px;
  padding-left: 10px;
  display: inline-block;
  border: 1px solid gray;
  vertical-align: bottom;
  cursor: pointer;
}
.button-group .right {
  width: fit-content;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  padding-right: 10px;
  padding-left: 10px;
  border: 1px solid gray;
  vertical-align: bottom;
  cursor: pointer;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_h97lyuev52b.woff2?t=1625966072928")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_h97lyuev52b.woff?t=1625966072928")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_h97lyuev52b.ttf?t=1625966072928")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantou1-red-left:before {
  content: "\e62e";
}

.icon-jiantou1-red-right:before {
  content: "\e62f";
}

.icon-jiantou1-left:before {
  content: "\e62c";
}

.icon-jiantou1-right:before {
  content: "\e62d";
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_956g0c50hb.woff2?t=1625966828157")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_956g0c50hb.woff?t=1625966828157")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_956g0c50hb.ttf?t=1625966828157")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantou-red-copy:before {
  content: "\e664";
}

.icon-jiantou:before {
  content: "\e663";
}

.box-two {
  margin-top: 10px;
  width: 1226px;
  width: 120px;
}
</style>