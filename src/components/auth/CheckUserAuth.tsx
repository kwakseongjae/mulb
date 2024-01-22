import { setCookie, getCookie } from '@utils/cookies'
import { useEffect } from 'react'
import { tokenInstance } from '@api/axios'
import { useRecoilState } from 'recoil'
import { TokenAtom } from '../../store/TokenAtom'
import { Navigate, Outlet } from 'react-router-dom'

const REFRESH_URL = '/auth/refresh'

export const CheckUserAuth = () => {
  const refreshToken = getCookie('refreshToken')
  const [tokenState, setTokenState] = useRecoilState(TokenAtom)

  useEffect(() => {
    async function checkUser() {
      try {
        const response = await tokenInstance.post(
          REFRESH_URL,
          JSON.stringify({ refreshToken }),
          {
            withCredentials: true,
          },
        )
        if (response.data) {
          const { accessToken, refreshToken } = response.data.data
          setCookie('accessToken', accessToken)
          setCookie('refreshToken', refreshToken)
          setTokenState(true)
        }
      } catch (error: any) {
        setTokenState(false)
      }
    }
    refreshToken ? checkUser() : null
  }, [])

  return <>{refreshToken ? <Navigate replace to="/" /> : <Outlet />}</>
}
