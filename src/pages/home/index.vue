<template>
    <div class="home">
        <Header :custom="true">
            <HomeHeader/>
        </Header>
        <div class="content">
            <van-swipe class="banner" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="banner-img" v-lazy="image"/>
                </van-swipe-item>
            </van-swipe>
            <van-swipe class="classification" indicator-color="#007aff" :loop="false">
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
                            <div class="img-wrapper">
                                <img class="recommend-img" :src="item.img" alt="">
                                <span class="has-purchase-count">{{item.purchaseCount}}人已抢购</span>
                            </div>
                            <div class="cell-right">
                                <h1 class="recommend-title"><span v-if="item.restCount"
                                                                  class="rest-count">还剩{{item.restCount}}人</span>{{item.title}}
                                </h1>
                                <div class="recommend-purchase">
                                    <div class="recommend-purchase-price">
                                        <span class="price">{{item.price | money}}</span>
                                        <span class="original-price">{{item.originalPrice}}</span>
                                    </div>
                                    <button class="recommend-purchase-btn">立即抢购</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TitleBar title="学员评价" more-text="更多评价 >"/>
                <div>
                    <div class="commons">
                        <div v-for="(item, index) in studentCommonList" :key="index" class="cell">
                            <div class="top">
                                <img class="avatar" :src="item.avatar" alt="">
                                <div class="top-right">
                                    <div class="name-time">
                                        <span class="name">{{item.name}}</span>
                                        <span class="time">{{item.time}}</span>
                                    </div>
                                    <div>
                                        <span class="star">{{item.star}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="common">
                                <p>{{item.common}}</p>
                            </div>
                            <div class="course">
                                <img class="course-img" :src="item.course.img" alt="">
                                <div class="course-info">
                                    <h3 class="course-name">{{item.course.courseName}}</h3>
                                    <p class="teacher-name">{{item.course.teacherName}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TitleBar title="猜你喜欢"/>
                <div>
                    <div class="recommend">
                        <div v-for="(item, index) in guestYouLikeList" :key="index" class="cell">
                            <div class="img-wrapper">
                                <img class="recommend-img" :src="item.img" alt="">
                                <span class="has-purchase-count">{{item.purchaseCount}}人已抢购</span>
                            </div>
                            <div class="cell-right">
                                <h1 class="recommend-title"><span v-if="item.restCount"
                                                                  class="rest-count">还剩{{item.restCount}}人</span>{{item.title}}
                                </h1>
                                <div class="recommend-purchase">
                                    <div class="recommend-purchase-price">
                                        <div>
                                            <img class="avatar" :src="item.avatar" alt="">
                                        </div>
                                        <span class="teacher-name">{{item.teacherName}}</span>
                                    </div>
                                    <span class="price">{{item.price | money}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TitleBar from '@/components/TitleBar'
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import { Swipe, SwipeItem } from 'vant'

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
                    restCount: 0
                },
                {
                    title: 'Vue2.5开发去哪儿网App',
                    subTitle: 'Vue',
                    img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                },
                {
                    title: 'Spring Cloud分布式微服务实战',
                    subTitle: 'Java',
                    img: '//img2.mukewang.com/szimg/5f583a2609dc33b412000676-360-202.png',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: null
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
            ],
            guestYouLikeList: [
                {
                    title: 'Vue3.0开发去哪儿网App',
                    subTitle: 'Vue',
                    img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 20,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    teacherName: '庞博',
                },
                {
                    title: '组成原理+操作系统+计算机网络',
                    subTitle: '计算机基础',
                    img: '//img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 0,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    teacherName: '庞博',
                },
                {
                    title: '组成原理+操作系统+计算机网络',
                    subTitle: '计算机基础',
                    img: '//img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                    price: '9.9',
                    originalPrice: 19.9,
                    purchaseCount: 3133,
                    restCount: 0,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    teacherName: '庞博',
                },
            ],
            studentCommonList: [
                {
                    name: '一只鹿',
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    time: '2018-23-22 23:32:55',
                    common: '老师特别负责，讲课逻辑十分清晰',
                    star: 5,
                    course: {
                        img: '//img.mukewang.com/5f9a71b50001f7d918720764.jpg',
                        courseName: '前端小白入门教程',
                        teacherName: 'COCO'
                    }
                },
                {
                    name: '一只鹿',
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    time: '2018-23-22 23:32:55',
                    common: '老师特别负责，讲课逻辑十分清晰',
                    star: 5,
                    course: {
                        img: '//img.mukewang.com/5f9a71b50001f7d918720764.jpg',
                        courseName: '前端小白入门教程',
                        teacherName: 'COCO'
                    }
                },
                {
                    name: '一只鹿',
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    time: '2018-23-22 23:32:55',
                    common: '老师特别负责，讲课逻辑十分清晰',
                    star: 5,
                    course: {
                        img: '//img.mukewang.com/5f9a71b50001f7d918720764.jpg',
                        courseName: '前端小白入门教程',
                        teacherName: 'COCO'
                    }
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

.home {
    padding-bottom: 50px;
}

.content {
    padding: 15px;
}

.van-swipe-item {
    height: 150px;

    img {
        width: 100%;
        height: 150px;
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

        .img-wrapper {
            position: relative;
            width: 160px;
            height: 90px;
            margin-right: @spacing-row-base;
        }

        .has-purchase-count {
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.26);
            padding: 2px @spacing-row-sm;
            font-size: @font-size-sm;
            color: @text-color-inverse;
            border-top-left-radius: @border-radius-base;
            border-bottom-right-radius: @border-radius-base;
        }

        .recommend-img {
            width: 160px;
            height: 90px;
            border-radius: @border-radius-base;
        }

        .cell-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            flex: 1;
            height: 90px;
        }

        .sub-title {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }

        .rest-count {
            font-size: @font-size-sm;
            color: @text-color-inverse;
            background: linear-gradient(100deg, #e70b57, #e95613);
            border-top-left-radius: @border-radius-base;
            border-bottom-right-radius: @border-radius-base;
            margin-right: @spacing-row-sm;
            padding: 2px @spacing-row-sm;
        }

        .recommend-title {
            font-size: @font-size-base;
            color: @text-color;
            line-height: 24px;
        }

        .recommend-purchase {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .recommend-purchase-price {
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        .original-price {
            font-size: @font-size-sm;
            color: @text-color-grey;
            text-decoration: line-through;
        }

        .price {
            font-size: @font-size-base;
            font-weight: bold;
            color: @color-error;
            margin-right: @spacing-row-sm;
        }

        .recommend-purchase-btn {
            border-radius: @border-radius-lger;
            font-size: @font-size-mid;
            color: @text-color-inverse;
            background: linear-gradient(100deg, #e70b57, #e95613);
            padding: @spacing-row-sm @spacing-row-base;
        }

        .avatar {
            width: 30px;
            height: 30px;
            margin-right: @spacing-row-sm;
            border-radius: @border-radius-circle;
        }

        .teacher-name {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }
    }
}

.commons {
    .cell {
        margin: @spacing-col-lg 0;
    }

    .top {
        display: flex;
        flex-direction: row;
        align-items: center;


        .avatar {
            width: 36px;
            height: 36px;
            margin-right: @spacing-row-sm;
            border-radius: @border-radius-circle;
        }

        .top-right {
            flex: 1;
        }

        .name-time {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: @font-size-mid;
            color: @text-color-grey;
        }

        .star {
            font-size: @font-size-mid;
            color: @text-color;
        }
    }

    .common {
        font-size: @font-size-sm;
        color: @text-color;
        margin-top: @spacing-col-md;
    }

    .course {
        background-color: @bg-color-hover;
        padding: @spacing-col-md;
        border-radius: @border-radius-base;
        display: flex;
        align-items: center;
        margin-top: @spacing-col-md;

        .course-img {
            width: 140px;
            height: 80px;
            margin-right: @spacing-row-base;
            border-radius: @border-radius-base;
        }

        .course-info {
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .course-name {
            font-size: @font-size-base;
            color: @text-color;
            font-weight: bold;
        }

        .teacher-name {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }
    }

}
</style>
