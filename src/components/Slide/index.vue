<template>
  <div class="slide" :style="slideStyle">
    <div ref="SLIDE_CONTAINER" class="slide-container" :style="slideContainerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  components: {},
  props: {
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      slideContainerStyle: {},
      finalWidth: 0,
      count: 0,
      current: 0
    }
  },
  computed: {
    slideStyle() {
      const {width, height} = this.options
      return {
        width,
        height
      }
    },
    duration() {
      const {duration} = this.options
      if (duration) {
        return this.options.duration
      } else {
        return '3000'
      }
    },
    inertval() {
      const {inertval} = this.options
      if (inertval) {
        return this.options.inertval
      } else {
        return '2000'
      }
    }
  },
  watch: {},
  filters: {},
  created() {
  },
  mounted() {
    const {width, height} = this.options
    let finalWidth = this.finalWidth
    if (width.includes('%')) {
      finalWidth = document.body.offsetWidth * Number(width)
    }
    if (width.includes('px')) {
      finalWidth = parseInt(width)
    }
    this.slideContainerStyle = {
      width: this.$children.length * finalWidth + 'px',
      height
    }
    this.finalWidth = finalWidth
    this.count = this.$children.length
    setTimeout(() => {
      this.start()
    }, 1000)
  },
  methods: {
    start() {
      const slide = this.$refs['SLIDE_CONTAINER']
      setInterval(() => {
        this.current++
        if (this.current >= this.count) {
          this.current = 0
        }
        let offset = -this.finalWidth * this.current
        const baseStyle = `width:${this.slideContainerStyle.width};height:${this.slideContainerStyle.height};transform: translateX(${offset}px);`
        if (this.current === 0) {
          slide.style = baseStyle
        } else {
          slide.style = `${baseStyle}transition: all ${this.inertval}ms ease;`
        }
      }, this.duration)
    }
  },
}
</script>

<style scoped lang="less">
.slide {
  width: 100%;
  height: 100px;
  overflow: auto;
}

.slide-container {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>