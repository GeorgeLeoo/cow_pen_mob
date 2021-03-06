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
const Group = () => import('@/pages/group/index')
const PublishPost = () => import('@/pages/publish-post/index')

const NOT_FOUND = () => import('@/pages/login/index')

const constantRoutes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            title: '登录',
            hidden: true,
        }
    },
    {
        name: 'login-next',
        path: '/login-next',
        component: LoginNext,
        meta: {
            title: '登录',
            hidden: true,
        }
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
                    cache: true,
                    hidden: false,
                }
            },
            {
                name: 'classification',
                path: '/classification',
                component: Classification,
                meta: {
                    title: '找课',
                    cache: true,
                    hidden: false,
                }
            },
            {
                name: 'learn',
                path: '/learn',
                component: Learn,
                meta: {
                    title: '学习',
                    cache: true,
                    hidden: false,
                }
            },
            {
                name: 'square',
                path: '/square',
                component: Square,
                meta: {
                    title: '广场',
                    cache: true,
                    hidden: false,
                }
            },
            {
                name: 'mine',
                path: '/mine',
                component: Mine,
                meta: {
                    title: '我的',
                    cache: true,
                    hidden: false,
                }
            },
            {
                name: 'group',
                path: '/group',
                component: Group,
                meta: {
                    title: '小组',
                    hidden: true,
                },
            },
            {
                name: 'publish-post',
                path: '/publish-post',
                component: PublishPost,
                meta: {
                    title: '发布',
                    hidden: true,
                },
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
    {path: '*', redirect: '/404', hidden: true}
]

const router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

export default router
