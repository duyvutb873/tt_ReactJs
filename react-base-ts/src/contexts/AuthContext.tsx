import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  accessToken: string | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken')
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate('/login') // Redirect to login if token is null
    }
  }, [accessToken, navigate])

  const login = (token: string) => {
    localStorage.setItem('accessToken', token)
    setAccessToken(token)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setAccessToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!accessToken,
        login,
        logout,
        accessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
