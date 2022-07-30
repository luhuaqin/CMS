<template>
  <div class="user">
    <page-search :configSearchForm="configSearchForm" />

    <page-content :userList="userList" :configTableData="configTableData">
    </page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import PageSearch from '@/components/page-search/index'
import { useStore } from '@/store'
import PageContent from '@/components/page-content/index'
import { configTableData } from './config/content-table-config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
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

    const userList = computed(() => store.state.systemModule.userList) // 表格数据
    const userCount = computed(() => store.state.systemModule.userCount) // 列表数据总数

    const selectionList = (list: any) => {
      console.log(list)
    }

    return {
      configSearchForm,
      userList,
      userCount,
      selectionList,
      configTableData
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
