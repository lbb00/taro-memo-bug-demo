import { Store } from 'laco'
import Taro, { useState, useEffect } from '@tarojs/taro'

const store = new Store(
  {
    currentId: null
  },
  'test'
)

export default function useAudioStore() {
  const [state, setState] = useState(() => store.get())

  function updateState() {
    setState(store.get())
  }

  useEffect(() => {
    store.subscribe(updateState)
    return () => store.unsubscribe(updateState)
  })

  return state
}

export function setCurrentId(id) {
  store.set(() => ({
    currentId: id
  }))
}
