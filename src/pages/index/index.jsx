import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import useStore from '../../store/index'
import './index.scss'
import ListItem from '../../components/ListItem/index'

const list = [...Array(5)].map((_, index) => {
  const id = index + 1
  return {
    id,
    name: `${id}. 请点击我，我是${id}`
  }
})

const Index = () => {
  const state = useStore()

  return (
    <View className='index'>
      {list.map(item => (
        <ListItem key={item.id} info={item} active={state.currentId === item.id} />
      ))}
    </View>
  )
}

export default Index
