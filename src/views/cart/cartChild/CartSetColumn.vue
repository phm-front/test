<template>
  <div class="cart-set-column">
    <div class="all-select">
      <img
        src="~assets/img/cart/tick.svg"
        alt
        :class="{allSelectActive : selectAllButton}"
        @click="selectAll"
      />
      <span>全选</span>
    </div>
    <div class="total">合计:￥{{totalPrice}}</div>
    <div class="calculate" @click="totalClick">去计算({{totalNum}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    selectAll() {
      if (this.selectAllButton) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    totalClick() {
      if (this.totalNum == 0) {
        this.$toast.show("请选择购买商品", 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => item.checked === true)
        .reduce((preValue, item) => preValue + parseFloat(item.price), 0)
        .toFixed(2);
    },
    totalNum() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    selectAllButton() {
      if (this.cartList.length === 0) return false;
      return (
        // 也可使用find()
        this.cartList.filter(item => item.checked).length ===
        this.cartList.length
      );
    }
  }
};
</script>

<style>
.cart-set-column {
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
}
.all-select {
  width: 90px;
  /* background-color: pink; */
  line-height: 40px;
}
.all-select img {
  border-radius: 50%;
  border: 1px solid #ccc;
  vertical-align: middle;
  margin-right: 5px;
}
.total {
  flex: 1;
}
.calculate {
  width: 100px;
  background-color: red;
  color: #fff;
}
.allSelectActive {
  background-color: red;
  border-color: red !important;
}
</style>