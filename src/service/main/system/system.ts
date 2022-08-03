import hqRequest from '@/service/index'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hqRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deleteSingleDataById(url: string) {
  return hqRequest.delete<IDataType>({
    url
  })
}

export function addPageData(url: string, newData: any) {
  return hqRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hqRequest.patch<IDataType>({
    url,
    data: editData
  })
}
