import React from 'react';
import { Form, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';

const RememberMe = () => (
  <Form.Item className='flex items-center mb-4' name='remember' valuePropName='checked'>
    <Checkbox className='mr-2 text-base'>by signing up, I accept</Checkbox>
    <Link to='#' className='text-blue-600 text-sx font-bold'>
      Term & Condition
    </Link>
  </Form.Item>
);

const SignInButton = () => (
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
);

const ConnectWithIcons = ({ listIcon, componentMap }) => (
  <div className='flex flex-row justify-between flex-wrap mt-4 mb-4'>
    <span className='text-base'>or connect with</span>
    {listIcon.map((name, index) => {
      const IconComponent = componentMap[name];
      return IconComponent ? (
        <div key={index} className='w-9 h-9 flex items-center justify-center border-2 border-blue-400 rounded-full'>
          <IconComponent className='text-blue-400 text-xl' />
        </div>
      ) : (
        <div key={index}>Component {name} không tồn tại</div>
      );
    })}
  </div>
);

const DemoUserInfo = () => (
  <span className='w-full h-full text-gray-600'> demo user email: 'demo@example.com' and password: 'demo#123'</span>
);

const FormInput2 = ({ listIcon, componentMap }) => (
  <Form>
    <RememberMe />
    <SignInButton />
    <ConnectWithIcons listIcon={listIcon} componentMap={componentMap} />
    <DemoUserInfo />
  </Form>
);

export default FormInput2;