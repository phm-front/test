<template>
  <div class="detail-swiper">
    <swiper class="swoperHeight">
      <swiper-item v-for="(item,index) in detailImage" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    detailImage: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.swoperHeight {
  height: 300px;
  overflow: hidden;
}
</style>