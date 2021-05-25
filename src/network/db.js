import { request } from "./request";
export function db() {
  return request({
    url: "/db"
  });
}

export function getType(type = 'money') {
  return request({
    url: '/activity?' + type + '=1'
  })
}