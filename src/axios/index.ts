import Axios,{AxiosInstance} from 'axios'
import baseURL from '../../setBaseUrl'
// import Loading from 'element-ui'

// const $loading = Loading.service
import {
  Loading
} from 'element-ui';
// const api:AxiosInstance = Axios.create({
//   baseURL,
//   timeout: 10000,
//   headers:{'Content-Type': 'application/json;charset=UTF-8'},
//   responseType: 'json',
// });
Axios.defaults.baseURL = baseURL; // 配置axios请求的地址
Axios.defaults.timeout = 5000;
Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

//添加请求拦截器
Axios.interceptors.request.use((config: any) => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
});
//添加响应拦截器
Axios.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response.data
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
});
/** 错误处理函数 */
function errFun (res: any) {
  if (res.errorCode == '') {

  }
}
const $API = {
  get (url: string, isLoading: boolean = false) {
    return new Promise((resolve, reject) => {
      let loading: any
      if (isLoading) {
        loading = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      }
      Axios({
        method: 'get',
        url
      })
      .then((res: any) => {
        if (isLoading) loading.close()
        if (res.errorCode == '0000') {
          resolve(res)
        } else {
          errFun(res)
          reject(res)
        }
      })
      .catch(err => {
        if (isLoading) loading.close()
        reject(err)
      })
    })
  },
  post (url: string, data:any, isLoading:boolean=false) {
    return new Promise((resolve, reject) => {
      let loading: any
      if (isLoading) {
        loading = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      }
      Axios({
        method: 'post',
        url,
        data,
      })
      .then((res: any) => {
        if (isLoading) loading.close()
        if (res.errorCode == '0000') {
          resolve(res)
        } else {
          errFun(res)
          reject(res)
        }
      })
      .catch(err => {
        if (isLoading) loading.close()
        reject(err)
      })
    })
  }
}

Axios.defaults.withCredentials = true;

export default $API