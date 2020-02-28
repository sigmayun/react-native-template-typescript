import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import cleanDeep from 'clean-deep'

const handleRequestConfig = (config: AxiosRequestConfig) => {
  config.headers = cleanDeep(config.headers)
  config.params = cleanDeep(config.params)
  config.data = cleanDeep(config.data)
  if (config.method === 'get') {
    config.paramsSerializer = params =>
      qs.stringify(params, {
        arrayFormat: 'repeat',
      })
  }
  return config
}

class Api {
  instance: AxiosInstance
  constructor(baseConfig?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      ...baseConfig,
    })

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      config => handleRequestConfig(config),
      error => Promise.reject(error)
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response.data
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
}

export const api: AxiosInstance = new Api().instance

export default Api
