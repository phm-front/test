<template>
  <div class="detail-merch-info">
    <div class="shop-title">
      <img :src="shop.logo" alt />
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="shop-sell">
        <h4>{{(shop.sells / 10000).toFixed(1)}}万</h4>
        <p>总销量</p>
      </div>
      <div class="shop-content">
        <h4>{{shop.goodsCount}}</h4>
        <p>全部宝贝</p>
      </div>
      <div class="shop-score">
        <ul>
          <li v-for="item in shop.score">
            <span>{{item.name}}</span>
            <span :class="{shopEvalua: item.isBetter}">{{item.score.toFixed(2)}}</span>
            <span :class="{shopEvalua: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="join-shop">
      <h4>进店逛逛</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.detail-merch-info {
  margin-top: 20px;
  padding-bottom: 25px;
}
.shop-title img {
  width: 40px;
  height: 40px;
  margin-left: 5px;
  vertical-align: middle;
}
.shop-title span {
  margin-left: 5px;
  color: rgb(107, 104, 104);
}
.shop-detail {
  display: flex;
  margin-top: 20px;
  text-align: center;
}
.shop-sell,
.shop-content {
  flex: 1;
  margin-top: 10px;
}
.shop-content {
  border-right: 1px solid #ccc;
}
.shop-sell p,
.shop-content p {
  font-size: 12px;
  margin-top: 5px;
}
.shop-score {
  flex: 2;
  font-size: 12px;
}
.shop-score ul {
  list-style: none;
}
.shop-score ul li {
  margin-top: 5px;
}
.shop-score ul li span {
  margin-left: 15px;
}
.shop-score ul li span:nth-child(n + 2) {
  color: #66b426;
}
.shopEvalua {
  color: #ffb3c0 !important;
}
.join-shop {
  width: 110px;
  background-color: #f2f5fc;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin: 20px 0 0 105px;
  border-radius: 10px;
}
</style>