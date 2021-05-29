import { request } from "./request";

export function db(){
  return request({
    url:'/db'
  })
}
export function getType(type = 'invite', page = 1) {
  return request({
    url: '/activity?' + type + '=1&page=' + page
  })
}