import hqRequest from '@/service/index'

export function getPageListData(url: string, queryInfo: any) {
  hqRequest.post({
    url: url,
    data: queryInfo
  })
}
