<template>
  <div class="home-hero-contain">
    <div class="contain">
      <img
        :src="picSource || '../src/images/bodyPartTwo/pic-1.webp'"
        alt=""
        class="pic"
        @mouseover="stopPic"
        @mouseout="startPic"
      />
      <div class="icon-left" @click="preClick"></div>
      <div class="icon-right" @click="nextClick"></div>
      <div class="site-category">
        <ul class="category-list">
          <li
            v-for="items in categoryList"
            :key="items.id"
            class="list-item"
            @mouseout="
              {
                showRight = null;
              }
            "
            @mouseover="
              {
                showRight = items.id;
              }
            "
          >
            <a class="title"
              >{{ items.title }}
              <div class="icon-jiantou iconfont"></div>
            </a>
            <div
              :style="{ width: showRight === items.id ? items.width : 0 }"
              class="right-box"
            >
              <ul
                v-for="ulItem in items.item"
                :key="ulItem"
                class="ul-item"
                :style="{
                  left: ulItem[0].width + 'px',
                }"
              >
                <li
                  v-for="item in ulItem"
                  :key="item"
                  class="li-item"
                  :style="{ top: item.height + 'px' }"
                >
                  <img :src="item.url" class="li-img" width="40" height="40" />
                  <div class="title">{{ item.title }}</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-next">
        <div class="home-channal-list">
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-1-1.png" alt="" />
            <div>小米秒杀</div>
          </div>
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-1-2.png" alt="" />
            <div>企业团购</div>
          </div>
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-1-3.png" alt="" />
            <div>F码通道</div>
          </div>
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-2-1.png" alt="" />
            <div>米粉卡</div>
          </div>
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-2-2.png" alt="" />
            <div>以旧换新</div>
          </div>
          <div class="list-item">
            <img src="../images/bodyPartTwo/h-2-3.png" alt="" />
            <div>话费充值</div>
          </div>
        </div>
        <div class="home-pic">
          <img src="../images/bodyPartTwo/h-1.jpg" alt="" />
        </div>
        <div class="home-pic">
          <img src="../images/bodyPartTwo/h-2.jpg" alt="" />
        </div>
        <div class="home-pic">
          <img src="../images/bodyPartTwo/h-3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const picSource = ref("");
    let i = 0;
    const picList = [
      "../src/images/bodyPartTwo/pic-1.webp",
      "../src/images/bodyPartTwo/pic-2.png",
      "../src/images/bodyPartTwo/pic-3.webp",
      "../src/images/bodyPartTwo/pic-4.webp",
    ];
    let star = setInterval(() => {
      if (i === 3) i = 0;
      i++;
      picSource.value = picList[i];
    }, 2000);
    const preClick = () => {
      if (i === 0) i = 3;
      else i--;
      picSource.value = picList[i];
    };
    const nextClick = () => {
      if (i === 3) i = 0;
      else i++;
      picSource.value = picList[i];
    };
    const stopPic = () => {
      clearInterval(star);
    };
    const startPic = () => {
      star = setInterval(() => {
        if (i === 3) i = 0;
        i++;
        picSource.value = picList[i];
      }, 2000);
    };
    const categoryList = [
      {
        id: 1,
        title: "手机 电话卡",
        width: "992px",
        item: [
          [
            {
              width: 0,
              height: 0,
              url: "../src/images/bodyPartTwo/right-1-1.webp",
              title: "小米MIX FOLD",
            },
            {
              width: 0,
              height: 76,
              url: "../src/images/bodyPartTwo/right-1-2.webp",
              title: "小米11 Ultra",
            },
            {
              width: 0,
              height: 76 * 2,
              url: "../src/images/bodyPartTwo/right-1-3.webp",
              title: "小米11 Pro",
            },
            {
              width: 0,
              height: 76 * 3,
              url: "../src/images/bodyPartTwo/right-1-4.webp",
              title: "小米11 青春",
            },
            {
              width: 0,
              height: 76 * 4,
              url: "../src/images/bodyPartTwo/right-1-5.webp",
              title: "小米10S",
            },
            {
              width: 0,
              height: 76 * 5,
              url: "../src/images/bodyPartTwo/right-1-6.webp",
              title: "小米11",
            },
          ],
          [
            {
              width: 265,
              height: 0,
              url: "../src/images/bodyPartTwo/right-2-1.webp",
              title: "小米10",
            },
            {
              width: 265,
              height: 76,
              url: "../src/images/bodyPartTwo/right-2-2.webp",
              title: "黑鲨4 Pro",
            },
            {
              width: 265,
              height: 76 * 2,
              url: "../src/images/bodyPartTwo/right-2-3.webp",
              title: "黑鲨4",
            },
            {
              width: 265,
              height: 76 * 3,
              url: "../src/images/bodyPartTwo/right-2-4.webp",
              title: "Redmi K30S 至尊纪念版",
            },
            {
              width: 265,
              height: 76 * 4,
              url: "../src/images/bodyPartTwo/right-2-5.jpg",
              title: "小米云服务",
            },
            {
              width: 265,
              height: 76 * 5,
              url: "../src/images/bodyPartTwo/right-2-6.webp",
              title: "Redmi K30 至尊纪念版",
            },
          ],
        ],
      },
      {
        id: 2,
        title: "电视 盒子",
        width: "496px",
      },
      { id: 3, title: "笔记本 显示器", width: "248px" },
      { id: 4, title: "家电 插线板", width: "248px" },
      { id: 5, title: "出行 穿戴", width: "248px" },
      { id: 6, title: "智能 路由器", width: "248px" },
      { id: 7, title: "电源 配件", width: "248px" },
      { id: 8, title: "健康 儿童", width: "248px" },
      { id: 9, title: "耳机 音箱", width: "248px" },
      { id: 10, title: "生活 箱包", width: "248px" },
    ];
    const showRight = ref(null);
    const itemList = ref(null);
    return {
      itemList,
      showRight,
      categoryList,
      picSource,
      preClick,
      nextClick,
      startPic,
      stopPic,
    };
  },
});
</script>
<style scoped>
.home-hero-contain {
  position: relative;
  min-width: 1226px;
  z-index: 1;
}
.contain {
  width: 1226px;
  height: 630px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.pic {
  width: 1226px;
  height: 460px;
  display: block;
}
.contain .icon-left {
  position: absolute;
  top: 50%;
  left: 234px;
  width: 41px;
  height: 70px;
  margin-top: -35px;
  z-index: 10;
  cursor: pointer;
  outline: none;
  background: url(../images/bodyPartTwo/icon-slides.png) no-repeat -84px;
}
.contain .icon-left:hover {
  background-position: 1px;
}
.contain .icon-right {
  position: absolute;
  top: 50%;
  right: 0;
  width: 41px;
  height: 70px;
  margin-top: -35px;
  z-index: 10;
  cursor: pointer;
  outline: none;
  background: url(../images/bodyPartTwo/icon-slides.png) no-repeat -126px;
}
.contain .icon-right:hover {
  background-position: -42px;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_9issa5lbwku.woff2?t=1625731247247")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_9issa5lbwku.woff?t=1625731247247")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_9issa5lbwku.ttf?t=1625731247247")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 12px;
  line-height: 16px;
  color: #e0e0e0;
}

