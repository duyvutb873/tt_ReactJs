// src/components/atoms/Button.tsx
import React from 'react'
import { Button as AntButton } from 'antd'

const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return <AntButton onClick={onClick}>{children}</AntButton>
}

export default Button
