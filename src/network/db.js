import { request } from "./request";
export function db() {
  return request({
    url: "/navbar"
  });
}
