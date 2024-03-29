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
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    ></page-content>

    <page-modal
      :initInfo="initInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { configSearchForm } from './config/search-form-config'
import { configTableData } from './config/content-table-config'
import { modalConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [
      selectionList,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageDataRef
    ] = usePageSearch()

    // pageModal相关hook处理
    // 处理密码form-item是否显示
    const AddCallback = () => {
      const passwordItem = modalConfig.formItemList.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItemList.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    // 动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItemList.find((item) => {
        return item.field === 'departmentId'
      })
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItemList.find((item) => {
        return item.field === 'roleId'
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    // 获取公共变量和函数
    const [pageModalRef, initInfo, handleAddData, handleEditData] =
      usePageModal(AddCallback, editCallback)

    return {
      configSearchForm,
      selectionList,
      configTableData,
      handleResetBtnClick,
      handleQueryBtnClick,
      pageDataRef,
      modalConfigRef,
      handleAddData,
      handleEditData,
      pageModalRef,
      initInfo
    }
  }
})
</script>

<style scoped></style>
