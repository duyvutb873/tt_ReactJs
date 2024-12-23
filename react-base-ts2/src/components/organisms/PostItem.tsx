import React from 'react'
import { Avatar, List, Typography } from 'antd'
import { Link } from 'react-router-dom'

const PostItem = ({ post }: { post: any }) => {
  return (
    <List.Item key={post.id}>
      <List.Item.Meta
        avatar={<Avatar src={post.avatar} />}
        title={<Link to={`/Posts/${post.id}`}>{post.title}</Link>}
        description={post.body}
      />
    </List.Item>
  )
}

export default PostItem
