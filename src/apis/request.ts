import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'
import { KEY_TOKEN } from '@/constants/app-const.ts'
import store from '@/stores'
import { setGlobalState } from '@/stores/global/global.slice.ts'

const defaultHeader = (token?: string | null) => {
  const headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  } as unknown as AxiosRequestHeaders
  if (token) headers.Authorization = `Bearer ${token}`
  return headers
}

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.API_URL,
      headers: defaultHeader(localStorage.getItem(KEY_TOKEN) || null)
    })

    this.instance.interceptors.request.use(
      (config) => {
        store.dispatch(setGlobalState({ loading: true }))
        return config
      },
      (error) => {
        store.dispatch(setGlobalState({ loading: false }))
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        store.dispatch(setGlobalState({ loading: false, message: response.data.message }))
        return response
      },
      (error) => {
        return error
      }
    )
  }

  public get<P>(pathUrl: string, params?: P) {
    return new Promise((resolve, reject) => {
      axios
        .get(pathUrl, { params })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }

  public post<T>(apiUrl: string, data?: T) {
    return new Promise((resolve, reject) => {
      axios
        .post(apiUrl, data)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }

  public put<T>(apiUrl: string, data?: T) {
    return new Promise((resolve, reject) => {
      axios
        .put(apiUrl, data)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }

  public delete<T>(apiUrl: string, data?: T) {
    return new Promise((resolve, reject) => {
      axios
        .delete(apiUrl, { data })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }
}

export const http = new Http()
