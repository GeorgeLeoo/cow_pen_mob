<template>
    <div class="verify-input">
        <input
            v-for="(i, index) in maxLength"
            :key="i"
            :ref="`vItem-${index}`"
            class="verify-item"
            type="number"
            pattern="[0-9]*"
            :maxlength="1"
            :value="value[index]"
            @input="handlerInput(index, $event)"
            @keydown="handlerKeyDown"
        />
    </div>
</template>

<script>
import utils from '../../utils/index.js'

export default {
    name: 'VerifyInput',
    props: {
        maxLength: {
            type: Number,
            default: 4
        }
    },
    data () {
        return {
            // maxLength: 4,
            focusIndex: 0,
            value: [],
        }
    },
    watch: {
        value: {
            handler (val) {
                for (let i = 0; i < this.maxLength; i++) {
                    let index = i
                    if (val[i] && this.focusIndex === index) {
                        this.focusIndex = ++index
                        if (this.focusIndex === 4) {
                            this.$emit('submit')
                            return
                        }
                        this.$refs['vItem-' + this.focusIndex][0].focus()
                        break
                    }
                }
            },
            deep: true
        }
    },
    mounted () {
        for (let i = 0; i < this.maxLength; i++) {
            this.value.push('')
        }
        this.$refs['vItem-0'][0].focus()
    },
    methods: {
        debounce: utils.debounce,
        throttle: utils.throttle,
        handlerKeyDown ({ keyCode }) {
            if (keyCode === 8) {
                if (this.focusIndex === 0) {
                    return
                }
                this.focusIndex--
                this.$refs['vItem-' + this.focusIndex][0].focus()
                this.value[this.focusIndex] = ''
            }
        },
        /**
         * 获得焦点
         * @param {Number} index 索引
         */
        handlerFocus (index) {
            this.focusIndex = index
            this.$refs['vItem-' + this.focusIndex][0].focus()
        },
        /**
         * input事件
         * @param {Number} index 索引
         * @param event
         */
        handlerInput (index, event) {
            let value = event.target.value
            if (value.length !== 0) {
                value = value.substr(value.length - 1, 1)
            }
            this.$set(this.value, index, value)
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.verify-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.verify-item {
    display: inline-block;
    width: 50px;
    border-bottom: 1px solid @border-color;
    text-align: center;
    height: @input-size-base;
    line-height: @input-size-base;
    font-weight: bold;
    font-size: @font-size-title;
}
</style>
