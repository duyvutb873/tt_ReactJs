import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

const PostDetail = () => {
    const { id } = useParams();

    const [post, setPost] = useState<IPost>({
      userId: -1,
      id: -1,
      title: '',
      body: ''
    })

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(jsonpost => {
          setPost(jsonpost)
        })
    }, [])
  
    return (
      <div className="post_detail">
        <h2>Post Detail</h2>
        <p>Post ID: {post.id}</p>
        <p>Post Title: {post.title}</p>
        <p>Post Body: {post.body}</p>
        <Link to="/posts" className='posts-link'>Back to Posts</Link>
      </div>
    );
  };

  export default PostDetail