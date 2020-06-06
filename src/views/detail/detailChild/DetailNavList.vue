<template>
  <div class="detail-nav">
    <nav-bar>
      <h3 slot="left" @click="backClick">&lt</h3>
      <div slot="center" class="datail-nav-list">
        <ul>
          <li
            v-for="(item, index) in titles"
            :class="{active: currentIndex === index}"
            @click="titleActive(index)"
          >{{item}}</li>
        </ul>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleActive(index) {
      this.currentIndex = index;
      this.$emit("detailNavClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
/* .datail-nav-list {
  list-style: none;
} */
.datail-nav-list ul li {
  float: left;
  list-style: none;
  padding: 0 12px 0;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
</style>