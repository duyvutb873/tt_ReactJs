// src/components/atoms/Checkbox.tsx
import React from 'react'
import { Checkbox as AntCheckbox } from 'antd'

const Checkbox = ({ children }: { children: React.ReactNode }) => {
  return <AntCheckbox>{children}</AntCheckbox>
}

export default Checkbox
