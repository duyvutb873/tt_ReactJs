import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { usePostContext } from '../../contexts/PostContext';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { posts, setPosts } = usePostContext();
  const navigate = useNavigate();

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title,
      body,
      avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${posts.length + 1}`
    };
    setPosts([...posts, newPost]);
    navigate('/Posts');
  };

  return (
    <Form layout="vertical" onFinish={handleAddPost}>
      <Form.Item label="Title" required>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label="Body" required>
        <Input.TextArea value={body} onChange={(e) => setBody(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPostPage;