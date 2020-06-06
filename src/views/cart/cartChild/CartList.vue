<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :list-item="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

// import mapGetters from "vuex";
export default {
  components: {
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>