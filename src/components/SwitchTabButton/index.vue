<template>
    <div class="switch-tab-button">
        <button
            v-for="(item, index) in data"
            :key="index"
            class="switch-tab-button-item"
            :class="[item.active === activeTab ? 'active' : '']"
            @click="handlerTab(item.active)">{{item.text}}
        </button>
    </div>
</template>

<script>
export default {
    name: 'SwitchTabButton',
    components: {},
    props: {
        active: {
            type: String,
            default: 'all'
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            activeTab: ''
        }
    },
    computed: {},
    watch: {},
    filters: {},
    mounted () {
        this.activeTab = this.active
    },
    methods: {
        handlerTab (active) {
            this.activeTab = active
        }
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.switch-tab-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: @bg-color-grey;
    padding: 2px;
    border-radius: 30px;

    .switch-tab-button-item {
        font-size: @font-size-mid;
        color: @text-color-grey;
        line-height: 30px;
        padding: 0 @spacing-row-lg;
        transition: all 0.2s ease;
    }

    .active {
        border-radius: 30px;
        background-color: @bg-color;
        color: @color-primary;
    }
}
</style>
