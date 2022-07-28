import { createStore, Store, useStore as vuexUseStore } from 'vuex'

import { IRootType, IStoreType } from './type'
import loginModule from './login/login'
import systemModule from './main/system/system'

const store = createStore<IRootType>({
  state: () => {
    return {
      name: 'coderlu',
      password: ''
    }
  },
  modules: {
    loginModule,
    systemModule
  }
})

// 初始化store
export function setupStore() {
  store.dispatch('loginModule/LoadLocalDataAction')
}

// store类型
export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}

export default store
