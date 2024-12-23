import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Post {
  id: number
  title: string
  body: string
  avatar: string
}

interface PostContextProps {
  posts: Post[]
  updatePost: (updatedPost: Post) => void
  setPosts: (posts: Post[]) => void
}

const PostContext = createContext<PostContextProps | undefined>(undefined)

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])

  const updatePost = (updatedPost: Post) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? { ...post, ...updatedPost } : post))
    )
  }
  
  const deletePost = (postId: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId))
    reindexPosts()
  }

  const reindexPosts = () => {
    setPosts((prev) =>
      prev.map((post, index) => ({
        ...post,
        id: index + 1,
      }))
    );
  };

  return (
    <PostContext.Provider value={{ posts, updatePost, setPosts, deletePost }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context
}
