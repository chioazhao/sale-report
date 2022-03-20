/*
 * @Descripttion: 请求拦截、响应拦截、错误统一处理
 * @version: 
 * @Author: poorpenguin
 * @Date: 2019-10-10 17:43:18
 * @LastEditors: poorpenguin
 * @LastEditTime: 2019-12-02 18:12:13
 */
import axios from 'axios'
import store from '../store/index'
import qs from "qs";
/**
 * 请求失败后的错误统一处理（处理系统错误和服务器错误）
 * @param {Number} status 请求失败的状态码
 */
const httpErrorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:

            break;
            // 404请求不存在
        case 404:

            break;
        case 500:

            // tip(other)
            break;
        case 504:

            break;
        default:

    }
}

// 创建axios实例
var instance = axios.create({
    timeout: 1000 * 300,
});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        const token = store.state.finance.token;
        config.method === 'post' ?
            config.data = qs.stringify({ ...config.data, token }) :
            config.params = { ...config.params, token };

        return config;
    },
    error => Promise.error(error)
)
// 响应拦截器
instance.interceptors.response.use(
    // 请求成功 脱壳
    res => {
        if (res.status === 200) {
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res.data)
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            // 根据状态码进行提示
            httpErrorHandle(response.status, response.data);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
        }
    }
)

export default instance;