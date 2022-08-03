<template>
  <div class="role">
    <page-search :configSearchForm="configSearchForm"></page-search>
    <page-content
      :configTableData="configTableData"
      pageName="role"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :initInfo="initInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { configTableData } from './config/content-table-config'
import { configSearchForm } from './config/search-form-config'
import { modalConfig } from './config/modal-config'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search/index'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageModalRef, initInfo, handleAddData, handleEditData] =
      usePageModal()

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    return {
      configTableData,
      configSearchForm,
      modalConfig,
      pageModalRef,
      initInfo,
      handleAddData,
      handleEditData,
      menus
    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 50px;
}
</style>
