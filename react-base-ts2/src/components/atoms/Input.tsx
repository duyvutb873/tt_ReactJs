// src/components/atoms/Input.tsx
import React from 'react'
import { Input as AntInput } from 'antd'

const Input = ({ ...props }: { [key: string]: any }) => {
  return <AntInput {...props} />
}

export default Input
