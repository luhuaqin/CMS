import axios from 'axios'

//http://152.136.185.210:7878/api/hy66
// axios.request({
//   method: 'GET',
//   url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
// })

// axios.get('http://152.136.185.210:7878/api/hy66/home/multidata').then((res) => {
//   console.log(res)
// })

// axios
//   .get('http://152.136.185.210:7878/api/hy66/home/data', {
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'lu',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org/'
axios.defaults.timeout = 10000

axios
  .post('post', {
    data: {
      name: 'lu',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .get('get', {
    params: {
      name: 'lu',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// axios.all  多个请求，一起返回
axios
  .all([
    axios.get('get', { params: { name: 'lu', age: 18 } }),
    axios.post('post', { data: { name: 'lu', age: 18 } })
  ])
  .then((res) => {
    console.log(res)
  })

// axios拦截器
/**
 * 1、请求拦截
 * fn1: 请求发送成功执行的函数，一般加载动画及token都在此处添加
 * fn2: 请求发送失败执行的函数
 */
axios.interceptors.request.use(
  (config) => {
    console.log('请求发送成功')
    return config
  },
  (err) => {
    console.log('请求发送失败')
    return err
  }
)
/**
 * 1、响应拦截
 * fn1: 响应成功执行的函数，2x
 * fn2: 响应失败执行的函数，4x 5x
 */
axios.interceptors.response.use(
  (res) => {
    console.log('服务器响应成功')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
