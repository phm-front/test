<template>
  <!-- 判断detailInfo是否为空  v-if="Object.keys(detailInfo).length-->
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods-instruct">
      <p>{{detailInfo.desc}}</p>
    </div>
    <h4>{{detailInfo.detailImage[0].key}}</h4>
    <div class="goods-img">
      <img :src="item" alt @load="imgLoad" v-for="item in detailInfo.detailImage[0].list" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    }
  }
};
</script>

<style>
.goods-instruct {
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.detail-goods-info h4 {
  margin-left: 10px;
}
.goods-img img {
  width: 100%;
}
</style>