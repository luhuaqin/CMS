import hqRequest from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

const loginApi = {
  accountLogin: 'login',
  userInfoId: 'users/',
  userMenu: `role/`
}

// 登录
export function accountLoginReq(account: IAccount) {
  return hqRequest.post<IDataType<ILoginResult>>({
    url: loginApi.accountLogin,
    data: account
  })
}

// 查询个人信息
export function qryUserInfoById(id: number) {
  return hqRequest.get<IDataType>({
    url: loginApi.userInfoId + id
  })
}

// 查询用户菜单
export function qryUserMenuById(id: number) {
  return hqRequest.get<IDataType>({
    url: loginApi.userMenu + id + '/menu'
  })
}
