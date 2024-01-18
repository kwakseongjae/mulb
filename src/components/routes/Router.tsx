import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Navigator from '@components/common/Navigator'
import Home from '@pages/home'
import LoginPage from '@pages/login'
import SignupPage from '@pages/signup'
import UserPage from '@pages/user'
import NewPost from '@pages/posts/new'
import ProtectedRoute from '@components/routes/ProtectedRoute'
// import PostDetail from '@components/feature/PostDetail'

const Router = () => {
  const { pathname } = useLocation()
  const path = pathname!.split('/')[1]

  return (
    <>
      {/* TODO: Protected Router로 로그인 회원만 사용할 수 있는 페이지 구분*/}
      {path !== 'posts' && <Navigator />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<ProtectedRoute />}>
          {/* TODO: /:userId/newpost로 경로를 설정할 수 있도록 로직 수정 */}
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/:userId" element={<UserPage />} />
          {/* <Route path="/:userId/:postnumber" element={<PostDetail />} /> */}
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default Router
