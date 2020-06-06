<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      imgLoadState: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      //只发送一个请求
      if (!this.imgLoadState) {
        this.$emit("swiperImageLoad");
        this.imgLoadState = true;
      }
    }
  }
};
</script>

<style>
</style>