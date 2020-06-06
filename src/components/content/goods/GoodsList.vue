<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  /* column-count: 2;
  column-gap: 5px;
  margin: 5px; */
}
</style>