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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HqForm from '@/base-ui/form'

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
    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
