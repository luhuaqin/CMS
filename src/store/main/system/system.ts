import { Module } from 'vuex'
import { ISystemType } from './types'
import { IRootType } from '@/store/type'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemType, IRootType> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      console.log(pageResult)
    }
  }
}

export default systemModule
