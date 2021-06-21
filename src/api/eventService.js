import http from '../utils/http'
import qs from 'qs'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/api/event-service"

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
export function postSaveTic(id, params) {
    return http.post(`${resquest}/event_set/price/${id}`, qs.stringify(params))
}

//门票修改
export function postSaveChangeTic(id, params) {
    return http.post(`${resquest}/event_set/price/${id}`, qs.stringify(params))
}

//门票问题设置
export function postRegisterFormInfo(id, params) {
    return http.post(`${resquest}/question/social/${id}`, qs.stringify(params))
}

//获取活动 问题列表
export function getRegisterFormInfos(eventId) {
    return http.get(`${resquest}/question/list/${eventId}`)
}
//直播 头 信息
export function getLiveHead(id) {
    return http.get(`${resquest}/event/info/` + id)
}

// 活动列表
export function getListAPI(params) {
    return http.get(`${resquest}/event_set/list`, params)
}

//删除门票

export function deleteTic(eventId, priceId) {
    return http.delete(`${resquest}/event_set/price/${eventId}?priceId=${priceId}`)
}

//活动详情回显示


//活动详情回显
export function getEventDetailShow(id) {
    return http.get(`${resquest}/event_set/detail/` + id)
}
//提交活动详细信息
export function postEventDetail(id, params) {
    return http.post(`${resquest}/event_set/detail/${id}`, qs.stringify(params))
}