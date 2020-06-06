<template>
  <!-- 监听按钮点击 -->
  <div class="tab-bar-item" @click="itemclick">
    <!-- 插槽用div包裹 防止被覆盖 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-avtive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: String
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    // 动态决定isActive
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-bottom: 2px;
  margin-top: 3px;
}
/* .active {
  color: red;
} */
</style>