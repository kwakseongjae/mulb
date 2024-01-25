import axios from 'axios'
import { getCookie, removeCookie, setCookie } from '@utils/cookies'

/* INSTANCE WITHOUT TOKEN --------------------------------------------------- */
export const instance = axios.create({
  // VITE + React + TS에서는 proces 대신 import.meta.env를 사용
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
})

/* INSTANCE WITH TOKEN ------------------------------------------------------ */
export const tokenInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
})

/* REQUEST INTERCEPTORS ----------------------------------------------------- */
tokenInstance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const accessToken = getCookie('accessToken')
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  },
)

async function postRefreshToken() {
  const response = await tokenInstance.post('/auth/refresh', {
    refreshToken: getCookie('refreshToken'),
  })
  return response
}

/* RESPONSE INTERCEPTORS ---------------------------------------------------- */
tokenInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터가 있는 작업 수행 : STATUS CODE 2XX
    return response
  },
  async (error) => {
    console.log(error)
    // 응답 오류가 있는 작업 수행 : STATUS CODE WITHOUT 2XX
    try {
      // const { message, response, config } = error
      const { message, config } = error
      const originalRequest = config
      // if (message === 'Network Error' || response.data.errorCode === '400') {
      if (message === 'Network Error') {
        /* GET : NEW ACCESSTOKEN ---------------------------------------------------- */
        const response = await postRefreshToken()
        /* CHANGE ACCESSTOKEN ------------------------------------------------------- */
        originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`
        removeCookie('accessToken')
        setCookie('accessToken', response.data.data)
        return axios(originalRequest)
      }
    } catch (error) {
      // 새로운 accessToken 발급에 실패한 경우 쿠키에 있던 기존 토큰을 모두 없애고 redirect
      // console.log(error)
      // removeCookie('accessToken')
      // removeCookie('refreshToken')
      // window.location.href = '/'
      return false
    }
    return Promise.reject(error)
  },
)
