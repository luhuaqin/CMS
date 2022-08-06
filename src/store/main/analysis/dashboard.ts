import { Module } from 'vuex'
import { IRootType } from '../../type'
import { IDashBoardType } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddrGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashBoardType, IRootType> = {
  namespaced: true,

  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addrGoodsSale: []
    }
  },

  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddrGoodsSale(state, list) {
      state.addrGoodsSale = list
    }
  },

  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountRes: any = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountRes.data)

      const categorySaleRes: any = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleRes.data)

      const categoryFavorRes: any = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorRes.data)

      const AddrSaleRes: any = await getAddrGoodsSale()
      commit('changeAddrGoodsSale', AddrSaleRes.data)
    }
  }
}

export default dashboardModule
