import { createStore, Store, useStore as vuexUseStore } from 'vuex'

import { IRootType, IStoreType } from './type'
import { getPageListData } from '@/service/main/system/system'
import loginModule from './login/login'
import systemModule from './main/system/system'
import dashboardModule from './main/analysis/dashboard'

const store = createStore<IRootType>({
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门和角色
      const departmentResult = await getPageListData('department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // 请求菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      // 保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    loginModule,
    systemModule,
    dashboardModule
  }
})

// 初始化store
export function setupStore() {
  store.dispatch('loginModule/LoadLocalDataAction')
  // store.dispatch('getInitialDataAction')  // 在这里发送初始化请求会导致未拿到token就执行该方法
}

// store类型
export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}

export default store
