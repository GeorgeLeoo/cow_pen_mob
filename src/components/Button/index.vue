<template>
    <div class="color" :class="[block ? 'block': 'inline-block', circle ? 'circle' : '']" @click="handlerClick">
        <div class="button" :class="[size]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        size: {
            type: String,
            default: 'middle'
        },
        block: {
            type: Boolean,
            default: true
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {}
    },
    mounted () {},
    methods: {
        handlerClick () {
            this.$emit('trigger', 'params1', 'params2')
        }
    }
}
</script>

<style lang="less">
@import '../../theme/index.less';

.color {
    background-color: @color-primary;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
    padding: 0 10px;
}

.button {
    display: flex;
    color: @text-color-inverse;
    font-size: @font-size-subtitle;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: @border-radius-base;
}

.circle {
    border-radius: 50px;
}

.large {
}

.middle {
}

.small {
}
</style>
