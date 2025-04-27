import http from '@/api/request'
import type { AddParams } from '@/api/types/hardware/server'
import { PREFIX, type OperateResInfo } from '@/api/types/common'

export const addServer = (data: AddParams) => {
  return http.post<OperateResInfo>(PREFIX + '/server/', data)
}