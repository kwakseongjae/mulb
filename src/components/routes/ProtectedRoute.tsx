import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { TokenAtom } from '../store/TokenAtom'

const ProtectedRoute = () => {
  const [token, setToken] = useRecoilState(TokenAtom)
  const currentLocation = useLocation()
  console.log(token)
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ redirecredFrom: currentLocation }} />
  )
}

export default ProtectedRoute
