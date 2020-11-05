<template>
    <div v-if="!custom" class="header-wrapper" :style="style">
        <div v-if="position === 'left'" class="header header-left">
            <div class="center">
                <img v-if="back" class="back-icon" :src="backIcon" @click="handlerBack">
                <span class="title title-left" :style="titleStyle">{{title}}</span>
            </div>
            <div class="icon-group">
                <img v-for="(icon, index) in icons" :key="index" class="icon" :src="icon"
                     @click="handleIconClick(index)">
                <slot name="right"></slot>
            </div>
        </div>
        <div v-else-if="position === 'center'" class="header header-center">
            <div class="back-icon-wrapper">
                <img v-if="back" class="back-icon" :src="backIcon" @click="handlerBack">
            </div>
            <span class="title title-left title-center" :style="titleStyle">{{title}}</span>
            <div class="icon-group">
                <img v-for="(icon, index) in icons" :key="index" class="icon" :src="icon"
                     @click="handleIconClick(index)">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
    <div v-else class="header-wrapper" :style="style">
        <slot></slot>
    </div>
</template>

<script>
import lightBackIcon from '../../assets/back-white.png'
import darkBackIcon from '../../assets/back-black.png'

export default {
    name: 'Header',
    components: {},
    props: {
        custom: {
            type: Boolean,
            default: false
        },
        back: {
            type: Boolean,
            default: false
        },
        hideTitle: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        titleSize: {
            type: Number,
            default: 26
        },
        theme: {
            type: String,
            default: 'dark'
        },
        background: {
            type: String,
            default: 'rgba(255,255,255, 0.97)'
        },
        position: {
            type: String,
            default: 'center',
            validator (val) {
                const set = ['center', 'left']
                return set.includes(val)
            }
        },
        icons: {
            type: Array,
            default: () => []
        },
    },
    data () {
        return {
        }
    },
    computed: {
        style () {
            return {
                backgroundColor: this.background,
            }
        },
        titleStyle () {
            return {
                opacity: this.hideTitle ? 0 : 1,
                fontSize: this.titleSize + 'px'
            }
        },
        backIcon() {
            const map = {
                light: lightBackIcon,
                dark: darkBackIcon
            }
            return map[this.theme]
        }
    },
    watch: {},
    filters: {},
    created () {
    },
    methods: {
        handleIconClick (index) {
            this.$emit('icon-click', index)
        },
        handlerBack() {
            this.$router.back()
        }
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.header {
    display: flex;
    height: @header-height;
    align-items: center;
    padding: 0 15px;
    position: relative;
}

.header-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.center {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
}

.back-icon-wrapper {
    display: inline-block;
}

.icon {
    width: 22px;
    height: 22px;
    margin-left: @spacing-row-lg;
}

.back-icon {
    width: 22px;
    height: 22px;
}

.title {
    color: @text-color;
}

.title-center {
    font-size: @font-size-base;
}

.title-left {
    font-size: @font-size-title;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.icon-group {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header-wrapper {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    transition: all 0.3s ease;
}

.title-center {
    text-align: center;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
}

</style>
