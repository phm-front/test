<template>
  <div class="goods-list-item" @click="goodsClick">
    <!-- 监听图片加载 @load -->
    <img v-lazy="goodsItem.show.img" alt @load="picLoad" />
    <div class="details">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.orgPrice}}</span>
      <div class="pentagram">
        <img src="~assets/img/detail/detail_bottom.png" alt />
      </div>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    picLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsClick() {
      this.$router.push({
        path: "/detail",
        query: {
          id: this.goodsItem.iid
        }
      });
    }
  }
};
</script>

<style>
.goods-list-item {
  flex: 49%;
  padding: 3px;
  position: relative;
  font-size: 12px;
  margin-bottom: 33px;
}
.goods-list-item p {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-list-item > img {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.details {
  position: absolute;
  bottom: -31px;
  left: 0;
  right: 0;
  text-align: center;
}
.pentagram {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  overflow: hidden;
}
.pentagram > img {
  width: 100%;
}
.price {
  color: var(--color-high-text);
}
</style>