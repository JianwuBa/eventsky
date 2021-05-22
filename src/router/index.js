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
                import ('@/Home')
        },
        {
            path: "/register",
            component: () =>
                import ("@/login/register")
        },
        {
            path: "/login",
            component: () =>
                import ("@/login/login")
        },
        {
            path: "/info",
            component: () =>
                import ("@/account/info/index")
        },
        {
            path: "/forget-pass",
            component: () =>
                import ("@/login/forgetPassword")
        },
        {
            path: "/reset-pass",
            component: () =>
                import ("@/login/resetPassword")
        },
        {
            path: "/compony",
            component: () =>
                import ("@/companySetup/index")
        },
        {
            path: "/event",
            component: () =>
                import ("@/event/create"),
        },
        {
            path: "/event/detail",
            component: () =>
                import ("@/promote/index"),
            children: [{
                path: "/event/detail/*",
                component: () =>
                    import ("@/promote/index"),
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
                import ("@/live/liveSet")
        },
        {
            path: "/event-list",
            component: () =>
                import ("@/account/eventList/index")
        }
    ]
})
export default router