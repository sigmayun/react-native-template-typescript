import qs from 'qs'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// 递归删除参数值为 null 或 undefined 的参数
const filterParams = obj => {
  if (obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        filterParams(obj[key]) // 递归遍历
      }

      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key]
      }
    })
  }
  return obj
}

const handleRequestConfig = (config: AxiosRequestConfig) => {
  filterParams(config.params)
  filterParams(config.data)
  filterParams(config.headers)
  if (config.method === 'get') {
    config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' })
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
        !__DEV__ && console.log('[api]', error.message)
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
}

export const api: AxiosInstance = new Api().instance

export default Api
