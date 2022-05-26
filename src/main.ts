import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router/index'
import store from './store/index'
import { setupStore } from './store'
// import './service/axios_demo'
// import ElementPlus from 'element-plus'  // 全局引用element-plus
// import 'element-plus/theme-chalk/index.css' // 全局引用组件库样式
// import HQRequest from './service/index'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
// app.use(ElementPlus)
app.mount('#app')

// HQRequest.request({
//   url: '/home/data',
//   method: 'get',
//   params: {
//     type: 'sell',
//     page: 1
//   },
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单个请求拦截成功')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单个响应拦截成功')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// HQRequest.request<DataType>({
//   url: '/home/data',
//   method: 'get',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })

// HQRequest.get<DataType>({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// })
// .then((res) => {
// console.log(res.data)
// console.log(res.returnCode)
// console.log(res.success)
// })
