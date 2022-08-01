<template>
  <div class="user">
    <page-search
      :configSearchForm="configSearchForm"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />

    <page-content
      ref="pageDataRef"
      :configTableData="configTableData"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import { configTableData } from './config/content-table-config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [
      selectionList,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageDataRef
    ] = usePageSearch()

    return {
      configSearchForm,
      selectionList,
      configTableData,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageDataRef
    }
  }
})
</script>

<style scoped></style>
