import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/event-service"

// get请求
// export default {
//     getListAPI(params) {
//         return http.get(`${resquest}`, params)
//     }
// }

//活动 公共头 信息
export function getHeadInfo(id) {
    return http.get(`${resquest}/event/info/` + id)
}
//获取活动信息