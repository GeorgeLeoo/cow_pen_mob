<template>
  <div class="search" @click="handlerClick">
    <img class="search-icon" src="../../assets/search.png">
    <span class="hot-key">{{placeholder}}</span>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: '前端'
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  filters: {},
  created() {
  },
  methods: {
    handlerClick() {
      this.$emit('search')
    }
  },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.search {
  display: flex;
  background-color: @bg-color-hover;
  border-radius: 50px;
  height: 30px;
  flex: 1;
  align-items: center;
  padding: 0 16px;
}

.search-icon {
  width: 16px;
  height: 14px;
  margin-right: @spacing-row-sm;
}

.hot-key {
  font-size: @font-size-sm;
  color: @text-color-grey;
}
</style>