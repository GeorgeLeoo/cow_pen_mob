<template>
  <div class="">
    <div class="header">
      <Search :placeholder="hotKey" @search="handlerSearch"/>
    </div>

  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'Classification',
  components: {
    Search
  },
  data() {
    return {
      hotKey: '大前端课程'
    }
  },
  methods: {
    handlerSearch() {}
  }
}
</script>

<style lang="less">
@import '../../theme/index.less';

.header {
  height: @header-height;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
}
</style>
