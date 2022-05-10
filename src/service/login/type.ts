export interface IAccount {
  name: ''
  password: ''
}

export interface ILoginResult {
  id: number
  token: ''
  name: ''
}

export interface IDataType<T = any> {
  code: number
  data: T
}
