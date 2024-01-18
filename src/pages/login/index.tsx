import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { TokenAtom, isLoginSelector } from '../../components/store/TokenAtom'
import { tokenInstance } from '@api/axios'
import { setCookie } from '@utils/cookies'
import '@styles/Login.css'

const LOGIN_URL = '/auth/login'

function LoginPage() {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [token, setToken] = useRecoilState(TokenAtom)
  const isLogin = useRecoilValue(isLoginSelector)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.redirectedFrom?.pathname || '/'

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await tokenInstance.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          withCredentials: true,
        },
      )

      if (response.data) {
        const { accessToken, refreshToken } = response.data.data
        setCookie('accessToken', accessToken)
        setCookie('refreshToken', refreshToken)
        // console.log(accessToken, refreshToken)
        setToken(refreshToken)
        console.log(token)
        navigate(from)
      }
    } catch (error: any) {
      console.error(error?.code)
      navigate('/login')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'email') {
      setEmail(value)

      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (!value?.match(validRegex)) {
        setError('이메일 형식이 올바르지 않습니다.')
      } else {
        setError('')
      }
    }

    if (name === 'password') {
      setPassword(value)

      if (value?.length < 4) {
        setError('비밀번호는 4자리 이상 입력해주세요')
      } else {
        setError('')
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="form form--lg">
      <h1 className="form__title">로그인</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={onChange}
          value={email}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
          value={password}
        />
      </div>
      <div className="form__block">
        계정이 없으신가요?
        <Link to="/signup" className="form__link">
          회원가입하기
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="로그인"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
      <button>구글 로그인 🚀</button>
    </form>
  )
}

export default LoginPage
