import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItemList: [
    {
      type: 'input',
      label: '用户名',
      field: 'name',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '真实姓名',
      field: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      label: '用户密码',
      field: 'password',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      type: 'input',
      label: '电话号码',
      field: 'cellphone',
      placeholder: '请输入电话号码'
    },
    {
      type: 'select',
      label: '选择部门',
      field: 'departmentId',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'select',
      label: '选择角色',
      field: 'roleId',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
