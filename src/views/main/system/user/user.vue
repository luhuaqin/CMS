<template>
  <div class="user">
    <page-search :configSearchForm="configSearchForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import PageSearch from '@/components/page-search/index'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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

    return {
      configSearchForm
    }
  }
})
</script>

<style scoped></style>
