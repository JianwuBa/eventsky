import Vue from 'vue'
import VueRouter from 'vue-router'

//路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
            path: '/',
            component: () =>
                import ('@/views/Home')
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
        {
            path: "/info",
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
        {
            path: "/event",
            component: () =>
                import ("@/event/create"),
        },
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
        {
            path: "/live",
            component: () =>
                import ("@/views/live/liveSet"),
            children: [{
                path: "/live/*",
                component: () =>
                    import ("@/views/live/liveSet"),
            }]
        },
        {
            path: "/event-list",
            component: () =>
                import ("@/account/eventList/index")
        },
        {
            path: "/order-list",
            component: () =>
                import ("@/views/orderList/index")
        },
        {
            path: "/overview",
            component: () =>
                import ("@/views/statisticalInfo/index")
        }
    ]
})
export default router