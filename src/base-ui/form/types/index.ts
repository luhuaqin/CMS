type formType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormType {
  type: formType
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOpts?: any // 针对特殊属性
  isHidden?: boolean
}

export interface IForm {
  formItemList: IFormType[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
