import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, Link } from 'react-router-dom'

const NewBreadcrumb = () => {
  const location = useLocation()

  // Tách đường dẫn URL thành các phần tử
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  // Tạo breadcrumb item từ path
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{pathSnippets[index]}</Link>
      </Breadcrumb.Item>
    )
  })
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default NewBreadcrumb
