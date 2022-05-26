import { IForm } from '@/base-ui/form/types'

export const configSearchForm: IForm = {
  labelWidth: '130px',
  itemLayout: {
    padding: '20px 10px',
    marginBottom: 0
  },
  formItems: [
    {
      type: 'input',
      label: '用户名',
      field: 'userName',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      field: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '爱好',
      field: 'hobbit',
      placeholder: '请选择爱好',
      options: [
        {
          label: '足球',
          value: '足球'
        },
        {
          label: '篮球',
          value: '篮球'
        },
        {
          label: '乒乓球',
          value: '乒乓球'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '时间段',
      field: 'rangeTime',
      otherOpts: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
}
