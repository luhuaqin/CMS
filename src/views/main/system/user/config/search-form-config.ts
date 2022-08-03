import { IForm } from '@/base-ui/form/types'

export const configSearchForm: IForm = {
  labelWidth: '130px',
  itemStyle: {
    padding: '20px 10px',
    marginBottom: 0
  },
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
      label: '电话号码',
      field: 'cellphone',
      placeholder: '请输入电话号码'
    },
    {
      type: 'select',
      label: '用户状态',
      field: 'enable',
      placeholder: '请选择用户状态',
      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
    },
    {
      type: 'datepicker',
      label: '时间段',
      field: 'createAt',
      otherOpts: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
}
