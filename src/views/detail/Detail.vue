<template>
  <div id="detail">
    <detail-nav-list class="detail-nav" @detailNavClick="detailNavClick" ref="detailNav"></detail-nav-list>
    <better-scroll
      class="detail-wraper"
      ref="scroll"
      @bscrollcontent="bscrollcontent"
      :probetypestate="3"
    >
      <detail-swiper :detail-image="detailImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-merch-info :shop="shop"></detail-merch-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-paramets-info ref="paramets"></detail-paramets-info>
      <detail-comment-info ref="comment"></detail-comment-info>
      <detail-recommend-info ref="recommend"></detail-recommend-info>
    </better-scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavList from "./detailChild/DetailNavList";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBaseInfo from "./detailChild/DetailBaseInfo";
import DetailMerchInfo from "./detailChild/DetailMerchInfo";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
import DetailParametsInfo from "./detailChild/DetailParametsInfo";
import DetailCommentInfo from "./detailChild/DetailCommentInfo";
import DetailRecommendInfo from "./detailChild/DetailRecommendInfo";
import DetailBottomBar from "./detailChild/DetailBottomBar";

import BetterScroll from "components/common/bScroll/BetterScroll";

import { getDetail, Goods, Shop } from "network/detail";

import { debounce } from "@/common/utils";
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.query.id,
      detailImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      offsettopY: [],
      getDetailTop: null,
      currentIndex: 0
    };
  },
  components: {
    DetailNavList,
    DetailSwiper,
    DetailBaseInfo,
    DetailMerchInfo,
    BetterScroll,
    DetailGoodsInfo,
    DetailParametsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  created() {
    //根据id请求数据
    getDetail(this.id).then(res => {
      //获取顶部轮播图数据
      console.log(res);
      this.detailImage = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(res.result.shopInfo);
      //获取商品详情数据
      this.detailInfo = res.result.detailInfo;
      //防抖函数使用
      this.getDetailTop = debounce(() => {
        //每次push前先将数组清空
        this.offsettopY = [];
        this.offsettopY.push(0);
        this.offsettopY.push(this.$refs.paramets.$el.offsetTop);
        this.offsettopY.push(this.$refs.comment.$el.offsetTop);
        this.offsettopY.push(this.$refs.recommend.$el.offsetTop);
        // Number.MAX_VALUE 最大值
        this.offsettopY.push(Number.MAX_VALUE);
        // console.log(this.offsettopY);
      }, 100);
    });
  },
  mounted() {
    // this.paramets = this.$refs.paramets.$el.offsetTop;
    // this.comment = this.$refs.comment.$el.offsetTop;
    // this.recommend = this.$refs.recommend.$el.offsetTop;
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getDetailTop();
    },
    detailNavClick(index) {
      this.$refs.scroll.scrollTo(0, -this.offsettopY[index], 500);
    },
    bscrollcontent(position) {
      const positionY = -position.y;
      // this.offsettopY.length - 1  减一防止this.offsettopY[i + 1]溢出
      for (let i = 0; i < this.offsettopY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.offsettopY[i] &&
          positionY < this.offsettopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      //获取购物车需要展示的商品
      const product = {};
      product.id = this.id;
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.image = this.detailImage[0];
      product.desc = this.detailInfo.desc;
      //添加商品成功toast 要判断商品是否加入成功 要在actions里返回Promise
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res, 500);
      });
    }
  }
};
</script>

<style>
#detail {
  position: relative;
  background-color: #fff;
  height: 100vh;
  z-index: 10;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.detail-wraper {
  /* height: calc(100% - 44px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>