import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HQRequestInterceptors, HQRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { nextTick } from 'vue'

const DEFAULT_LOADING = true

class HQRequest {
  instance: AxiosInstance
  interceptors?: HQRequestInterceptors
  // hqLoading: any //使用定义全局变量进行暂停加载动画
  serviceLoading: boolean
  constructor(config: HQRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.serviceLoading = config.serviceLoading ?? DEFAULT_LOADING

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.serviceLoading) {
          const hqLoading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
          nextTick(() => {
            hqLoading.close()
          }) // 使用nextTick在dom更新时关闭加载动画
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // setTimeout(() => {
        //   this.hqLoading?.close()
        // }, 2000) //使用定义全局变量进行暂停加载动画
        if (res.data.returnCode === '-1001') {
          console.log('响应成功，但无信息返回')
        } else {
          return res.data
        }
      },
      (err) => {
        // setTimeout(() => {
        //   this.hqLoading?.close()
        // }, 2000) //使用定义全局变量进行暂停加载动画
        // 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404~')
        }
        return err
      }
    )
  }

  request<T>(config: HQRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.serviceLoading === false) {
        this.serviceLoading = config.serviceLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.serviceLoading = DEFAULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.serviceLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  put<T>(config: HQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default HQRequest
