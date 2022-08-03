import { Module } from 'vuex'
import { IRootType } from '../type'
import { ILoginType } from './types'
import { IAccount } from '@/service/login/type'
import cache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'
import {
  accountLoginReq,
  qryUserInfoById,
  qryUserMenuById
} from '@/service/login/login'

const loginModule: Module<ILoginType, IRootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menuInfo: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeMenuInfo(state, menuInfo: any) {
      state.menuInfo = menuInfo

      const routes = mapMenusToRoutes(state.menuInfo)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermission(menuInfo)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 登录
      const accountLoginResult = await accountLoginReq(payload)
      const { token } = accountLoginResult.data
      commit('changeToken', token)
      cache.setCache('token', token)

      // 发送初始化请求
      dispatch('getInitialDataAction', null, { root: true })

      // 查询个人信息
      const userInfoResult = await qryUserInfoById(1)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      cache.setCache('userInfo', userInfo)

      // 获取用户菜单权限
      const userMenuResult = await qryUserMenuById(1)
      const menuInfo = userMenuResult.data
      commit('changeMenuInfo', menuInfo)
      cache.setCache('menuInfo', menuInfo)

      router.push('/main')
    },
    // 刷新重新加载本地信息
    LoadLocalDataAction({ commit, dispatch }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化请求
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const menuInfo = cache.getCache('menuInfo')
      if (menuInfo) {
        commit('changeMenuInfo', menuInfo)
      }
    }

    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行手机号登录的action', payload)
    // }
  }
}

export default loginModule
