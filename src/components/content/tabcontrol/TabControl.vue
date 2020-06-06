<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in tabcontent"
      class="tab-control-item"
      @click="active(index)"
      :class="{active: currentIndex === index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    tabcontent: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    active(index) {
      // console.log("----");
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>