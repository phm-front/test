<template>
  <div class="shop-cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{goodsNum}})</div>
    </nav-bar>
    <better-scroll class="cart-wraper">
      <cart-list :cart-list="cartList"></cart-list>
    </better-scroll>
    <cart-set-column></cart-set-column>
  </div>
</template>

<script>
import BetterScroll from "components/common/bScroll/BetterScroll";

import NavBar from "components/common/navbar/NavBar";
import CartList from "./cartChild/CartList";
import CartSetColumn from "./cartChild/CartSetColumn";
//mapGetters要加大括号
import { mapGetters } from "vuex";
export default {
  components: {
    BetterScroll,
    NavBar,
    CartList,
    CartSetColumn
  },
  computed: {
    ...mapGetters(["goodsNum", "cartList"])
  }
};
</script>

<style>
.shop-cart {
  position: relative;
  height: 100vh;
}
.cart-nav {
  position: relative;
  background-color: #ff8e97;
  color: #fff;
  z-index: 10;
}
.cart-wraper {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
</style>