.icon-jiantou:before {
  content: "\e603";
}
.site-category {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 21;
  width: 234px;
  height: 460px;
  font-size: 14px;
}
.category-list {
  padding: 20px;
  padding-left: 10px;
  height: 420px;
  border: 0;
  color: #e0e0e0;
  background: rgba(105, 101, 101, 0.6);
}
.list-item {
  width: 234px;
  height: 42px;
}
.list-item .title {
  position: relative;
  display: block;
  height: 42px;
  line-height: 42px;
  color: #e0e0e0;
  user-select: none;
  cursor: pointer;
}
.category-list > li:hover {
  background-color: salmon;
}
.right-box {
  position: absolute;
  top: 0;
  left: 234px;
  z-index: 2;
  height: 460px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(105, 101, 101, 0.6);
}
.right-box .ul-item {
  position: absolute;
  top: 0;
  left: 0px;
  width: 265px;
  height: 75px;
  padding: 18px 20px;
  z-index: 1;
}
.right-box .ul-item .li-item {
  position: absolute;
  left: 0;
  width: 265px;
  height: 75px;
  z-index: 1;
}
.right-box .ul-item .li-item div:hover {
  color: coral;
}
.right-box .ul-item .li-img {
  position: absolute;
  top: 18px;
  left: 20px;
  line-height: 76px;
}
.right-box .ul-item .title {
  position: absolute;
  top: 18px;
  left: 70px;
  width: 170px;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  color: black;
}
.home-next {
  display: flex;
  width: 1226px;
  height: 170px;
  margin-top: 14px;
  margin-bottom: 14px;
  align-items: flex-start;
  justify-content: space-between;
}
.home-next .home-channal-list {
  width: 234px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  background: #5f5750;
  overflow: hidden;
}
.home-next .home-channal-list .list-item {
  width: 75px;
  height: 82px;
  position: relative;
}
.home-next .home-channal-list .list-item::before {
  position: absolute;
  top: -1px;
  left: 6px;
  width: 64px;
  height: 1px;

  content: "";
  background: #665e57;
  z-index: 5;
}
.home-next .home-channal-list .list-item::after {
  position: absolute;
  top: 6px;
  left: 0px;
  height: 64px;
  width: 1px;

  content: "";
  background: #665e57;
  z-index: 5;
}
.home-next .home-channal-list .list-item img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 10px auto 10px;
}
.home-next .home-channal-list .list-item div {
  margin: 0 auto;
  width: fit-content;
  color: white;
}
.home-next .home-pic img {
  width: 316px;
  height: 170px;
  display: block;
  opacity: 0.7;
}
</style>