export const configTableData = {
  title: '菜单列表', // 表格标题
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  // 表格配置列表
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: 120 },
    { prop: 'type', label: '类型', minWidth: 50 },
    { prop: 'url', label: '路径', minWidth: 110 },
    { prop: 'icon', label: '图标', minWidth: 100 },
    { prop: 'permission', label: '按钮权限', minWidth: 100 },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 155,
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: 155,
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: 120, slotName: 'handler' }
  ]
}
