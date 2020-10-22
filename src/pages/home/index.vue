<template>
  <div>
    <Header :custom="true">
      <HomeHeader/>
    </Header>
    <div class="content">
      <Slide :options="slideOptions">
        <SlideItem v-for="i in 4" :key="i">
          <h1 :class="i%2 ? 'red': 'blue'">{{i}}</h1>
        </SlideItem>
        <SlideItem :key="5">
          <h1 :class="5%2 ? 'red': 'blue'">{{1}}</h1>
        </SlideItem>
      </Slide>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import HomeHeader from "@/components/HomeHeader/HomeHeader";
import Slide from "@/components/Slide";
import SlideItem from "@/components/SlideItem";

export default {
  name: 'Home',
  components: {
    Header,
    HomeHeader,
    Slide,
    SlideItem,
  },
  data() {
    return {
      slideOptions: {
        width: '300px',
        height: '140px',
        duration: 2000,
      }
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  height: 140px;
}

.blue {
  background-color: #007aff;
}

.red {
  background-color: orangered;
}
</style>
