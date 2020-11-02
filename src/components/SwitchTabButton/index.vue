<template>
  <div class="switch-tab-button">
    <span class="switch-tab-button-item">推荐</span>
    <span class="switch-tab-button-item">最热</span>
    <span class="switch-tab-button-item">最新</span>
  </div>
</template>

<script>
export default {
  name: "SwitchTabButton",
  components: {},
  props: {},
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

.switch-tab-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: @bg-color-grey;
  padding: 2px;
  border-radius: 30px;

  .switch-tab-button-item {
    background-color: @bg-color;
    border-radius: 30px;
    font-size: @font-size-mid;
    padding: @spacing-col-sm @spacing-col-md;
    color: @text-color-grey;
  }
}
</style>