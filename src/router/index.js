import Vue from 'vue'
import VueRouter from 'vue-router'

//路由重复点击报错问题
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=> import('@/Home')
        },
        {
            path:"/register",
            component:()=> import("@/login/register")
        },
        {
            path:"/login",
            component:()=> import("@/login/login")
        },
        {
            path:"/info",
            component:()=> import("@/account/info/index")
        }
    ]
})
export default router