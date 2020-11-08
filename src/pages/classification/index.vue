<template>
    <div class="classification">
        <Header :custom="true">
            <HomeHeader/>
        </Header>
        <div class="content">
            <div class="content-left">
                <p
                    v-for="(item, index) in menuList" :key="index" class="left-title"
                    :class="[menuIndex === index ? 'menu-title-select' : 'menu-title']"
                    @click="handlerSelectMenu(index)">
                    {{item.title}}</p>
            </div>
            <div class="content-right" :class="[menuList[menuIndex].type === 'recommend' ? 'recommend-bg' : '']">
                <img v-if="menuList[menuIndex].img" class="baner" :src="menuList[menuIndex].img" alt="">
                <template v-if="menuList[menuIndex].type === 'recommend'">
                    <div class="recommend">
                        <div v-for="(item, index) in menuList[menuIndex].children" :key="index" class="cell">
                            <img class="recommend-img" :src="item.img" alt="">
                            <div class="cell-right">
                                <h1 class="title">{{item.title}}</h1>
                                <h2 class="sub-title">{{item.subTitle}}</h2>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div v-for="item in menuList[menuIndex].children" :key="item.title" class="card">
                        <h1 class="title">{{item.title}}</h1>
                        <div class="card-item">
                            <span v-for="title in item.children" :key="title.title" class="tag">{{title.title}}</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import HomeHeader from '@/components/HomeHeader/HomeHeader'

