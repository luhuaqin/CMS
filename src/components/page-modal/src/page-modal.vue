<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <hq-form v-model="formData" v-bind="modalConfig"></hq-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HqForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    HqForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    initInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.initInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItemList) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    const store = useStore()
    const handleConfirm = () => {
      dialogVisible.value = false
      if (Object.keys(props.initInfo).length) {
        // 编辑
        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.initInfo.id
        })
      } else {
        // 新建
        store.dispatch('systemModule/addPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirm
    }
  }
})
</script>

<style scoped></style>
