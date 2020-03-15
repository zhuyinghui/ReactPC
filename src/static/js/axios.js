import axios from 'axios'
import { message } from 'antd';
const instance = axios.create({
    baseURL: 'http://39.105.38.16:3000',
    headers: {'token': '123456'}
});
// 添加响应拦截器
instance.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    if(response.status===200){
        if(response.data.code===0){
            return response.data.data
        }else{
            message.warning(response.data.msg)
            return
        }
    }else{
        message.error('http状态非200：'+response.status)
        return
    }
  },  (error)=> {
    // 对响应错误做点什么
    message.error('请求出错：'+error)
    return Promise.reject(error);
});

export default instance