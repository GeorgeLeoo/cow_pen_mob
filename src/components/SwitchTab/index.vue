<template>
  <div class="switch-tab">
    <div v-for="(item,index) in data" :key="index" class="switch-tab-item" @click="handlerTab(item.active)">
      <h3 class="text" :class="[item.active === activeTab ? 'active-text' : '']">{{item.text}}</h3>
      <span class="indicator" :class="[item.active === activeTab ? 'active-indicator' : '']"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchTab",
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
  data() {
    return {
      activeTab: ''
    }
  },
  computed: {},
  watch: {},
  filters: {},
  mounted() {
    this.activeTab = this.active
  },
  methods: {
    handlerTab(active) {
      this.activeTab = active
    }
  },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.switch-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .switch-tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;

    .indicator-wrapper {
      text-align: center;
    }

    .text {
      font-size: @font-size-mid;
      color: @text-color;
      font-weight: normal;
      transition: font-weight 0.2s ease;
    }

    .active-text {
      font-weight: bold;
      //font-size: @font-size-base;
    }

    .indicator {
      margin-top: @spacing-col-sm;
      width: 30px;
      height: 4px;
      border-radius: 2px;
      background-color: @bg-color;
      display: inline-block;
      transition: background-color 0.2s ease;
    }

    .active-indicator {
      background-color: @color-primary;
    }
  }
}

</style>