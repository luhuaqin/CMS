import { ILoginType } from './login/types'
import { ISystemType } from './main/system/types'
import { IDashBoardType } from './main/analysis/types'
export interface IRootType {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginType
  systemModule: ISystemType
  dashboardModule: IDashBoardType
}

export type IStoreType = IRootType & IRootWithModule
