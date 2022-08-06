import hqRequest from '@/service/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addrGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return hqRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return hqRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hqRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddrGoodsSale() {
  return hqRequest.get({
    url: DashboardAPI.addrGoodsSale
  })
}
