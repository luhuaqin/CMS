export const configTableData = {
  // showIndexColumn: true, // 是否显示序号列
  // showSelectedColumn: true, // 是否显示复选框列
  title: '角色列表', // 表格标题
  // 表格配置列表
  propList: [
    { prop: 'name', label: '角色名', minWidth: 100 },
    { prop: 'intro', label: '权限介绍', minWidth: 100 },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 130,
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: 130,
      slotName: 'updateAt'
    },
    { prop: '', label: '操作', minWidth: 150, slotName: 'handler' }
  ]
}
