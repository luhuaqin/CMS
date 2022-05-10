// 根据process.env.NODE_ENV区分
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 1000

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://152.136.185.210:7878/api/hy66/'
// } else if (process.env.NODE_ENV === '生产环境：production') {
//   BASE_URL = 'hhttp://152.136.185.210:7878/api/hy66/'
// } else {
//   BASE_URL = 'http://152.136.185.210:7878/api/hy66/'
// }

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === '生产环境：production') {
  BASE_URL = 'http://123.207.32.32:8000'
} else {
  BASE_URL = 'http://123.207.32.32:8000'
}

export { TIME_OUT, BASE_URL }
