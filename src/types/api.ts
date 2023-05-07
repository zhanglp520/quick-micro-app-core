export interface Api {
  id: string | undefined
  apiId: string
  apiName: string
  apiPath:string
  createTime?: string
  remark?: string
}
export interface SearchApi {
  keyword: string
}