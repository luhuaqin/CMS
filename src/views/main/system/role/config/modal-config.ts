import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItemList: [
    {
      type: 'input',
      label: '角色名',
      field: 'name',
      placeholder: '请输入角色名'
    },
    {
      type: 'input',
      label: '角色介绍',
      field: 'intro',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 }
}
