import { ILoginType } from './login/types'
export interface IRootType {
  name: string
  password: string
}

export interface IRootWithModule {
  loginModule: ILoginType
}

export type IStoreType = IRootType & IRootWithModule
