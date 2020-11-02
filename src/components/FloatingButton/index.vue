<template>
  <div class="floating-button">
    <img class="icon" src="../../assets/edit-white.png" alt="">
  </div>
</template>

<script>
export default {
  name: "FloatingButton",
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
.floating-button {
  position: fixed;
  right: @spacing-row-lg;
  bottom: 70px;
  width: 56px;
  height: 56px;
  border-radius: 60px;
  background-color: rgba(0, 122, 255, 1);
  box-shadow: 0 3px 8px rgba(0, 122, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
.icon {
  width: 30px;
  height: 30px;
}
}
</style>