<template>
    <div>
        <Header :title="$route.meta.title" position="left" :icons="icons" @icon-click="handlerIconClick"/>

    </div>
</template>

<script>
import Header from '@/components/Header'
import searchIcon from '@/assets/search-icon.png'
import notice from '@/assets/notice.png'

export default {
    name: 'Square',
    components: {
        Header
    },
    data () {
        return {
            icons: [searchIcon, notice]
        }
    },
    methods: {
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

<style lang="less">

</style>
