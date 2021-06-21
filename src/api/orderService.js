import http from '../utils/http'
// import qs from 'qs'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/api/order-service"

// 账号密码登陆
export function getOrderLists() {
    return http.get(`${resquest}/order/query`)
}