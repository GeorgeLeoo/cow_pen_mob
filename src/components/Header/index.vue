<template>
  <div v-if="position === 'left'" class="header header-left">
    <div class="center">
      <img v-if="back" class="back-icon" src="../../assets/back-black.png">
      <span class="title title-left">{{title}}</span>
    </div>
    <div>
      <img v-for="icon in icons" :key="icon" class="back-icon" :src="icon">
    </div>
  </div>
  <div v-else-if="position === 'center'" class="header header-center">
    <img v-if="back" class="back-icon" src="../../assets/back-black.png">
    <span class="title title-center">{{title}}</span>
    <div>
      <img v-for="icon in icons" :key="icon" class="back-icon" :src="icon">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    back: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center',
      validator(val) {
        const set = ['center', 'left']
        return set.includes(val)
      }
    },
    icons: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  filters: {},
  created() {
  },
  methods: {},
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.header {
  display: flex;
  height: @header-height;
  align-items: center;
  padding: 0 15px;
}

.header-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-center {

}

.center {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.back-icon {
  width: 16px;
  height: 14px;
  margin-right: @spacing-row-sm;
}

.title {
  color: @text-color;
}

.title-center {
  font-size: @font-size-base;
}

.title-left {
  font-size: @font-size-lg;
  font-weight: bold;
}
</style>