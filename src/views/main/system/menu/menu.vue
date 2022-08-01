<template>
  <div class="menu">
    <page-content
      :configTableData="configTableData"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import { configTableData } from './config/content-table-config'

export default defineComponent({
  name: 'menu',
  components: {
    PageContent
  },
  setup() {
    return {
      configTableData
    }
  }
})
</script>

<style scoped></style>
