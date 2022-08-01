export const configTableData = {
  showIndexColumn: true,
  title: '商品列表', // 表格标题
  // 表格配置列表
  propList: [
    { prop: 'name', label: '商品名称', showOverflowTooltip: true },
    { prop: 'oldPrice', label: '原价格', minWidth: 50, slotName: 'price' },
    { prop: 'newPrice', label: '现价格', minWidth: 50, slotName: 'price' },
    { prop: 'status', label: '状态', minWidth: 90, slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: 100, slotName: 'image' },
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
    { prop: '', label: '操作', minWidth: 130, slotName: 'handler' }
  ]
}
