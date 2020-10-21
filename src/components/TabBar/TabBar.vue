<template>
  <div class="tab-bar" :style="tabStyle">
    <div v-for="(item, index) in tabList" :key="item.text" class="tab-item" @click="handlerTab(item, index)">
      <img :style="iconStyle" :src="activeIndex === index ? item.selected : item.unselected" alt="icon">
      <span :style="activeIndex === index ? activeFontStyle : deActiveFontStyle">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tab: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      defaultFontColor: '#999999',
      defaultFontSelectedColor: '#007aff',
      defaultBackgroundColor: '#ffffff',
      defaultHeight: '100px',
      defaultFontSize: '24px',
      defaultIconWidth: '24px',
      defaultSpacing: '4px',
      activeIndex: 0
    };
  },
  computed: {
    tabList() {
      return this.tab.list
    },
    fontColor() {
      const color = this.tab.color
      if (color) {
        return color
      } else {
        return this.defaultFontColor
      }
    },
    fontSelectedColor() {
      const selectedColor = this.tab.selectedColor
      if (selectedColor) {
        return selectedColor
      } else {
        return this.defaultFontSelectedColor
      }
    },
    backgroundColor() {
      const backgroundColor = this.tab.backgroundColor
      if (backgroundColor) {
        return backgroundColor
      } else {
        return this.defaultBackgroundColor
      }
    },
    height() {
      const height = this.tab.height
      if (height) {
        return height
      } else {
        return this.defaultHeight
      }
    },
    fontSize() {
      const fontSize = this.tab.fontSize
      if (fontSize) {
        return fontSize
      } else {
        return this.defaultFontSize
      }
    },
    iconWidth() {
      const iconWidth = this.tab.iconWidth
      if (iconWidth) {
        return iconWidth
      } else {
        return this.defaultIconWidth
      }
    },
    spacing() {
      const spacing = this.tab.spacing
      if (spacing) {
        return spacing
      } else {
        return this.defaultSpacing
      }
    },
    fontNormalStyle() {
      return {
        color: this.fontColor
      }
    },
    fontSelectedStyle() {
      return {
        color: this.fontSelectedColor
      }
    },
    iconStyle() {
      return {
        width: this.iconWidth,
        height: this.iconWidth,
      }
    },
    tabStyle() {
      return {
        backgroundColor: this.backgroundColor,
        height: this.height
      }
    },
    activeFontStyle() {
      const fontStyle = {
        fontSize: this.fontSize,
        spacing: this.spacing,
      }
      return Object.assign(fontStyle, this.fontSelectedStyle)
    },
    deActiveFontStyle() {
      const fontStyle = {
        fontSize: this.fontSize,
        spacing: this.spacing,
      }
      return Object.assign(fontStyle, this.fontNormalStyle)
    },
  },
  mounted() {
  },
  methods: {
    /**
     * tab 选中事件
     * @param item
     * @param index
     */
    handlerTab(item, index) {
      this.activeIndex = index
      this.$router.push({path: item.path})
    }
  }
}
</script>

<style lang="less">
@import '../../theme/index.less';

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  //border-top: 0.5px solid @text-color-grey;
}

.tab-item {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
