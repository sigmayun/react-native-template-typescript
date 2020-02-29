import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import cleanDeep from 'clean-deep'

const handleRequestConfig = (config: AxiosRequestConfig) => {
  // 在发送请求之前做些什么
  const Config = cleanDeep(config, {
    emptyArrays: false,
    emptyObjects: false,
  })
  if (Config.method === 'get') {
    Config.paramsSerializer = params =>
      qs.stringify(params, {
        arrayFormat: 'repeat',
      })
  }
  return Config
}

const handleResponseSuccess = response => {
  // 对响应数据做点什么
  return response.data
}

const handleResponseFail = error => {
  // 对响应错误做点什么
  return Promise.reject(error)
}

class Api {
  instance: AxiosInstance
  constructor(baseConfig?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      ...baseConfig,
    })
    // 请求拦截器
    this.instance.interceptors.request.use(handleRequestConfig, error => Promise.reject(error))
    // 响应拦截器
    this.instance.interceptors.response.use(handleResponseSuccess, handleResponseFail)
  }
}

export const api: AxiosInstance = new Api().instance

export default Api
