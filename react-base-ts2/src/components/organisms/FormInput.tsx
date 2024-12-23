import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { GithubOutlined, GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import MListIcon from '../molecules/MListIcon'

const listIcon = ['GithubOutlined', 'GoogleOutlined', 'FacebookOutlined', 'TwitterOutlined']
const componentMap = {
  GithubOutlined,
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined
  // Thêm các component khác nếu cần
};

function FormInput () {
  const navigate = useNavigate()
  const { login } = useAuth()

  const fixedEmail = 'demo@example.com'
  const fixedPassword = 'demo#123'

  const onFinish = (values) => {
    const { email, password } = values

    if (email === fixedEmail && password === fixedPassword) {
      const accessToken = 'fake_access_token_123456' // Token giả lập

      login(accessToken)

      message.success('Login successful!')

      navigate('/')
    } else {
      message.error('Invalid email or password. Please try again!')
    }
  }

  const onFinishFailed = () => {
    message.error('Invalid email or password. Please try again!')
  }

  return (
    <Form
      name='basic'
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      className='space-y-2'
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!'
          }
        ]}
      >
        <Input placeholder='Email' className='bg-zinc-100' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password placeholder='Password' className='bg-zinc-100' />
      </Form.Item>

      <Form.Item className='flex items-center mb-4' name='remember' valuePropName='checked'>
        <Checkbox className='mr-2  text-base'>by signing up, I accept</Checkbox>
        <Link to='#' className='text-blue-600  text-sx font-bold'>
          Term & Condition
        </Link>
      </Form.Item>

      <Form.Item name='button'>
        <div className='flex items-center gap-4'>
          <Button className='w-20 h-9' type='primary' htmlType='submit'>
            Sign In
          </Button>
          <span className='text-base'>or</span>
          <Link to='#' className='text-blue-600 text-sx font-bold'>
            Sign Up
          </Link>
        </div>
      </Form.Item>

      <div className='flex flex-row justify-between flex-wrap mt-4 mb-4'>
        <span className='text-base'>or connect with</span>
        {listIcon.map((name, index) => {
          const IconComponent = componentMap[name]
          return IconComponent ? (
            <div key={index} className='w-9 h-9 flex items-center justify-center border-2 border-blue-400 rounded-full'>
              <IconComponent className='text-blue-400 text-xl' />
            </div>
          ) : (
            <div key={index}>Component {name} không tồn tại</div>
          )
        })  }
      </div>

      <span className='w-full h-full text-gray-600'> demo user email: 'demo@example.com' and password: 'demo#123'</span>
    </Form>
  )
}

export default FormInput
