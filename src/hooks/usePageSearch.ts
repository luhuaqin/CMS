import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageDataRef = ref<InstanceType<typeof PageContent>>()
  const selectionList = (list: any) => {
    console.log(list)
  }

  const handleResetBtnClick = () => {
    pageDataRef.value?.getPageData()
  }
  const handleQueryBtnClick = (queryInfo: any) => {
    pageDataRef.value?.getPageData(queryInfo)
  }
  return [selectionList, handleResetBtnClick, handleQueryBtnClick, pageDataRef]
}
