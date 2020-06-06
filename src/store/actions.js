export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduce = context.state.cartList.find(item => item.id === payload.id);
      if (oldProduce) {
        context.commit('addCount', oldProduce);
        resolve('商品数量加1');
      } else {
        context.commit('addToCart', payload);
        resolve('添加商品成功');
      }
    })
  }
}