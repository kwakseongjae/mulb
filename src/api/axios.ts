import axios from 'axios'
import { getCookie, removeCookie, setCookie } from '@utils/cookies'

/* INSTANCE WITHOUT TOKEN --------------------------------------------------- */
export const instance = axios.create({
  // VITE + React + TS에서는 proces 대신 import.meta.env를 사용
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/* INSTANCE WITH TOKEN ------------------------------------------------------ */
export const tokenInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/* REQUEST INTERCEPTORS ----------------------------------------------------- */
tokenInstance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const accessToken = getCookie('accessToken')
    config.headers.Authorization = `${accessToken}`
    return config
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  },
)

/* RESPONSE INTERCEPTORS ---------------------------------------------------- */
tokenInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터가 있는 작업 수행 : STATUS CODE 2XX
    return response
  },
  async (error) => {
    // 응답 오류가 있는 작업 수행 : STATUS CODE WITHOUT 2XX
    try {
      // const { message, response, config } = error
      const { response, config } = error
      const originalRequest = config

      // if (message === 'Network Error' || response.data.errorCode === '400') {
      if (response.data.errorCode !== '200') {
        const refreshToken = getCookie('refreshToken')
        /* GET : NEW ACCESSTOKEN ---------------------------------------------------- */
        const response = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_APP_BASE_URL}/auth/refresh`,
          headers: {
            'Content-Type': 'application/json',
            refreshToken: refreshToken,
          },
        })
        /* CHANGE ACCESSTOKEN ------------------------------------------------------- */
        originalRequest.headers.Authorization = response.headers.authorization
        removeCookie('accessToken')
        setCookie('accessToken', response.headers.authorization)
        return axios(originalRequest)
      }
    } catch (error) {
      // 새로운 accessToken 발급에 실패한 경우 쿠키에 있던 기존 토큰을 모두 없애고 redirect
      removeCookie('accessToken')
      removeCookie('refreshToken')
      window.location.href = '/'
      return false
    }
    return Promise.reject(error)
  },
)
