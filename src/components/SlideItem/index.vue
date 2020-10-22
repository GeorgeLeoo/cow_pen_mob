<template>
  <div class="slide-item" :style="slideItemStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "SlideItem",
    components: {},
    props: {},
    data() {
        return {
          slideItemStyle: {}
        }
    },
    computed: {},
    watch: {},
    filters: {},
    created() {},
    mounted() {
    },
    methods: {},
}
</script>

<style scoped>
.slide-item {
  width: 100%;
  height: 100%;
}
</style>