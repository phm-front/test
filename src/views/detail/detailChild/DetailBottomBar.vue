<template>
  <div class="detail-bottom-bar">
    <div class="detai-bottom-left">
      <div>
        <div class="icon"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="icon"></div>
        <p>店铺</p>
      </div>
      <div>
        <div class="icon"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="detai-bottom-right">
      <div class="add-shop-car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style>
.detail-bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 49px;
  text-align: center;
}
.detail-bottom-bar > div {
  flex: 1;
}
.detai-bottom-left {
  display: flex;
}
.detai-bottom-left > div {
  flex: 1;
}
.detai-bottom-left > div:nth-child(1) .icon {
  background: url(../../../assets/img/detail/detail_bottom.png) 0 -53px;
  background-size: 22px;
}
.detai-bottom-left > div:nth-child(2) .icon {
  background: url(../../../assets/img/detail/detail_bottom.png) 0 -99px;
  background-size: 22px;
}
.detai-bottom-left > div:nth-child(3) .icon {
  background: url(../../../assets/img/detail/detail_bottom.png) 0 0;
  background-size: 22px;
}
.detai-bottom-left .icon {
  width: 22px;
  height: 22px;
  margin: 6px 0 3px 16px;
}
.detai-bottom-right {
  display: flex;
  line-height: 49px;
}
.detai-bottom-right > div {
  flex: 1;
}
.add-shop-car {
  background-color: #fbdb0f;
}
.buy {
  background-color: #fb7599;
  color: #fff;
}
</style>