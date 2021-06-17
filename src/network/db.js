import { request } from "./request";

export function db(){
  return request({
    url:'/data/navbar'
  })
}
export function getType(type = 'invite', page = 1) {
  return request({
    url: '/wealipay/activity?' + type + '=1&page=' + page
  })
}