<template>
    <div>
        <Header class="header-bg" :custom="true">
            <HomeHeader class="header-bg-inner"/>
        </Header>
        <div class="content">
            <van-swipe class="banner" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image"/>
                </van-swipe-item>
            </van-swipe>
            <van-swipe class="classification" indicator-color="#007aff">
                <van-swipe-item v-for="(classification, index) in classificationList" :key="index"
                                class="classification-content">
                    <div v-for="(item, index) in classification" :key="index" class="classification-item">
                        <img v-lazy="item.img" class="classification-img"/>
                        <span>{{item.text}}</span>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <div class="quick-area">
                <div class="left">
                    新人有礼
                </div>
                <div class="right">
                    <div>
                        限时免费
                    </div>
                    <div>
                        精品毫克
                    </div>
                </div>
            </div>
            <div>
                <TitleBar title="直播好课" more-text="更多直播 >"/>
                <div class="scroller">
                    <div class="list" :style="listStyle">
                        <div v-for="item in list" :key="item.title" class="cell">
                            <img class="logo" :src="item.logo" alt="">
                            <p class="cell-title">{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TitleBar title="火热抢购" more-text="更多抢购 >"/>
                <div>
                    <div class="recommend">
                        <div v-for="(item, index) in recommendList" :key="index" class="cell">
                            <img class="recommend-img" :src="item.img" alt="">
                            <div class="cell-right">
                                <h1 class="recommend-title">{{item.title}}</h1>
                                <h2 class="sub-title">{{item.subTitle}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import TitleBar from '@/components/TitleBar'
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
    name: 'Home',
    components: {
        Header,
        HomeHeader,
        TitleBar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    data () {
        return {
            images: [
                '//img.mukewang.com/5f9a71b50001f7d918720764.jpg',
                '//img.mukewang.com/5f9a70870001f4f918720764.jpg',
                '//img.mukewang.com/5f9a726500017a1c18720764.jpg'
            ],
            classificationList: [
                [
                    {
                        text: '程序开发',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '设计创作',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '出国留学',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '升学考试',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '职场思考',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                ],
                [
                    {
                        text: '美食制作',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '职场思考',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '设计创作',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '升学考试',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                    {
                        text: '职场思考',
                        img: require('../../assets/order.png'),
                        path: ''
                    },
                ],
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
            ],
            recommendList: [
                {
                    title: 'Vue3.0开发去哪儿网App',
                    subTitle: 'Vue',
                    img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20
                },
                {
                    title: '组成原理+操作系统+计算机网络',
                    subTitle: '计算机基础',
                    img: '//img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20
                },
                {
                    title: 'Vue2.5开发去哪儿网App',
                    subTitle: 'Vue',
                    img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20
                },
                {
                    title: 'Spring Cloud分布式微服务实战',
                    subTitle: 'Java',
                    img: '//img2.mukewang.com/szimg/5f583a2609dc33b412000676-360-202.png',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20
                },
                {
                    title: 'Vue2.5 开发去哪儿网App',
                    subTitle: 'Vue',
                    img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20
                },
            ]
        }
    },
    computed: {
        listStyle () {
            return `width: ${(300 + 15) * this.list.length}px`
        }
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.content {
    padding: 15px;
}

.van-swipe-item {
    height: 150px;

    img {
        border-radius: 10px;

    }
}

.classification {
    margin-top: 10px;
    text-align: center;
    height: 84px;

    .classification-content {
        display: flex;
        flex-direction: row;
    }

    .classification-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;

        span {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }

        .classification-img {
            width: 30px;
            height: 30px;
            margin-bottom: @spacing-col-base;
        }
    }

    /deep/ .van-swipe__indicator {
        width: 40px;
        height: 4px;
        border-radius: 0;
    }
}

.quick-area {
    display: flex;
    flex-direction: row;
    margin-top: @spacing-row-base;

    .left {
        background-color: #007aff;
        margin-right: @spacing-row-base;
        width: 130px;
        height: 150px;
        border-radius: 4px;
    }

    .right {
        display: flex;
        flex-direction: column;
        flex: 1;

        div {
            height: 70px;
            background-color: #c8c7cc;
            border-radius: 4px;
        }

        div:first-child {
            margin-bottom: @spacing-row-base;
            background: #dd524d;
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
        width: 300px;
        margin-right: @spacing-row-lg;

        .logo {
            border-radius: 6px;
            width: 300px;
            height: 150px;
            margin-bottom: @spacing-col-sm;
        }

        .cell-title {
            color: @text-color;
            font-size: @font-size-base;
            font-weight: bold;
        }
    }
}

.recommend-bg {
    background-color: @bg-color;
}

.recommend {
    .cell {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: @spacing-col-lg 0;

        .recommend-img {
            width: 160px;
            height: 100px;
            border-radius: @border-radius-lg;
            margin: 0 @spacing-row-base;
        }

        .cell-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }

        .sub-title {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }

        .recommend-title {
            font-size: @font-size-base;
            color: @text-color;
        }
    }
}
</style>
