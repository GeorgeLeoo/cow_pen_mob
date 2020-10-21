<template>
  <div>
    <Header :title="$route.meta.title" position="left" :icons="icons" @icon-click="handlerIconClick"/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Learn',
  components: {
    Header
  },
  data() {
    return {
      icons: ['../../assets/calendar.png']
    }
  },
  methods: {
    /**
     * icon点击事件
     * @param index
     */
    handlerIconClick(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less">

</style>
