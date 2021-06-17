import { request } from './request';
export function getDetail(id) {
    return request({
        url: '/wealipay/activity/' + id
    })
}