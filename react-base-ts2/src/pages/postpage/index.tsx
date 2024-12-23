import React, { useEffect, useState } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined, SearchOutlined } from '@ant-design/icons'
import { List, Button, Space, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { usePostContext } from '../../contexts/PostContext'

import IconText from '../../components/atoms/IconText'
import MListItem from '../../components/organisms/MListItem'

const actions = [
  <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
  <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
  <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />
]

const PostPage = () => {
  const { posts, setPosts } = usePostContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      const transformedPosts = data.map((post: any) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${post.id}`
      }))
      setPosts(transformedPosts)
    }

    if (posts.length === 0) {
      fetchData()
    }
  }, [])

  useEffect(() => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    console.log(filteredPosts);
    
    // setPosts(filteredPosts)
  }, [searchQuery])
  
  useEffect(() => {
    setPosts(filteredPosts) // Cập nhật lại posts sau khi filteredPosts thay đổi
  }, [filteredPosts])

  const navigateToAddPost = () => {
    navigate('Add')
  }

  const handleSearch = (e: any) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-1 overflow-y-auto p-4 bg-white'>
        <div className='w-full h-auto flex justify-around items-center'>
          <Button type='primary' onClick={navigateToAddPost} style={{ marginBottom: '16px' }}>
            Add Post
          </Button>
          <Space.Compact size='large'>
            <Input addonBefore={<SearchOutlined />} placeholder='Search' onChange={(e) => handleSearch(e)} />
          </Space.Compact>
        </div>

        <List
          itemLayout='vertical'
          size='large'
          dataSource={posts.sort((a, b) => b.id - a.id)}
          renderItem={(item) => (
            <MListItem id={item.id} src={item.avatar} actions={actions} title={item.title} body={item.body} />
          )}
        />
      </div>
    </div>
  )
}

export default PostPage
