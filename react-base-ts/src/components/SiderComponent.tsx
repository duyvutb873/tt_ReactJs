import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import {
  HomeOutlined,
  FileOutlined,
  UnorderedListOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme, Button, Grid } from 'antd'
const { Header, Content, Footer, Sider } = Layout
import NewBreadcrumb from './atoms/NewBreadcrumb'


type MenuItem = Required<MenuProps>['items'][number]

function getItem (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Home', 'Home', <HomeOutlined />),
  getItem('ToDo App', 'Todo', <UnorderedListOutlined />),
  getItem('User', 'User', <UserOutlined />, [
    getItem('Tom', 'User/Tom'),
    getItem('Bill', 'User/Bill'),
    getItem('Alex', 'User/Alex')
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Posts', 'Posts', <FileOutlined />)
]

const SiderComponent: React.FC = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const handleBreakpoint = (broken) => {
    setCollapsed(broken)
    setVisible(broken)
  }

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint='lg'
        onBreakpoint={(broken) => handleBreakpoint(broken)}
        collapsedWidth={visible ? '0' : '70'}
      >
        <Button
          type='text'
          icon={
            collapsed ? (
              <MenuUnfoldOutlined style={{ color: 'white' }} />
            ) : (
              <MenuFoldOutlined style={{ color: 'white' }} />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64
          }}
        />
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
          onClick={(e) => {
            navigate(`/${e.key}`)
            ;`/${e.key}`
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {visible && collapsed && (
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
            />
          )}
        </Header>
        <Content style={{ margin: '0 16px', overflow: 'hidden' }}>
          <NewBreadcrumb />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default SiderComponent
