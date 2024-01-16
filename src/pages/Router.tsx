import { Route, Routes, useLocation } from 'react-router-dom'
import Navigator from '@components/Common/Navigator'
import Home from './Home'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Personal from './Personal'
import Edit from './Edit'
import Dashboard from './Dashboard'

const Router = () => {
  const { pathname } = useLocation()
  const path = pathname!.split('/')[1]

  return (
    <>
      {path !== 'room' && <Navigator />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/page/:userId" element={<Personal />} />
        <Route path="/page/:userId/edit" element={<Edit />} />
        <Route path="/page/:userId/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default Router
