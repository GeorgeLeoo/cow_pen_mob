import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Layout = () => import('@/layout/index')

const Login = () => import('@/pages/login/index')
const LoginNext = () => import('@/pages/login-next/index')
const Home = () => import('@/pages/home/index')
const Classification = () => import('@/pages/classification/index')
const Learn = () => import('@/pages/learn/index')
const Square = () => import('@/pages/square/index')
const Mine = () => import('@/pages/mine/index')

const NOT_FOUND = () => import('@/pages/login/index')

const constantRoutes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        hidden: true,
        meta: { title: '登录' }
    },
    {
        name: 'login-next',
        path: '/login-next',
        component: LoginNext,
        hidden: true,
        meta: { title: '登录' }
    },
    {
        name: 'index',
        path: '/',
        component: Layout,
        redirect: '/home',
        meta: {
            title: '首页',
        },
        children: [
            {
                name: 'home',
                path: '/home',
                component: Home,
                meta: {
                    title: '首页',
                }
            },
            {
                name: 'classification',
                path: '/classification',
                component: Classification,
                meta: {
                    title: '找课',
                }
            },
            {
                name: 'learn',
                path: '/learn',
                component: Learn,
                meta: {
                    title: '学习',
                }
            },
            {
                name: 'square',
                path: '/square',
                component: Square,
                meta: {
                    title: '广场',
                }
            },
            {
                name: 'mine',
                path: '/mine',
                component: Mine,
                meta: {
                    title: '我的',
                }
            },
        ]
    },
    // {
    //     path: '/redirect',
    //     component: Layout,
    //     hidden: true,
    //     children: [
    //         {
    //             path: '/redirect/:path(.*)',
    //             component: () => import('@/views/redirect/index')
    //         }
    //     ]
    // },
    // {
    //     path: '/auth-redirect',
    //     component: () => import('@/views/login/auth-redirect'),
    //     hidden: true
    // },
    {
        path: '/404',
        component: NOT_FOUND,
        hidden: true
    },
    // {
    //     path: '/401',
    //     component: () => import('@/views/error-page/401'),
    //     hidden: true
    // },
    { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

export default router