<template>
  <div class="home-recommend">
    <div class="recommend" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.home-recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  box-shadow: 0 10px rgba(100, 100, 100, 0.1);
}
.recommend {
  flex: 1;
}
.recommend img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>