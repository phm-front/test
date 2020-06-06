<template>
  <!-- .wrapper需要设置高度 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bscroll: null
    };
  },
  props: {
    probetypestate: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  mounted() {
    //创建bscroll对象
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //滚动距离
      probeType: this.probetypestate,
      //上拉事件
      pullUpLoad: this.pullUpLoad
    });
    //监听滚动的距离
    this.bscroll.on("scroll", position => {
      //将position传递出去
      this.$emit("bscrollcontent", position);
    });
    //监听上拉事件
    this.bscroll.on("pullingUp", () => {
      // console.log("上拉");

      this.$emit("upLoad");
    });
    // this.bscroll.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //bscroll中scrollTo方法可直接到指定坐标  this.bscroll && bscroll创建完成后执行后面的函数
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
    refresh() {
      this.bscroll.refresh();
      // console.log("--");
    },
    getScrollY() {
      return this.bscroll.y;
    }
  }
};
</script>

<style>
</style>