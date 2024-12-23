import React, { useState, useEffect } from 'react'
import { GithubOutlined, GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'


interface MListIconProps {
  list: string[]
}

const MListIcon: React.FC<MListIconProps> = ({ list }) => {
  const [icons, setIcons] = useState<{ [key: string]: React.ComponentType<any> }>({})

  // useEffect(() => {
  //   const loadIcons = async () => {
  //     const iconMap: { [key: string]: React.ComponentType<any> } = {}

  //     for (const iconName of list) {
  //       try {
  //         // Bỏ qua cảnh báo từ Vite
  //         const icon = await import(`@ant-design/icons/${iconName}`) 
  //         iconMap[iconName] = icon.default
  //       } catch (error) {
  //         console.error(`Icon ${iconName} không tìm thấy`)
  //       }
  //     }

  //     setIcons(iconMap)
  //   }

  //   loadIcons()
  // }, [list])

  return (
    <div className='flex gap-1 items-center justify-center bg-white'>
      {
      componentNames.map((name, index) => {
        const IconComponent = componentMap[name];
        return IconComponent ? (
          <div key={index} className='w-9 h-9 flex items-center justify-center border-2 border-blue-400 rounded-full'>
            <IconComponent className='text-blue-400 text-xl'/>
          </div>
        ) : (
          <div key={index}>Component {name} không tồn tại</div>
        );
      })
      
      }
    </div>
  )
}

export default MListIcon
