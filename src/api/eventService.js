import http from '../utils/http'
import qs from 'qs'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/event-service"

//活动 公共头 信息
export function getHeadInfo(id) {
    return http.get(`${resquest}/event/info/` + id)
}
//获取活动信息
export function getEventInfoShow(id) {
    return http.get(`${resquest}/event_set/basic/` + id)
}
//保存活动修改基本信息
export function postSaveEventInfo(params) {
    return http.post(`${resquest}/event_set/basic`, qs.stringify(params))
}
//创建保存活动基本信息
export function postCreateEventInfo(params) {
    return http.post(`${resquest}/event_set/basic`, qs.stringify(params))
}
//获取门票列表
export function getTicList(id) {
    return http.get(`${resquest}/event_set/price_list/` + id)
}

// 保存门票
export function postSaveTic(params) {
    return http.post(`${resquest}/event_set/price/`, qs.stringify(params))
}

//门票修改
export function postSaveChangeTic(params) {
    return http.post(`${resquest}/event_set/price/`, qs.stringify(params))
}

//门票问题设置
export function postRegisterFormInfo(id, params) {
    return http.post(`${resquest}/event_set/price/` + id, qs.stringify(params))
}

//获取活动 问题列表
export function getRegisterFormInfos(eventId, webId) {
    return http.get(`${resquest}/question/list/${eventId},{params:{webId:${webId}}}`)
}