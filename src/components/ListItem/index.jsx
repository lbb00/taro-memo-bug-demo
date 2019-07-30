import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import shallowEqual from '../../utils/shallowEqual'
import { setCurrentId } from '../../store/index'

import './index.scss'

const ListItem = props => {
  const { info, active } = props
  const [listClasses, setListClasses] = useState('list-item')

  useEffect(() => {
    setListClasses(
      classNames('list-item', {
        'list-item--active': active
      })
    )
  }, [active])

  function handleClick() {
    setCurrentId(info.id)
  }

  return (
    <View className={listClasses} onClick={handleClick}>
      {info.name}
    </View>
  )
}

// export default ListItem

export default Taro.memo(ListItem, shallowEqual)
