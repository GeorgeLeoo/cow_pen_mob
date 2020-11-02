<template>
    <div class="mine">
        <Header position="left" background="transparent" :icons="icons" @icon-click="handlerIconClick"/>
        <div class="content">
            <div class="top">
                <img class="avatar" :src="avatarUrl" alt="">
                <div class="top-right">
                    <span class="nickname">NEMO</span>
                    <span>Level 4</span>
                </div>
            </div>
            <div class="card flex">
                <div class="main-item">
                    <img class="main-icon" src="../../assets/order.png" alt="">
                    <span class="menu-text">我的订单</span>
                </div>
                <div class="main-item">
                    <img class="main-icon" src="../../assets/work.png" alt="">
                    <span class="menu-text">我的作业</span>
                </div>
                <div class="main-item">
                    <img class="main-icon" src="../../assets/collect.png" alt="">
                    <span class="menu-text">我的收藏</span>
                </div>
                <div class="main-item">
                    <img class="main-icon" src="../../assets/download.png" alt="">
                    <span class="menu-text">我的缓存</span>
                </div>
            </div>
            <div class="card">
                <div v-for="item in subList[0]" :key="item.text" class="sub-item" @click="handlerToPage(item.path)">
                    <div class="sub-item-left">
                        <img class="sub-icon" :src="item.icon" alt="">
                        <span class="menu-text">{{ item.text }}</span>
                    </div>
                    <div class="sub-item-right">
                        <img class="more-icon" src="../../assets/right_arrow.png" alt="">
                    </div>
                </div>
            </div>
            <div class="card">
                <div v-for="item in subList[1]" :key="item.text" class="sub-item" @click="handlerToPage(item.path)">
                    <div class="sub-item-left">
                        <img class="sub-icon" :src="item.icon" alt="">
                        <span class="menu-text">{{ item.text }}</span>
                    </div>
                    <div class="sub-item-right">
                        <img class="more-icon" src="../../assets/right_arrow.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import setting from '@/assets/setting.png'
import msg from '@/assets/msg.png'

export default {
    name: 'Mine',
    components: {
        Header
    },
    data () {
        return {
            icons: [setting, msg],
            avatarUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg',
            subList: [
                [
                    {
                        icon: require('../../assets/money.png'),
                        text: '余额',
                        path: ''
                    },
                    {
                        icon: require('../../assets/coupon.png'),
                        text: '优惠券',
                        path: ''
                    },
                    {
                        icon: require('../../assets/course.png'),
                        text: '课程分销',
                        path: ''
                    },
                ],
                [
                    {
                        icon: require('../../assets/flow.png'),
                        text: '免流量特权',
                        path: ''
                    },
                    {
                        icon: require('../../assets/feedback.png'),
                        text: '意见反馈',
                        path: ''
                    },
                ],
            ]
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
         *
         * @param path
         */
        handlerToPage (path) {
            console.log(path)
        }
    }
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.mine {
    height: 100vh;
    background-image: linear-gradient(30deg, #fff, #d2e3f8);
}

.content {
    padding: 0 15px;
}

.top {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: @spacing-col-lg;
    margin-bottom: @spacing-col-mini-lg;
}

.top-right {
    display: flex;
    flex-direction: column;
}

.avatar {
    border-radius: 100%;
    border: 2px solid #fff;
    width: 80px;
    height: 80px;
    margin-right: @spacing-row-base;
}

.nickname {
    font-size: @font-size-lg;
    color: @text-color;
}

.card {
    background: #fff;
    box-shadow: 0 0 10px #d2e3f8;
    border-radius: 8px;
    margin-bottom: @spacing-col-lg;
    padding: 15px;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}

.main-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.main-icon {
    width: 40px;
    height: 40px;
    margin-bottom: @spacing-col-sm;
}

.sub-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 0;
}

.sub-item-left {
    display: flex;
    align-items: center;
    flex: 1;
}

.sub-item-right {
    display: flex;
    align-items: center;
}

.sub-icon {
    width: 22px;
    height: 22px;
    margin-right: @spacing-row-base;
}

.more-icon {
    width: 16px;
    height: 16px;
}

.menu-text {
    color: @text-color;
    font-size: 14px;
}
</style>
