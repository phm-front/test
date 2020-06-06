<template>
  <div class="cart-list-item" v-if="Object.keys(listItem).length !== 0">
    <div class="cart-check" @click="checkedClick">
      <img src="~assets/img/cart/tick.svg" alt :class="{imgActive: listItem.checked}" />
    </div>
    <div class="cart-img">
      <img :src="listItem.image" alt />
    </div>
    <div class="cart-message">
      <h4>{{listItem.title}}</h4>
      <p>{{listItem.desc}}</p>
      <span class="price-left">￥{{listItem.price}}</span>
      <span class="count-right">x{{listItem.count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedClick() {
      this.listItem.checked = !this.listItem.checked;
    }
  }
};
</script>

<style>
.cart-list-item {
  width: 100%;
  height: 120px;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
}
.cart-check {
  width: 10%;
  float: left;
}
.cart-check .imgActive {
  background-color: red;
  border-color: red;
}
.cart-check img {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 42px 7px;
}
.cart-img {
  width: 20%;
  float: left;
  margin-right: 10px;
}
.cart-img img {
  width: 100%;
  border-radius: 7px;
}
.cart-message {
  width: 66%;
  float: left;
}
.cart-message h4,
.cart-message p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 18px;
}
.price-left {
  color: #fd8a58;
  margin-left: 5px;
}
.count-right {
  float: right;
  margin-right: 10px;
}
</style>