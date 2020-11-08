import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// const NOT_FOUND = () => import('@/pages/login/index')

import * as components from '../appComponents'
import * as doc from '../doc'

const constantRoutes = [
    // {
    //     path: '/404',
    //     component: NOT_FOUND,
    //     hidden: true
    // },
    // {path: '*', redirect: '/404', hidden: true}
]

generateRoute(components).then(() => {})

async function generateRoute (components) {
    for (let componentsKey in components) {
        const Component = components[componentsKey]
        Component.doc = doc[Component.name]
        constantRoutes.push({
            name: Component.name,
            path: '/' + Component.name,
            component: Component,
            meta: {
                title: Component.name
            }
        })
        
    }
}

const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

export default router
