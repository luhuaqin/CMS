<template>
  <div class="pageContent">
    <hq-table
      v-bind="configTableData"
      :listCount="dataCount"
      :listData="tableList"
      v-model:page="pageInfo"
      @selectionChange="selectionList"
    >
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleAdd">
          <el-icon size="14px">
            <Plus />
          </el-icon>
          新建{{ addBtnName }}
        </el-button>
      </template>
      <!-- 列插槽 -->
      <template #status="scope">
        <el-tag
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.enable || scope.row.status ? '启用' : '禁用' }}
        </el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
        <!-- {{ moment(scope.row.createAt).format('YY/MM/DD hh:mm') }} -->
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
        <!-- {{ moment(scope.row.updateAt).format('YY/MM/DD hh:mm') }} -->
      </template>
      <template #handler="scope">
        <el-button
          v-if="isUpdate"
          circle
          type="primary"
          size="small"
          @click="handleEdit(scope.row)"
        >
          <el-icon size="16px">
            <Edit />
          </el-icon>
        </el-button>
        <el-popconfirm title="您确认删除这条数据吗?">
          <template #reference>
            <el-button
              v-if="isDelete"
              circle
              type="danger"
              size="small"
              @click="handleDelete(scope.row)"
            >
              <el-icon size="16px">
                <Delete />
              </el-icon>
            </el-button>
          </template>
        </el-popconfirm>
        <!-- {{ moment(scope.row.updateAt).format('YY/MM/DD hh:mm') }} -->
      </template>

      <!-- page-content剩余动态插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hq-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import HqTable from '../../../base-ui/table/index'
import { usePermission } from '../../../hooks/usePermission'

export default defineComponent({
  components: {
    HqTable
  },
  props: {
    configTableData: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['addBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    // 获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset:
            (pageInfo.value.currentPage === 0
              ? pageInfo.value.currentPage
              : pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 从vuex中获取数据
    const tableList = computed(() =>
      store.getters[`systemModule/getPageTableDataList`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['systemModule/getPageTableDataCount'](props.pageName)
    )

    const selectionList = (list: any) => {
      console.log(list)
    }

    // 除去公共插槽
    const otherPropSlots = props.configTableData.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 删除/编辑/新建操作
    const handleDelete = (row: any) => {
      store.dispatch('systemModule/deletePageSingleDataAction', {
        pageName: props.pageName,
        id: row.id
      })
    }
    const handleAdd = () => {
      emit('addBtnClick')
    }
    const handleEdit = (row: any) => {
      emit('editBtnClick', row)
    }

    // 新建按钮文字
    const addBtnName = computed(() => {
      switch (props.pageName) {
        case 'role':
          return '角色'
        case 'users':
          return '用户'
        case 'menu':
          return '菜单'
        default:
          return ' '
      }
    })

    return {
      selectionList,
      getPageData,
      tableList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDelete,
      handleAdd,
      handleEdit,
      addBtnName
    }
  }
})
</script>

<style scoped lang="less">
.pageContent {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
