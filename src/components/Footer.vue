<template>
  <div class="footer">
    <div class="inside-box">
      <ul class="box-list">
        <li v-for="item in boxList" :key="item" class="item-box">
          <div class="iconfont" :class="item.class"></div>
          <div class="text">{{ item.text }}</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="site">
    <div class="inside-box"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const boxList = [
      { class: "icon-build", text: "预约维修服务" },
      { class: "icon-7tiantuihuo", text: "7天无理由退货" },
      { class: "icon-15tianbaohuan", text: "15天免费换货" },
      { class: "icon-liwu", text: "满69包邮" },
      { class: "icon-location", text: "520余家售后网点" },
    ];
    return {
      boxList,
    };
  },
});
</script>
<style scoped>
.footer {
  background-color: #fff;
  height: 332px;
}
.site {
  background-color: #fafafa;
  height: 266px;
}
.inside-box {
  width: 1226px;
  margin: 0 auto;
}
@font-face {
  font-family: "iconfont"; /* Project id 2571728 */
  src: url("//at.alicdn.com/t/font_2571728_kh07xt0g6dt.woff2?t=1626849396481")
      format("woff2"),
    url("//at.alicdn.com/t/font_2571728_kh07xt0g6dt.woff?t=1626849396481")
      format("woff"),
    url("//at.alicdn.com/t/font_2571728_kh07xt0g6dt.ttf?t=1626849396481")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-build:before {
  content: "\e662";
}

.icon-7tiantuihuo:before {
  content: "\e66c";
}

.icon-15tianbaohuan:before {
  content: "\e66d";
}

.icon-liwu:before {
  content: "\e600";
}

.icon-location:before {
  content: "\ebeb";
}
.box-list {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.box-list > li {
  width: 234px;
  height: 75px;
}
.box-list div {
  display: inline-block;
}
</style>
