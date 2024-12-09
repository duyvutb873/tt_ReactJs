import { Outlet, Navigate } from 'react-router-dom'

import Login from './Login'

const useAuth = () => {
  const user = { loggedIn: false }
  return user && user.loggedIn
}
const ProtectedRoute = () => {
  console.log('in protected')

  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute