<template>
    <div class="title-bar">
        <h3 class="title">{{title}}</h3>
        <span class="more" @click="handlerMore">{{moreText}}</span>
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
    components: {},
    props: {
        title: {
            type: String,
            default: ''
        },
        moreText: {
            type: String,
            default: ''
        },
    },
    data () {
        return {}
    },
    computed: {},
    watch: {},
    filters: {},
    created () {
    },
    methods: {
        handlerMore() {
            this.$emit('more')
        }
    },
}
</script>


<style lang="less" scoped>
@import '../../theme/index.less';

.title-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: @spacing-col-lg;
    margin-bottom: @spacing-col-md;

    .title {
        color: @text-color;
        font-size: @font-size-base;
        font-weight: bold;
    }


    .more {
        color: @text-color-grey;
        font-size: @font-size-sm;
    }
}
</style>
