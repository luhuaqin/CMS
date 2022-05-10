import { createStore } from 'vuex'

import { IRootType } from './type'
import loginModule from './login/login'

const store = createStore<IRootType>({
  state: () => {
    return {
      name: 'coderlu',
      password: ''
    }
  },
  modules: {
    loginModule
  }
})

// 初始化store
export function setupStore() {
  store.dispatch('loginModule/LoadLocalDataAction')
}

export default store
