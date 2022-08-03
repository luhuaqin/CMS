import { ILoginType } from './login/types'
import { ISystemType } from './main/system/types'
export interface IRootType {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginType
  systemModule: ISystemType
}

export type IStoreType = IRootType & IRootWithModule
