<template>
  <div class="role">
    <page-search :configSearchForm="configSearchForm"></page-search>
    <page-content
      :configTableData="configTableData"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { configTableData } from './config/content-table-config'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search/index'
import { configSearchForm } from './config/search-form-config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      configTableData,
      configSearchForm
    }
  }
})
</script>

<style scoped></style>
