<template>
  <div>
    <div class="top"></div>
    <div class="page">
      <SwitchTab :active.sync="activeTab" :data="tabList"/>
      <div class="count-switch">
        <span class="total-count">2.4万条动态</span>
        <SwitchTabButton/>
      </div>
      <div class="chat-list">
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchTab from '@/components/SwitchTab'
import SwitchTabButton from '@/components/SwitchTabButton'
import ChatItem from '@/components/ChatItem'

export default {
  name: "Group",
  components: {
    SwitchTab,
    SwitchTabButton,
    ChatItem,
  },
  props: {},
  data() {
    return {
      tabList: [
        {
          text: '全部主题',
          active: 'all',
        },
        {
          text: '精华主题',
          active: 'essence',
        },
        {
          text: '作业打卡',
          active: 'work',
        },
        {
          text: '文件下载',
          active: 'file',
        },
      ],
      activeTab: 'all'
    }
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

.page {
  padding: @spacing-row-lg;
  border-top-left-radius: @border-radius-lger;
  border-top-right-radius: @border-radius-lger;
  position: relative;
  top: -@spacing-col-lg;
  z-index: 9;
  background-color: @bg-color;

  .count-switch {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: @spacing-col-base;
  }
  .total-count {
    font-size: @font-size-sm;
    font-weight: bold;
  }
}

.top {
  height: 200px;
  background-color: #007aff;
}

</style>