import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isLoginSelector } from '../store/TokenAtom'

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector)
  const currentLocation = useLocation()

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ redirecredFrom: currentLocation }} />
  )
}

export default ProtectedRoute
