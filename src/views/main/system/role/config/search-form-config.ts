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
      label: 'id',
      field: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '角色名称',
      field: 'name',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      label: '权限介绍',
      field: 'intro',
      placeholder: '请输入权限介绍'
    },
    {
      type: 'datepicker',
      label: '创建时间',
      field: 'createTime',
      otherOpts: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
}
