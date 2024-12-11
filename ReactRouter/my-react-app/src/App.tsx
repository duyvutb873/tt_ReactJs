import React from 'react'
import { Routes, Route, Navigate, Outlet, useRoutes } from 'react-router-dom'

import './App.css'
import Header from './Component/week5/Header'
import Posts from './Pages/Posts'
import PostDetail from './Pages/PostDetail'
import Admin from './Pages/Admin'
import AddUser from './Pages/AddUser'
import FindUser from './Pages/FindUser'

function App () {

  const Home = () => {
    return <div>Home</div>
  }
  const AboutUs = () => {
    return <div>About Us</div>
  }
  const Services = () => {
    return <div>Services</div>
  }
  const useAuth = () => {
    const user = { loggedIn: false }
    return user && user.loggedIn
  }
  const ProtectedRoute = () => {
    console.log('in protected')

    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/login' />
  }
  const NotFound: React.FC = () => <h1>404 - Trang không tồn tại!</h1>;

  const Login = () => <h2>Login Page</h2>
  return (
    <div className='container'>
      <div className='App'>
        <Header />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/aboutus' element={<AboutUs />} />
            </Route>

            <Route path='/posts' element={<Posts />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />}>
              <Route element={<ProtectedRoute />}>
                <Route path='/admin/adduser' element={<AddUser />} />
                <Route path='/admin/finduser' element={<FindUser />} />
              </Route>
            </Route>
            <Route path='/post/:id' element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
