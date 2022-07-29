<template>
  <div class="user">
    <page-search :configSearchForm="configSearchForm" />

    <div class="content">
      <hq-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-tag :type="scope.row.enable ? 'success' : 'danger'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-tag>
        </template>
        <template #createAt="scope">
          {{ moment(scope.row.createAt).format('YY/MM/DD hh:mm') }}
        </template>
        <template #updateAt="scope">
          {{ moment(scope.row.updateAt).format('YY/MM/DD hh:mm') }}
        </template>
      </hq-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import PageSearch from '@/components/page-search/index'
import { useStore } from '@/store'
import HqTable from '@/base-ui/table'
import moment from 'moment'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HqTable
  },
  setup() {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: 100 },
      { prop: 'realname', label: '真实姓名', minWidth: 100 },
      { prop: 'cellphone', label: '电话号码', minWidth: 100 },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: 100,
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: 100,
        slotName: 'updateAt'
      },
      { prop: 'enable', label: '状态', minWidth: 100, slotName: 'status' },
      { prop: 'departmentId', label: '部门', minWidth: 100 }
    ]

    return {
      configSearchForm,
      userList,
      userCount,
      propList,
      moment
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>