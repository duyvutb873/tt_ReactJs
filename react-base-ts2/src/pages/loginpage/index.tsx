import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CenterContent from '../../components/templates/CenterContent'
import LoginForm from '../../components/templates/LoginForm'
import { useAuth } from '../../contexts/AuthContext'

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/Home')
    }
  }, [isAuthenticated, navigate])

  return (
    <CenterContent>
      <LoginForm />
    </CenterContent>
  )
}

export default LoginPage
