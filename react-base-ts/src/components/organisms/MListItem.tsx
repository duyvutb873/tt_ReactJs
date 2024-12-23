import { List } from 'antd'
import AAvatar from '../../components/atoms/AAvatar'
import IconText from '../../components/atoms/IconText'

interface IAvatar {
  src: string
  id: number
  actions: IconText[]
  title: string
}

const PostImage: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <img width={272} alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />
    </div>
  )
}

const MListItem = ({ id, src, actions, title, body }) => {
  return (
    <List.Item key={id} actions={actions} extra={<PostImage />}>
      <AAvatar src={src} id={id} title={title} />

      {body}
    </List.Item>
  )
}

export default MListItem
