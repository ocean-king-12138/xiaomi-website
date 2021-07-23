<template>
  <div class="footer">
    <div class="inside-box">
      <ul class="box-list">
        <li v-for="item in boxList" :key="item" class="item-box">
          <div class="inside">
            <div class="iconfont" :class="item.class"></div>
            <div class="text">{{ item.text }}</div>
          </div>
        </li>
      </ul>
      <ul class="next">
        <li v-for="items in listBottom" :key="items">
          <ul class="next-item">
            <li v-for="item in items" :key="item">{{ item }}</li>
          </ul>
        </li>

        <li>
          <div class="last-item">
            <div class="phone">400-100-567</div>
            <p>8:00-18:00（仅收市话费）</p>
            <a href=""><em class="iconfont icon-xiaoxi"></em>人工客服</a>
            <div class="last">
              <p>关注小米：</p>
              <a
                href="https://weibo.com/xiaomishangcheng"
                target="_blank"
                class="wb"
              ></a>
              <a href="javascript:void(0);" id="J_followWx" class="wx"></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="site">
    <div class="inside-box">
      <div class="logo"></div>
      <div class="info-text">
        <p class="sites">
          <a rel="nofollow" href="//www.mi.com/index.html" target="_blank"
            >小米商城</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="//www.miui.com/" target="_blank">MIUI</a>
          <span class="sep">|</span>
          <a rel="nofollow" href="//home.mi.com/index.html" target="_blank"
            >米家</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="http://www.miliao.com/" target="_blank"
            >米聊</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="//www.duokan.com/" target="_blank">多看</a>
          <span class="sep">|</span>
          <a rel="nofollow" href="//game.xiaomi.com/" target="_blank">游戏</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//b.mi.com/?client_id=180100031058&amp;masid=17409.0358"
            target="_blank"
            >政企服务</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="//xiaomi.tmall.com/" target="_blank"
            >小米天猫店</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="//privacy.mi.com/all/zh_CN/" target="_blank"
            >小米集团隐私政策</a
          >
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f516fe9e2c01.html"
            target="_blank"
            >小米公司儿童信息保护规则</a
          >
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html"
            target="_blank"
            >小米商城隐私政策</a
          >
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//www.mi.com/about/user-agreement/"
            target="_blank"
            >小米商城用户协议</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="//static.mi.com/feedback/" target="_blank"
            >问题反馈</a
          >
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="javascript:void(0);"
            class="J_siteGlobalRegion"
            >Select Location</a
          >
        </p>
        <p class="sites">
          <a rel="nofollow" href="http://www.mi.com/beihu" target="_blank"
            >北京互联网法院法律服务工作站</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="http://www.cca.org.cn/" target="_blank"
            >中国消费者协会</a
          >
          <span class="sep">|</span>
          <a rel="nofollow" href="http://www.bj315.org/" target="_blank"
            >北京市消费者协会</a
          >
        </p>
        <p>
          ©
          <a href="javascript:;" target="_blank" title="mi.com">mi.com</a>
          京ICP证110507号
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow"
            >京ICP备10046444号</a
          >
          <a
            rel="nofollow"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
            target="_blank"
            >京公网安备11010802020134号</a
          >
          <a href="//www.mi.com/culture-license/" target="_blank"
            >京网文[2020]0276-042号</a
          >
          <br />
          <a href="//www.mi.com/medical/record/" target="_blank"
            >（京）网械平台备字（2018）第00005号</a
          >
          <a href="//www.mi.com/medical/qualification/" target="_blank"
            >互联网药品信息服务资格证 (京)-非经营性-2014-0090</a
          >
          <a href="//www.mi.com/business-license/" target="_blank">营业执照</a>
          <a href="//www.mi.com/medical/list/" target="_blank"
            >医疗器械质量公告</a
          >
          <br />
          <a
            href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e0c7d4cf3b7cd88de10196e30c92e020.png"
            target="_blank"
            >增值电信业务许可证</a
          >&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
          <a
            href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6859168166651511897f54fa1047fe3.png"
            target="_blank"
            >食品经营许可证</a
          >
          <br />
          违法和不良信息举报电话：171-5104-4404&nbsp;<a
            href="https://www.mi.com/intellectual"
            target="_blank"
            >知识产权侵权投诉</a
          >&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
    </div>
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
    const listBottom = [
      ["帮助中心", "账户管理", "购物指南", "订单操作"],
      ["服务支持", "售后政策", "自助服务", "相关下载"],
      ["线下门店", "小米之家", "服务网点", "授权体验店"],
      [
        "关于小米",
        "了解小米",
        "加入小米",
        "投资这关系",
        "投资者关系",
        "企业社会责任",
        "廉洁举报",
      ],
      ["关注我们", "新浪微博", "官方微信", "联系我们", "公益基金会"],
      ["特色服务", "F码通道", "礼物码", "防伪查询"],
    ];
    return {
      boxList,
      listBottom,
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
  font-size: 24px;

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
  border-bottom: 1px solid #e0e0e0;
}
.box-list > li {
  width: 234px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-list .inside {
  padding-left: 24px;
  border-left: 1px solid #e0e0e0;
}
.box-list > li:first-child .inside {
  border-left: none;
}
.box-list > li:hover {
  color: tomato;
}
.box-list div {
  display: inline-block;
}
.box-list .iconfont {
  margin-right: 5px;
}
.box-list .text {
  font-size: 20px;
}
.next {
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.next .next-item > li:first-child {
  margin: -1px 0 26px;
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
}
.next .next-item > li {
  color: #757575;
  transition: all 0.5s ease;
}

.last-item {
  width: 252px;
  height: 111px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 50px;
  border-left: 1px solid #e0e0e0;
}
.last-item .phone {
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
}
.last-item p {
  font-size: 12px;
}
.last-item > a {
  display: block;
  width: 120px;
  height: 30px;
  border: 1px solid #ff6700;
  transition: all 0.5s ease;
  color: #ff6700;
  text-align: center;
}
.last-item > a:hover {
  border: 1px solid #fff;
  color: #fff;
  background-color: #ff6700;
}
.last p {
  display: inline-block;
  vertical-align: middle;
}
.last a {
  display: inline-block;
  width: 20px;
  height: 20px;

  vertical-align: middle;
}
.wb {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wb.png)
    50% 0 no-repeat;
  background-size: cover;
}
.wx {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx.png)
    50% 0 no-repeat;
  background-size: cover;
}
@font-face {
  font-family: "iconfont"; /* Project id 2665813 */
  src: url("//at.alicdn.com/t/font_2665813_4o2s96yucj5.woff2?t=1627002189030")
      format("woff2"),
    url("//at.alicdn.com/t/font_2665813_4o2s96yucj5.woff?t=1627002189030")
      format("woff"),
    url("//at.alicdn.com/t/font_2665813_4o2s96yucj5.ttf?t=1627002189030")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xiaoxi:before {
  content: "\e61b";
}
.site {
  position: relative;
}
.site .logo {
  width: 56px;
  height: 56px;
  background: url(//s02.mifile.cn/assets/static/image/logo-mi2.png) no-repeat;
  background-size: 56px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
.site .info-text {
  display: inline-block;
  padding-left: 56px;
}
</style>
