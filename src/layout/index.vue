<template>
    <div class="layout">
        <keep-alive v-if="$route.meta.cache">
            <router-view/>
        </keep-alive>
        <router-view v-else/>

        <TabBar v-if="!$route.meta.hidden" :tab="tab"/>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar.vue'

import homeUnSelected from '@/static/tab/home.png'
import homeSelected from '@/static/tab/home_selected.png'

import allUnSelected from '@/static/tab/all.png'
import allSelected from '@/static/tab/all_selected.png'

import findUnSelected from '@/static/tab/find.png'
import findSelected from '@/static/tab/find_selected.png'

import learnUnSelected from '@/static/tab/learn.png'
import learnSelected from '@/static/tab/learn_selected.png'

import mineUnSelected from '@/static/tab/mine.png'
import mineSelected from '@/static/tab/mine_selected.png'

export default {
    name: 'Layout',
    components: {
        // HomeHeader,
        TabBar
    },
    data () {
        return {
            tab: {
                color: '#7A7E83',
                selectedColor: 'rgb(51 140 255)',
                backgroundColor: 'rgba(255, 255, 255, 0.97)',
                height: '50px',
                fontSize: '10px',
                iconWidth: '24px',
                spacing: '3px',
                list: [
                    {
                        text: '首页',
                        path: '/home',
                        selected: homeSelected,
                        unselected: homeUnSelected
                    },
                    {
                        text: '找课',
                        path: '/classification',
                        selected: allSelected,
                        unselected: allUnSelected
                    },
                    {
                        text: '学习',
                        path: '/learn',
                        selected: learnSelected,
                        unselected: learnUnSelected
                    },
                    {
                        text: '广场',
                        path: '/square',
                        selected: findSelected,
                        unselected: findUnSelected
                    },
                    {
                        text: '我的',
                        path: '/mine',
                        selected: mineSelected,
                        unselected: mineUnSelected
                    },
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.layout {
}
</style>
