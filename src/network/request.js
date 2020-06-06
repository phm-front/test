import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/wh',
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    //拦截请求可以设置一些headers里的内容或者做加载的动画
    //登录时必须携带token
    //做完后必须把config返回出去
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  //instance(config)返回promise
  return instance(config)
}
