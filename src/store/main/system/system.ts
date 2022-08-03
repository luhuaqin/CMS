import { Module } from 'vuex'
import { ISystemType } from './types'
import { IRootType } from '@/store/type'
import {
  getPageListData,
  deleteSingleDataById,
  addPageData,
  editPageData
} from '@/service/main/system/system'
const systemModule: Module<ISystemType, IRootType> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleCount: 0,
      roleList: [],
      goodsCount: 0,
      goodsList: [],
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    getPageTableDataList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    getPageTableDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 处理pageUrl
      const pageName = payload.pageName

      // // 发送网络请求
      const pageResult = await getPageListData(
        `${pageName}/list`,
        payload.queryInfo
      )
      // 将数据存储到state中
      const { list, totalCount } = pageResult.data
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },

    // 删除表格数据
    async deletePageSingleDataAction({ dispatch }, payload: any) {
      // pageName => /users/:id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 调用删除接口
      await deleteSingleDataById(pageUrl)
      // 重新请求table数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 新建
    async addPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await addPageData(pageUrl, newData)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 编辑
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