export default {
    name: 'Classification',
    components: {
        Header,
        HomeHeader
    },
    data () {
        return {
            hotKey: '大前端课程',
            menuIndex: 0,
            menuList: [
                {
                    title: '精品推荐',
                    img: '//img.mukewang.com/5f8cf95c0001dfa918720764.jpg',
                    type: 'recommend',
                    children: [
                        {
                            title: 'Vue3.0开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                        {
                            title: '组成原理+操作系统+计算机网络',
                            subTitle: '计算机基础',
                            img: '//img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'
                        },
                        {
                            title: 'Vue2.5开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                        {
                            title: 'Spring Cloud分布式微服务实战',
                            subTitle: 'Java',
                            img: '//img2.mukewang.com/szimg/5f583a2609dc33b412000676-360-202.png'
                        },
                        {
                            title: 'Vue2.5 开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                        {
                            title: 'Vue3.0开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                        {
                            title: '组成原理+操作系统+计算机网络',
                            subTitle: '计算机基础',
                            img: '//img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'
                        },
                        {
                            title: 'Vue2.50开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                        {
                            title: 'Spring Cloud分布式微服务实战',
                            subTitle: 'Java',
                            img: '//img2.mukewang.com/szimg/5f583a2609dc33b412000676-360-202.png'
                        },
                        {
                            title: 'Vue2.5开发去哪儿网App',
                            subTitle: 'Vue',
                            img: '//img4.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg'
                        },
                    ]
                },
                {
                    title: '互联网技术',
                    img: '//img4.mukewang.com/szimg/5f8821c308935e5406000338-360-202.jpg',
                    children: [
                        {
                            title: '互联网产品',
                            children: [
                                {
                                    title: '电子竞技'
                                },
                                {
                                    title: '产品策划'
                                },
                                {
                                    title: '产品运营'
                                },
                                {
                                    title: '新媒体营销'
                                },
                                {
                                    title: 'SEO'
                                },
                                {
                                    title: 'SEM'
                                },
                                {
                                    title: '游戏策划'
                                },
                                {
                                    title: '游戏运营'
                                },
                                {
                                    title: '网络营销理论'
                                },
                            ]
                        },
                        {
                            title: '编程语言',
                            children: [
                                { title: 'Python' },
                                { title: 'Java' },
                                { title: 'HTML' },
                                { title: 'Go语言' },
                                { title: 'PHP' },
                                { title: 'C/C++' },
                                { title: 'C#/.NET' },
                                { title: 'unity引擎' },
                            ]
                        },
                        {
                            title: '前端开发',
                            children: [
                                { title: 'HTML' },
                                { title: 'CSS' },
                                { title: 'JavaScript' },
                                { title: 'VueJs' },
                                { title: 'React' },
                                { title: 'Webpack' },
                                { title: '前端优化' },
                                { title: '实战课程' },
                            ]
                        },
                        {
                            title: 'Java开发',
                            children: [
                                { title: 'Java第一阶段' },
                                { title: 'Java第二阶段' },
                                { title: 'Java第三阶段' },
                                { title: 'Java进阶' },
                                { title: 'Java精通' },
                                { title: '实战课程' },
                                { title: 'Spring框架' },
                                { title: 'SSM' },
                            ]
                        },
                    ]
                },

                {
                    title: '兴趣生活',
                    img: '//img2.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg',
                    children: [
                        {
                            title: '前端开发',
                            children: [
                                { title: 'HTML' },
                                { title: 'CSS' },
                                { title: 'JavaScript' },
                                { title: 'VueJs' },
                                { title: 'React' },
                                { title: 'Webpack' },
                                { title: '前端优化' },
                                { title: '实战课程' },
                            ]
                        },
                        {
                            title: 'Java开发',
                            children: [
                                { title: 'Java第一阶段' },
                                { title: 'Java第二阶段' },
                                { title: 'Java第三阶段' },
                                { title: 'Java进阶' },
                                { title: 'Java精通' },
                                { title: '实战课程' },
                                { title: 'Spring框架' },
                                { title: 'SSM' },
                            ]
                        },
                    ]
                },
                {
                    title: '设计创意',
                    children: []
                },
                {
                    title: '电商运营',
                    children: []
                },
                {
                    title: '职业考试',
                    children: []
                },
                {
                    title: '升学教育',
                    children: []
                },
                {
                    title: '语言学习',
                    children: []
                },
                {
                    title: '升学教育',
                    children: []
                },
                {
                    title: '兴趣生活',
                    children: []
                },
                {
                    title: '语言学习',
                    children: []
                },
                {
                    title: '升学教育',
                    children: []
                },
                {
                    title: '兴趣生活',
                    children: []
                },
                {
                    title: '语言学习',
                    children: []
                },
                {
                    title: '升学教育',
                    children: []
                },
                {
                    title: '兴趣生活',
                    children: []
                },
                {
                    title: '语言学习',
                    children: []
                },
                {
                    title: '升学教育',
                    children: []
                },
                {
                    title: '兴趣生活',
                    children: []
                },
            ]
        }
    },
    methods: {
        handlerSearch () {
        },
        handlerSelectMenu (index) {
            this.menuIndex = index
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.classification {
    height: 100vh;
    overflow: hidden;
}

.header {
    height: @header-height;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    background-color: @bg-color;
}

.content {
    display: flex;
    flex-direction: row;
    background-color: @bg-color-grey;
    padding-bottom: 50px;
}

.content-left {
    width: 110px;
    height: calc(100vh - 100px);
    padding: 4px 6px;
    margin-right: @spacing-row-base;
    background-color: @bg-color;
    overflow: auto;
}

.left-title {
    font-size: @font-size-sm;
    padding: 6px 15px;
    border-radius: 50px;
    margin-bottom: @spacing-col-base;
    text-align: center;
}

.menu-title-select {
    background-color: @color-primary;
    color: @text-color-inverse;
}

.menu-title {
    background-color: @bg-color;
    color: @text-color-grey;
}

.content-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: @spacing-row-base;
    height: calc(100vh - 100px);
    overflow: auto;

    .baner {
        width: 100%;
        height: 100px;
        border-radius: @border-radius-lg;
        margin-bottom: @spacing-col-base;
    }

    .card {
        background-color: @bg-color;
        border-radius: @border-radius-base;
        padding: @spacing-col-base;
        margin: @spacing-col-sm 0;
    }

    .title {
        font-size: @font-size-lg;
        color: @text-color;
        margin-bottom: @spacing-col-md;
    }

    .card-item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .tag {
        border: 1px solid @border-color;
        border-radius: 20px;
        margin-right: @spacing-row-base;
        font-size: @font-size-sm;
        padding: 2px 8px;
        color: @text-color-grey;
        margin-bottom: 10px;
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
            width: 46%;
            height: 80px;
            border-radius: @border-radius-lg;
            margin: 0 @spacing-row-base;
        }

        .cell-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .sub-title {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }

        .title {
            font-size: @font-size-base;
            color: @text-color;
        }
    }
}
</style>
