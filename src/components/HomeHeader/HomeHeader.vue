<template>
  <div class="home-header">
    <Search :placeholder="hotKey" @search="handlerSearch"/>
    <div class="icon">
      <img class="shop-car-icon" :src="shopCar">
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import { shopCar} from '@/icon'

export default {
  name: 'HomeHeader',
  components: {
      Search
  },
  props: {
    hotKey: {
      type: String,
      default: '前端'
    }
  },
  data() {
    return {
        shopCar
    };
  },
  methods: {
    handlerSearch() {
      this.$emit('search')
    }
  }
}
</script>

<style lang="less">
@import '../../theme/index.less';

.home-header {
  display: flex;
  height: @header-height;
  align-items: center;
  padding: 0 15px;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-text {
  font-size: 12px;
  color: @text-color-inverse;
  margin-top: 8px;
}

.shop-car-icon {
  width: 22px;
  height: 22px;
  margin-left: @spacing-row-lg;
}

</style>
