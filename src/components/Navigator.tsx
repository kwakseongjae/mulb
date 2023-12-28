// import styled from 'styled-components'
import { Link } from 'react-router-dom'

const navigationStyle = {
  width: '100%',
  height: '5rem',
  padding: '0 3rem 0 3rem',
}

const Navigator = () => {
  // const { pathname } = useLocation()
  return (
    <>
      <div
        className="flex justify-between items-center fixed z-20 bg-white _border-b-color-0"
        style={navigationStyle}>
        <div className="h-full w-fit flex items-center gap-8 _heading-6 _text-color-normal">
          <Link href="" className="_border-b-active h-20 pt-6 px-4">
            인기 포스트
          </Link>
          <Link href="" className="_border-b-unactive h-20 pt-6 px-4">
            헤드라인
          </Link>
          <Link href="" className="_border-b-unactive h-20 pt-6 px-2">
            공지사항
          </Link>
          <h1 className="_heading-4 _text-color-2 _bg-color-1 px-6 pt-3 pb-2 rounded-2xl tracking-widest">
            MULTI-BLOGGING v0.00.01
          </h1>
        </div>
        <div className="flex gap-6 items-center _text-color-3 _heading-6">
          <Link href="src/pages/LogIn.tsx" className="px-8 pt-3 pb-2">
            로그인
          </Link>
          <Link
            href="src/pages/SignIn.tsx"
            className="rounded-2xl border px-8 pt-3 pb-2">
            회원가입
          </Link>
        </div>
      </div>
      <div style={navigationStyle} />
    </>
  )
}

export default Navigator
