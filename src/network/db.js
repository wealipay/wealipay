import { request } from "./request";
export function db() {
  return request({
    url: "/db"
  });
}

export function getType(type='sales',page=1){
  return request({
    url:"/db?type + '=1&page=' + page"
  })
}