// import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/style/Post.css'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     setPosts(res.data);
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.error("Error fetching posts:", err);
    //   });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(jsonposts => {
        setPosts(jsonposts)
      })
  }, [])

  //   console.log(posts);

  return (
    <>
      <div className='posts'>
        <h2 className='posts-title'>Posts</h2>
        <ul className='posts-list'>
          <li className='posts-item'>
            {posts.map((post: IPost) => {
              return (
                <Link
                  key={post.id}
                  to={`/post/${post.id}`}
                  className='posts-link'
                >
                  {post.title}
                </Link>
              )
            })}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Posts
