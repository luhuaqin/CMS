import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface HQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HQRequestInterceptors<T>
  serviceLoading?: boolean
}
