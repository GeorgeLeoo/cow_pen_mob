<template>
    <div class="publish-post">
        <Header :back="true" :title="$route.meta.title" :title-size="20" position="center">
            <span slot="right" class="send-btn">发送</span>
        </Header>
        <div class="page">
            <div class="page-top">
                <div>
                    <span class="title">选择小组</span>
                </div>
                <span class="hint">选择小组可以让更多的人看到哦～ ></span>
            </div>
            <textarea ref="post" v-model="post" class="post" placeholder="说点什么吧"></textarea>
            <div class="page-bottom">
                bottom
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: "PublishPost",
    components: {
        Header
    },
    props: {},
    data() {
        return {
            post: '',
        }
    },
    computed: {},
    watch: {},
    filters: {},
    mounted() {
        // this.keyboard()
    },
    methods: {
        // 获取到焦点元素滚动到可视区
        activeElementScrollIntoView(activeElement, delay) {
            var editable = activeElement.getAttribute('contenteditable')

            // 输入框、textarea或富文本获取焦点后没有将该元素滚动到可视区
            if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || editable === '' || editable) {
                setTimeout(function () {
                    activeElement.scrollIntoView();
                }, delay)
            }
        },
        keyboard() {


            this.listenKeybord(this.$refs.post);
        },
        // 监听输入框的软键盘弹起和收起事件
        listenKeybord($input) {
            // 判断设备类型
            var judgeDeviceType =  function () {
                var ua = window.navigator.userAgent.toLocaleLowerCase();
                var isIOS = /iphone|ipad|ipod/.test(ua);
                var isAndroid = /android/.test(ua);

                return {
                    isIOS: isIOS,
                    isAndroid: isAndroid
                }
            }()

            if (judgeDeviceType.isIOS) {
                // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
                $input.addEventListener('focus',  () => {
                    console.log('IOS 键盘弹起啦！');
                    // IOS 键盘弹起后操作
                    this.activeElementScrollIntoView($input, 1000);
                }, false)

                // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，
                $input.addEventListener('blur', () => {
                    console.log('IOS 键盘收起啦！');
                    // IOS 键盘收起后操作
                })
            }

            // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
            if (judgeDeviceType.isAndroid) {
                var originHeight = document.documentElement.clientHeight || document.body.clientHeight;

                window.addEventListener('resize', function () {
                    var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    if (originHeight < resizeHeight) {
                        console.log('Android 键盘收起啦！');
                        // Android 键盘收起后操作
                        this.activeElementScrollIntoView($input, 1000);
                    } else {
                        console.log('Android 键盘弹起啦！');
                        // Android 键盘弹起后操作
                    }

                    originHeight = resizeHeight;
                }, false)
            }
        }
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.send-btn {
    font-size: @font-size-sm;
    color: @text-color-grey;
    border: 1px solid @text-color-grey;
    border-radius: @border-radius-lger;
    padding: @spacing-col-sm @spacing-row-lg;
}

.post {
    width: 100%;
    min-height: 140px;
    border-width: 0;
    padding: @spacing-row-lg 0;
    font-size: @font-size-base;
    color: @text-color;
    outline: none;
}

.page {
    padding: @spacing-row-base;
}

.page-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: @bg-color-grey;
    border-radius: @border-radius-sm;
    padding: @spacing-row-lg;

    .title {
        font-size: @font-size-base;
        color: @text-color;
    }

    .hint {
        font-size: @font-size-mid;
        color: @text-color-grey;
    }
}

.page-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #007aff;
}
</style>