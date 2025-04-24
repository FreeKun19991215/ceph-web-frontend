import http from '@/api/request'

// import type {
//     LoginParams,
//   } from '../types/user'

export const getList = () => {
  return http.get('/hardware/server')
}