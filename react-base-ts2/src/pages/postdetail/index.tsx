import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Avatar, Button, Input, Space, Typography, message } from 'antd'
import { usePostContext } from '../../contexts/PostContext'

const { TextArea } = Input
const { Title } = Typography

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>()
  const { posts, updatePost, deletePost } = usePostContext()
  const [post, setPost] = useState<any>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedTitle, setEditedTitle] = useState<string>('')
  const [editedBody, setEditedBody] = useState<string>('')

  const navigate = useNavigate()

  useEffect(() => {
    const postData = posts.find((p) => p.id === Number(postId))
    if (postData) {
      setPost(postData)
      setEditedTitle(postData.title)
      setEditedBody(postData.body)
    }
  }, [postId, posts])

  const handleSave = () => {
    if (post) {
      updatePost({ ...post, title: editedTitle, body: editedBody })
      message.success('Post updated successfully!')
      setIsEditing(false)
      //   navigate('/')
    }
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deletePost(Number(postId))
      navigate('/Posts')
    }
  }

  if (!post) return <div>Post not found</div>

  return (
    <div className='p-4'>
      <Space direction='vertical' size='large' style={{ width: '100%' }}>
        <div className='flex items-center gap-4'>
          <Avatar size={64} src={post.avatar} alt='Post Avatar' />
          <Title level={3}>Post ID: {postId}</Title>
        </div>

        {isEditing ? (
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder='Edit Title'
            size='large'
          />
        ) : (
          <Title level={4}>{post.title}</Title>
        )}

        {isEditing ? (
          <TextArea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
            rows={4}
            placeholder='Edit Body'
          />
        ) : (
          <p>{post.body}</p>
        )}

        <Space>
          {isEditing ? (
            <>
              <Button type='primary' onClick={handleSave}>
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            </>
          ) : (
            <Button type='default' onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          )}
          <Button type='danger' onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      </Space>
    </div>
  )
}

export default PostDetail
