import { TokenAtom } from '../../store/TokenAtom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

function GoogleRedirect() {
  // const code = new URL(window.location.href).searchParams.get('code')
  const accessToken = new URL(window.location.href).searchParams.get(
    'accessToken',
  )
  const refreshToken = new URL(window.location.href).searchParams.get(
    'refreshToken',
  )
  const [cookie, setCookie] = useCookies()
  const setTokenState = useSetRecoilState(TokenAtom)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.redirectedFrom?.pathname || '/'

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    if (accessToken) {
      setCookie('accessToken', accessToken)
      setCookie('refreshToken', refreshToken)
      setTokenState(true)

      navigate(from)
    }
  }, [])

  return <Navigate replace to="/" />
}

export default GoogleRedirect
