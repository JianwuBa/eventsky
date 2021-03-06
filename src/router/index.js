import Vue from 'vue'
import VueRouter from 'vue-router'

//路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: () =>
                import ('@/views/Home'),
            meta: {
                title: "活动星空：活动直播和社交 SaaS 平台 | 扩大影响力，连接新未来  EventSky: Virtual Event Hosting SaaS Platform | Video Streaming, Ticketing & Registration, Networking & Knowledge Sharing, Analytics, and More",
                content: {
                    keywords: '活动星空 活动 直播 社交  china event exhibition hosting video streaming SaaS networking',
                    description: ''
                }
            }
        },
        {
            path: "/register",
            component: () =>
                import ("@/views/login/register")
        },
        {
            path: "/login",
            component: () =>
                import ("@/views/login/login")
        },
        //注册信息
        {
            path: "/account/info",
            component: () =>
                import ("@/account/info/index")
        },
        {
            path: "/forget-pass",
            component: () =>
                import ("@/views/login/forgetPassword")
        },
        {
            path: "/reset-pass",
            component: () =>
                import ("@/views/login/resetPassword")
        },
        {
            path: "/compony",
            component: () =>
                import ("@/views/companySetup/index")
        },
        //创建活动
        {
            path: "/event",
            component: () =>
                import ("@/event/create"),
        },
        //活动详情
        {
            path: "/event/detail",
            component: () =>
                import ("@/views/promote/index"),
            children: [{
                path: "/event/detail/*",
                component: () =>
                    import ("@/views/promote/index"),
            }]
        },
        //设置活动门票
        {
            path: "/stepevent/price",
            component: () =>
                import ("@/event/ticketing"),
            children: [{
                path: "/stepevent/price/*",
                component: () =>
                    import ("@/event/ticketing"),
            }]
        },
        //设置直播
        {
            path: "/set-live",
            component: () =>
                import ("@/views/live/liveSet"),
            children: [{
                path: "/set-live/*",
                component: () =>
                    import ("@/views/live/liveSet"),
            }]
        },
        //活动列表
        {
            path: "/event-list",
            component: () =>
                import ("@/account/eventList/index"),
            children: [{
                path: "/event-list/*",
                component: () =>
                    import ("@/account/eventList/index"),
            }]
        },
        //订单列表
        {
            path: "/order-list",
            component: () =>
                import ("@/views/orderList/index"),
            children: [{
                path: "/order-list/*",
                component: () =>
                    import ("@/views/orderList/index"),
            }]
        },
        //数据统计
        {
            path: "/overview",
            component: () =>
                import ("@/views/statisticalInfo/index"),
            children: [{
                path: "/overview/*",
                component: () =>
                    import ("@/views/statisticalInfo/index"),
            }]
        },
        //交易记录
        {
            path: "/account/jyjl",
            component: () =>
                import ("@/views/jyjl")
        },
        //提款到银行账户
        {
            path: "/tk",
            component: () =>
                import ("@/views/tk")
        },
        //购买
        {
            path: "/gm",
            component: () =>
                import ("@/views/gm")
        },
        {
            path: "/nav",
            component: () =>
                import ("@/account/Nav")
        },
        {
            path: '/live-host',
            component: () =>
                import ('@/views/live/index'),
            children: [{
                path: "/live-host/*",
                component: () =>
                    import ("@/views/live/index"),
            }]
        },
        {
            path: '/viewlive',
            component: () =>
                import ('@/views/live/viewLive'),
            children: [{
                path: "/viewlive/*",
                component: () =>
                    import ("@/views/live/viewLive"),
            }]
        }
    ]
})

export default router