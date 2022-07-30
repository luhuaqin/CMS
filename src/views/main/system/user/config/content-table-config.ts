export const configTableData = {
  showIndexColumn: true, // 是否显示序号列
  showSelectedColumn: true, // 是否显示复选框列
  title: '用户列表', // 表格标题
  // 表格配置列表
  propList: [
    { prop: 'name', label: '用户名', minWidth: 100 },
    { prop: 'realname', label: '真实姓名', minWidth: 100 },
    { prop: 'cellphone', label: '电话号码', minWidth: 100 },
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
    { prop: 'enable', label: '状态', minWidth: 90, slotName: 'status' },
    { prop: 'departmentId', label: '部门', minWidth: 100 },
    { prop: '', label: '操作', minWidth: 150, slotName: 'handler' }
  ]
}
