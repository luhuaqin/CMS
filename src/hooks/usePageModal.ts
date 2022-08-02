import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = () => void

export function usePageModal(addCb: CallBackFn, editCb: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const initInfo = ref({})

  const handleAddData = () => {
    initInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    addCb && addCb()
  }
  const handleEditData = (row: any) => {
    initInfo.value = { ...row }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, initInfo, handleAddData, handleEditData]
}
