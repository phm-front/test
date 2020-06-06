<template>
  <div id="app">
    <!-- 使用exclud时必须给所派出的组件添加name Detail组件不需要keep alive-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  overflow-y: hidden;
}
@import "assets/css/base.css";
.main-tab-bar {
  z-index: 1;
}
</style>
