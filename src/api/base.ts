import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
    baseURL: '/alipay'
})

instance.interceptors.response.use((res) => {
    const { data: _data } = res
    const { data, code, msg } = _data
    if (code !== 0) {
        showDialog({
            message: msg
        }).then(() => {

        })
        return Promise.reject(msg)
    }
    return data;
})

export default instance;