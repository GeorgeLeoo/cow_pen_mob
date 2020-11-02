<template>
    <div>
        <Header :theme="theme" :back="true" :title="title" :title-size="20" :hide-title="hideTitle" :background="background"
                position="left" :icons="icons"
                @icon-click="handlerIconClick"/>
        <div class="top">
            <p class="title">{{title}}</p>
            <p class="group-count">小组成员 1996人 ></p>
            <div class="footer">
                <div class="active-wrapper">
                    <div class="avatars">
                        <img v-for="(avatar, index) in activeAvatars" :key="index" :src="avatar" alt=""
                             class="avatar"
                             :class="[index !== 0] ? 'avatar-offset-left': ''">
                    </div>
                    <span class="text">组内活跃榜 ></span>
                </div>
                <button class="join-btn">加入</button>
            </div>
        </div>
        <div class="page">
            <SwitchTab :active.sync="activeTab" :data="tabList"/>
            <div class="count-switch">
                <span class="total-count">2.4万条动态</span>
                <SwitchTabButton :data="switchTabList" :active="activeSwitchTab"/>
            </div>
            <div class="sticky-top">
                <div v-for="(item, index) in topList" :key="index" class="sticky-top-item">
                    <Tag :type="topListTypeMap[item.type].type" :size="12">{{topListTypeMap[item.type].text}}</Tag>
                    <div class="content">
                        <span class="text">【{{item.title}}】</span>
                        <span class="text">{{item.content}}</span>
                    </div>
                </div>
            </div>
            <div class="chat-list">
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        </div>
        <FloatingButton/>
    </div>
</template>

<script>
import SwitchTab from '@/components/SwitchTab'
import SwitchTabButton from '@/components/SwitchTabButton'
import ChatItem from '@/components/ChatItem'
import Tag from '@/components/Tag'
import Header from '@/components/Header'
import searchLight from '@/assets/search-white.png'
import moreLight from '@/assets/more-vertical-white.png'
import searchDark from '@/assets/search-dark.png'
import moreDark from '@/assets/more-vertical-dark.png'
import FloatingButton from '@/components/FloatingButton'

export default {
    name: 'Group',
    components: {
        SwitchTab,
        SwitchTabButton,
        ChatItem,
        Tag,
        Header,
        FloatingButton,
    },
    props: {},
    data () {
        return {
            icons: [searchLight, moreLight],
            tabList: [
                {
                    text: '全部主题',
                    active: 'all',
                },
                {
                    text: '精华主题',
                    active: 'essence',
                },
                {
                    text: '作业打卡',
                    active: 'work',
                },
                {
                    text: '文件下载',
                    active: 'file',
                },
            ],
            activeTab: 'all',
            switchTabList: [
                {
                    text: '推荐',
                    active: 'recommend',
                },
                {
                    text: '最热',
                    active: 'hottest',
                },
                {
                    text: '最新',
                    active: 'latest',
                },
            ],
            activeSwitchTab: 'recommend',
            topList: [
                {
                    type: 'sticky-top',
                    title: '小组介绍',
                    content: '本小组建立的初衷是希望一群志同道合的人来一起打卡，学习',
                },
                {
                    type: 'sticky-top',
                    title: '第3期',
                    content: '本小组建立的初衷是希望一群志同道合的人来一起打卡，学习',
                },
                {
                    type: 'active',
                    title: '作业打卡',
                    content: '本小组建立的初衷是希望一群志同道合的人来一起打卡，学习',
                },
            ],
            topListTypeMap: {
                'sticky-top': {
                    text: '置顶',
                    type: 'primary'
                },
                'active': {
                    text: '活动',
                    type: 'error'
                },
            },
            activeAvatars: [
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
            ],
            background: 'none',
            theme: 'light',
            title: '前端100天训练打卡小组',
            hideTitle: true
        }
    },
    computed: {},
    watch: {},
    filters: {},
    created () {
    },
    mounted () {
        document.addEventListener('scroll', () => {
            if (window.pageYOffset > 40) {
                this.background = 'rgba(255,255,255,0.94)'
                this.theme = 'dark'
                this.icons = [searchDark, moreDark]
                this.hideTitle = false
            } else {
                this.background = 'none'
                this.theme = 'light'
                this.icons = [searchLight, moreLight]
                this.hideTitle = true
            }
        }, true)
    },
    methods: {
        handlerIconClick () {}
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';


.top {
    background-color: #007aff;
    margin-top: -@spacing-col-supper-lg;
    padding: @spacing-col-supper-lg @spacing-row-lg 50px;

    .title {
        font-size: @font-size-lg;
        color: @text-color-inverse;
        font-weight: bold;
        margin-top: @spacing-col-md;
    }

    .group-count {
        font-size: @font-size-mid;
        color: @text-color-inverse;
    }

    .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: @spacing-col-lg;
    }

    .join-btn {
        font-size: @font-size-mid;
        color: @color-primary;
        border-radius: 50px;
        padding: @spacing-col-sm @spacing-row-lg;
        box-shadow: 0 0 6px rgba(0, 122, 255, 0.4);
    }

    .active-wrapper {
        background-color: rgba(0, 0, 0, 0.3);
        padding: @spacing-row-sm @spacing-row-base;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 50px;

        .avatars {
            padding-left: @spacing-row-base;
            padding-right: @spacing-row-base;
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        .avatar {
            width: 34px;
            height: 34px;
            border-radius: @border-radius-circle;
            border: 2px solid @bg-color;
        }

        .join-count {
            font-size: @font-size-sm;
            color: @text-color-inverse;
            margin-bottom: @spacing-col-supper-lg;
        }

        .join-btn {
            width: 70px;
            font-size: @font-size-sm;
            color: @text-color-inverse;
            padding: @spacing-col-sm @spacing-row-base;
            background-color: rgba(96, 96, 96, 0.3);
            border-radius: 40px;
        }

        .avatar-offset-left {
            margin-left: -@spacing-row-base;
        }

        .text {
            font-size: @font-size-sm;
            color: @text-color-inverse;
        }
    }
}

.page {
    padding: @spacing-row-lg;
    border-top-left-radius: @border-radius-lger;
    border-top-right-radius: @border-radius-lger;
    position: relative;
    top: -@spacing-col-lg;
    z-index: 9;
    background-color: @bg-color;

    .count-switch {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: @spacing-col-base;
        margin-bottom: @spacing-col-sm;
    }

    .total-count {
        font-size: @font-size-mid;
        font-weight: bold;
    }

    .sticky-top {
        overflow: auto;
        margin-bottom: @spacing-col-md;

        .sticky-top-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: @spacing-col-md;

            .content {
                flex: 1;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                font-size: @font-size-mid;
                color: @text-color;
            }
        }
    }
}

</style>
