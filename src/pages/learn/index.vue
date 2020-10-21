<template>
    <div>
        <Header :title="$route.meta.title" position="left" :icons="icons" @icon-click="handlerIconClick"/>
        <div class="content">
            <div class="menu">
                <div v-for="item in menus" :key="item.text" class="menu-item" @click="handlerToPage(item.path)">
                    <img class="menu-icon" :src="item.icon" alt="">
                    <span class="menu-text">{{item.text}}</span>
                </div>
            </div>
            <div class="stat">
                <h3 class="sub-title">本周学习概况</h3>
                <div class="stat-content">
                    <div class="echarts">
                        echarts
                    </div>
                    <div class="stat-bottom">
                        <div class="stat-item">
                            <h6 class="stat-item-title">今日学习</h6>
                            <div class="stat-item-bottom">
                                <span class="number">15</span>
                                <span class="unit">分钟</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <h6 class="stat-item-title">超过平台</h6>
                            <div class="stat-item-bottom">
                                <span class="number">50</span>
                                <span class="unit">%学院</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <h6 class="stat-item-title">兑换课点</h6>
                            <div class="stat-item-bottom">
                                <span class="number">10</span>
                                <span class="unit">课点</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="sub-title">最近学习</h3>
                <div class="scroller">
                    <div class="list" :style="listStyle">
                        <div v-for="item in list" :key="item.title" class="cell">
                            <img class="logo" :src="item.logo" alt="">
                            <p class="cell-title">{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'

import calendar from '@/assets/calendar.png'

export default {
    name: 'Learn',
    components: {
        Header
    },
    data () {
        return {
            icons: [calendar],
            menus: [
                {
                    icon: require('../../assets/learn/resource.png'),
                    text: '资料',
                    path: '',
                },
                {
                    icon: require('../../assets/learn/work.png'),
                    text: '作业',
                    path: '',
                },
                {
                    icon: require('../../assets/learn/note.png'),
                    text: '笔记',
                    path: '',
                },
                {
                    icon: require('../../assets/learn/cache.png'),
                    text: '缓存',
                    path: '',
                },
            ],
            list: [
                {
                    logo: '//img4.mukewang.com/szimg/5f645f1f084f733606000338-360-202.jpg',
                    title: '新RabbitMQ精讲，项目驱动落地，分布式事务拔高'
                },
                {
                    logo: '//img4.mukewang.com/szimg/5f8821c308935e5406000338-360-202.jpg',
                    title: 'Vue3.0+TypeScript打造企业级组件库'
                },
                {
                    logo: '//img2.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg',
                    title: 'Vue3.0（正式版） + TS 仿知乎专栏企业级项目'
                },
                {
                    logo: '//img2.mukewang.com/szimg/5db6916d08d81b8b12000676-360-202.jpg',
                    title: 'React Native从入门到实战打造高质量上线App'
                },
            ]
        }
    },
    computed: {
        listStyle() {
            return `width: ${(140 + 15) * this.list.length}px`
        }
    },
    methods: {
        /**
         * icon点击事件
         * @param index icon索引
         */
        handlerIconClick (index) {
            console.log(index)
        },
        /**
         * menu点击事件
         * @param path 路径
         */
        handlerToPage (path) {
            console.log(path)
        },
    }
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.content {
    padding: 15px;
}

.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 6px #e5e5e5;
    padding: 10px 15px;
    border-radius: 4px;
}

.menu-icon {
    width: 40px;
    height: 40px;
    margin-bottom: @spacing-col-sm;
}

.menu-text {
    color: @text-color;
    font-size: 14px;
}

.sub-title {
    color: @text-color;
    font-size: @font-size-base;
    font-weight: bold;
    margin-top: @spacing-col-mini-lg;
    margin-bottom: @spacing-col-md;
}

.stat {
    .stat-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 6px #e5e5e5;
        padding: 10px 15px;
        border-radius: 4px;
    }

    .echarts {
        width: 100%;
        height: 150px;
    }

    .stat-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .stat-item {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;

            .stat-item-title {
                font-size: @font-size-sm;
                color: @text-color-disable;
                margin-bottom: @spacing-col-md;
            }

            .number {
                color: @text-color;
                font-size: @font-size-lg;
                font-weight: bold;
            }

            .unit {
                color: @text-color;
                font-size: @font-size-sm;
            }
        }
    }
}

.scroller {
    width: 100%;
    overflow: auto;
    padding-bottom: @spacing-col-md;
}

.list {
    display: flex;
    flex-direction: row;
    .cell {
        width: 140px;
        margin-right: @spacing-row-lg;
        .logo {
            border-radius: 6px;
            width: 140px;
            height: 80px;
            margin-bottom: @spacing-col-sm;
        }

        .cell-title {
            color: @text-color-grey;
            font-size: @font-size-sm;
        }
    }
}
</style>
