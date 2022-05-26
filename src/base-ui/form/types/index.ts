type formType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormType {
  type: formType
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOpts?: any
}

export interface IForm {
  formItems: IFormType[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
