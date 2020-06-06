<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
    <tab-control
      :tabcontent="['流行','新款','精选']"
      class="tab-control1"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="tabControlState"
    ></tab-control>
    <better-scroll
      class="btscroll"
      ref="scroll"
      :probetypestate="3"
      @bscrollcontent="bscrollcontent"
      @upLoad="upLoad"
      :pull-up-load="true"
    >
      <home-swiper :banners="banners" class="home-swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view class="feature-view"></feature-view>
      <tab-control
        :tabcontent="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </better-scroll>
    <!-- 动态决定隐藏与显示 v-show  对组件进行点击监听 要加.native-->
    <back-top @click.native="backTopClick" v-show="backcontent"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import BetterScroll from "components/common/bScroll/BetterScroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";
import { debounce } from "@/common/utils";
export default {
  components: {
    NavBar,
    BetterScroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      backcontent: false,
      offsetTop: 0,
      tabControlState: false,
      saveY: 0
    };
  },
  activated() {
    // console.log("huoyue");
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // console.log(this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log("leave", this.saveY);
  },
  //创建首页时请求数据
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听item图片加载完成 使用refresh()重新计算可滚动距离   在created()中可能拿不到this.$refs.scroll
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    //事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      //让两个tabcontrol的选中样式一致
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    bscrollcontent(position) {
      // 判断距离 改变backcontent的值 决定backtop的显示隐藏
      this.backcontent = -position.y > 1000;
      //tabcontrol的显示与隐藏  吸顶效果
      this.tabControlState = -position.y > this.offsetTop;
    },
    //上拉加载数据
    upLoad() {
      this.getHomeGoods(this.currentType);
      // 解决无法上拉问题  重新计算可滚动距离
      // this.$refs.scroll.bscroll.refresh();
    },
    //获取tab-Control的offsetTop值   要等图片加载玩获取 值才会准确
    //组件不能使用offsetTop  用$el.offsetTop获取
    swiperImageLoad() {
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(this.offsetTop);
    },

    // 网络请求相关  封装成函数方便调用
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //动态获取page
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多 以便下次加载可以进行
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style>
#home {
  width: 100%;
  padding-bottom: 44px;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}
.home-nav {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 100;
}
.btscroll {
  /* 设置滑动区域 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .home-swiper {
  margin-top: 44px;
} */
.feature-view {
  margin-top: 10px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
/* .tab-control1 {
  dis
} */
</style>