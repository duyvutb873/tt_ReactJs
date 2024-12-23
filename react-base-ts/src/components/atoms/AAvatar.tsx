// src/components/atoms/Avatar.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, List } from 'antd'

interface IAvatar {
  src: string,
  id: number,
  title: string
}

const AAvatar = ({ src, id, title }: IAvatar) => {
  return (
    <List.Item.Meta
      avatar={<Avatar src={src} />}
      title={<Link to={`/Posts/${id}`}>{title}</Link>}
      description={`Post ID: ${id}`}
    />
  )
}

export default AAvatar
