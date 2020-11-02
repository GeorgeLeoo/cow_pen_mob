<!--
  @Description:
  @Author: George
  @Date: 2020/11/2 10:16 下午
-->
<template>
    <span class="tag" :class="type" :style="style">
        <slot></slot>
    </span>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 12
        },
    },
    data () {
        return {}
    },
    computed: {
        style() {
            return { fontSize: this.size + 'px' }
        }
    },
    methods: {}
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.tag {
    display: inline-block;
    padding: 0 @spacing-row-sm;
}
.primary {
    background-color: @bg-color-primary-opacity;
    color: @color-primary;
}

.error {
    background-color: @bg-color-error-opacity;
    color: @color-error;
}
</style>
