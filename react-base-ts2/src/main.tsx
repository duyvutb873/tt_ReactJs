import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routers/index.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { PostProvider } from './contexts/PostContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <PostProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </PostProvider>
    </Router>
  </StrictMode>
)
