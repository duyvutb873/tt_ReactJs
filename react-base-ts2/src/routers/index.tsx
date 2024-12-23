import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homepage'
import LoginPage from '../pages/loginpage'
import PostPage from '../pages/postpage'
import PostDetail from '../pages/postdetail'
import AddPostPage from '../pages/addpostpage'
import SiderComponent from '../components/SiderComponent'
import ProtectedRoute from './ProtectedRoute'

const TodoApp: React.FC = () => <div>asdasdas</div>

function AppRoutes () {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SiderComponent />
            </ProtectedRoute>
          }
        >
          <Route path='Home' element={<HomePage />} />
          <Route path='Todo' element={<TodoApp />} />
          <Route path='Posts' element={<PostPage />} />
          <Route path='/Posts/:postId' element={<PostDetail />} />
          <Route path='/Posts/Add' element={<AddPostPage />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes
