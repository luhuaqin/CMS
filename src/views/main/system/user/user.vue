<template>
  <div class="user">
    <page-search :configSearchForm="configSearchForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import PageSearch from '@/components/page-search/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return {
      configSearchForm
    }
  }
})
</script>

<style scoped></style>
