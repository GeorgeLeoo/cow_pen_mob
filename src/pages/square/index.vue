<template>
    <div>
        <Header :title="$route.meta.title" position="left" :icons="icons" @icon-click="handlerIconClick"/>
        <div class="page">
            <TitleBar title="推荐小组" more-text="更多小组 >"></TitleBar>
            <div class="scroller">
                <div class="recommend" :style="recommendStyle">
                    <div v-for="(item, index) in recommendList" :key="index" class="recommend-item">
                        <h3 class="title">{{item.title}}</h3>
                        <div class="avatars">
                            <img v-for="(avatar, index) in item.avatars" :key="index" :src="avatar" alt=""
                                 class="avatar"
                                 :class="[index !== 0] ? 'avatar-offset-left': ''">
                        </div>
                        <span class="join-count">{{item.joinCount}}人参加</span>
                        <span class="join-btn" @click="handlerToJoin">马上参加</span>
                    </div>
                </div>
            </div>
            <TitleBar title="热门话题" more-text="更多话题 >"></TitleBar>
            <div class="hot-discuss">
                <div v-for="(item, index) in discussList" :key="index" class="hot-discuss-item">
                    <div class="left">
                        <span class="char">#</span>
                        <span class="title">{{item.title}}</span>
                    </div>
                    <span class="count">{{item.count}}人热议</span>
                </div>
            </div>
            <TitleBar title="大家再聊"></TitleBar>
            <div class="chat-list">
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        </div>
        <FloatingButton @click.native="handlerToPost"/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import searchIcon from '@/assets/search-icon.png'
import notice from '@/assets/notice.png'
import ChatItem from '@/components/ChatItem'
import FloatingButton from '@/components/FloatingButton'
import TitleBar from '@/components/TitleBar'

export default {
    name: 'Square',
    components: {
        Header,
        ChatItem,
        FloatingButton,
        TitleBar,
    },
    data () {
        return {
            icons: [searchIcon, notice],
            recommendList: [
                {
                    title: '前端100天训练打卡小组',
                    joinCount: 1996,
                    avatars: [
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    ]
                },
                {
                    title: 'Java300天训练打卡小组',
                    joinCount: 196,
                    avatars: [
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    ]
                },
                {
                    title: 'PHP120天训练打卡小组',
                    joinCount: 996,
                    avatars: [
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
                    ]
                },
            ],
            discussList: [
                {
                    title: '圣诞节啊圣诞节啊',
                    count: 1233
                },
                {
                    title: '圣诞节啊圣诞节啊就圣诞节啊',
                    count: 1233
                },
                {
                    title: '圣诞节啊圣诞节啊就圣诞节啊就圣诞节啊就圣诞节啊就圣诞节啊就',
                    count: 1233
                },
            ]
        }
    },
    computed: {
        recommendStyle () {
            return {
                width: this.recommendList.length * 160 + 'px'
            }
        }
    },
    methods: {
        handlerToPost() {
            this.$router.push({name: 'publish-post'})
        },
        handlerToJoin () {
            this.$router.push({ name: 'group' })
        },
        /**
         * icon点击事件
         * @param index icon索引
         */
        handlerIconClick (index) {
            console.log(index)
        }
    }
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.header {
    //background-color: rgba(255, 255, 255, 0.98);
}

.page {
    padding: @spacing-row-lg @spacing-row-lg @spacing-col-supper-lger;
}

.scroller {
    overflow: auto;
}

.recommend {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .recommend-item {
        width: 160px;
        border-radius: @border-radius-base;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #007aff;
        padding: @spacing-row-base;
        margin-right: @spacing-row-base;

        .title {
            font-size: @font-size-base;
            color: @text-color-inverse;
            font-weight: bold;
            line-height: 26px;
            margin-bottom: @spacing-col-md;
        }

        .avatars {
            padding-left: @spacing-row-base;
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
    }

    .recommend-item:nth-child(2) {
        background-color: #4cd964;
    }

    .recommend-item:nth-child(3) {
        background-color: #dd32e9;
    }
}

.hot-discuss {
    .hot-discuss-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 30px;

        .left {
            display: flex;
            flex-direction: row;
            align-items: center;

            .char {
                display: inline-block;
                width: 16px;
                height: 16px;
                text-align: center;
                line-height: 16px;
                font-size: @font-size-sm;
                font-weight: bold;
                color: @color-primary;
                background-color: rgba(0, 122, 255, 0.2);
                border-radius: @border-radius-circle;
                margin-right: @spacing-row-sm;
            }

            .title {
                display: inline-block;
                font-size: @font-size-sm;
                color: @text-color;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 240px;
            }
        }

        .count {
            font-size: @font-size-sm;
            color: @text-color-grey;
        }
    }
}

</style>
