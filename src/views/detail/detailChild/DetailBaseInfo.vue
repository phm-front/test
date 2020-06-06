<template>
  <div class="detail-base-info">
    <div class="detailTitle">
      <p>{{goods.title}}</p>
    </div>
    <div class="detailPrice">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span
        class="discount"
        v-if="goods.discount !== undefined && goods.discount.length !== 0"
      >{{goods.discount}}</span>
      <!-- goods.discount !== undefined && goods.discount.length !== 0 解决当goods.discount还显示的bug -->
    </div>
    <div class="goodsInfo">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.detailTitle {
  padding: 10px 5px 10px;
  text-indent: 1em;
}
.detailPrice {
  margin-bottom: 17px;
}
.newPrice {
  color: var(--color-high-text);
  font-size: 24px;
}
.oldPrice {
  color: #ccc;
  text-decoration: line-through;
  tab-size: 12px;
}
.discount {
  display: inline-block;
  background-color: deeppink;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  padding: 0 5px 0;
  border-radius: 10px;
  color: #fff;
}
.goodsInfo {
  display: flex;
  font-size: 14px;
  color: #aaa;
}
.goodsInfo span {
  flex: 1;
  padding: 5px;
}
.goodsInfo span:nth-child(2) {
  text-align: center;
}
.goodsInfo span:nth-child(3) {
  text-align: right;
}
</style>