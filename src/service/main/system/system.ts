import hqRequest from '@/service/index'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hqRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
