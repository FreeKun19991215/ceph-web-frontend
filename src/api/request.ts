import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

// 定义接口返回数据的类型（根据后端实际返回结构调整）
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
  [key: string]: any
}

class Request {
  private instance: AxiosInstance

  constructor(options: AxiosRequestConfig = {}) {
    this.instance = axios.create(options)

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        // 在这里可以添加全局响应处理
        const { data } = response
        if (data.code !== 200) {
          // 可以根据不同的code做不同的处理
          return Promise.reject(new Error(data.message || 'Error'))
        }
        return {
            ...response,
            data: data.data // 只返回实际的数据部分
        }
      },
      (error) => {
        // 处理HTTP错误状态码
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // 处理未授权
              break
            case 403:
              // 处理禁止访问
              break
            case 404:
              // 处理资源不存在
              break
            case 500:
              // 处理服务器错误
              break
          }
        }
        return Promise.reject(error)
      }
    )
  }

  // 封装请求方法
  public request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config)
  }

  public patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}

// 创建默认请求实例
const defaultOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/ceph-web',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const http = new Request(defaultOptions)

export default http