<template>
  <div class="chat-item">
    <div class="top">
      <div class="top-left">
        <div class="avatar-wrapper">
          <img class="avatar"
               src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450427682,1294931235&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div>
          <h3 class="nickname">平行宇宙UES</h3>
          <h4 class="time">39分钟前</h4>
        </div>
      </div>
      <div class="top-right">
        <button class="attention-btn">关注</button>
        <img class="more" src="../../assets/more.png" alt="">
      </div>
    </div>
    <div class="content">
      <p class="content-text">float特点: 1:浮动的元素能让行内元素设置宽高. 2:记住,浮动的元素能使用内外边距. 3:浮动中不区分行内/块级/行内块级元素的.都可以设置宽高.
        4:浮动元素是一种水平排版的东西. 5:浮动跟行内块级元素很像. 6:float只能水平排版. 缺点: 1:浮动中没有居中对齐,没有.只有左对齐 右对齐. 2:但是不能使用margin: 0 auto;使用这样无效.
        什么是水平排版? 行内元素/行内块级元素 什么是垂直排版? 块级元素</p>
      <div class="intro-img"></div>
      <div class="source-wrapper">
        <div class="source">
          <img class="source-icon" :src="findSelected" alt="">
          <span class="source-text">来源小组：前端100天打卡小组</span>
        </div>
        <div class="source-empty"></div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item">
        <img class="icon" src="../../assets/like.png" alt="">
        <span class="text"></span>
      </div>
      <div class="footer-item">
        <img class="icon" src="../../assets/chat-msg.png" alt="">
        <span class="text">34</span>
      </div>
      <div class="footer-item">
        <img class="icon" src="../../assets/collection.png" alt="">
        <span class="text">5</span>
      </div>
      <div class="footer-item">
        <img class="icon" src="../../assets/share.png" alt="">
        <span class="text">分享</span>
      </div>
    </div>
  </div>
</template>

<script>
import findSelected from '@/static/tab/find_selected.png'

export default {
  name: "ChatItem",
  components: {},
  props: {},
  data() {
    return {
      findSelected
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

.chat-item {
  padding-top: @spacing-col-lg;
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .top-left {
    display: flex;
    flex-direction: row;
    align-items: center;

    .nickname {
      font-size: @font-size-base;
      font-weight: bold;
      color: @text-color;
    }

    .time {
      font-size: @font-size-sm;
      color: @text-color-grey;
    }
  }

  .top-right {
    display: flex;
    align-items: center;
  }

  .avatar-wrapper {
    margin-right: @spacing-row-base;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: @border-radius-circle;
  }

  .attention-btn {
    font-size: @font-size-sm;
    font-weight: bold;
    color: @color-primary;
    background-color: rgba(0, 122, 255, 0.1);
    border-radius: 50px;
    padding: 0 @spacing-row-lg;
    line-height: 22px;
  }

  .more {
    width: 16px;
    height: 16px;
    margin-left: @spacing-row-sm;
  }

  .content {
    margin-top: @spacing-col-base;
    .content-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: @font-size-mid;
      color: @text-color;
      line-height: 22px;
      font-weight: 500;
    }

    .intro-img {
      margin-top: @spacing-col-base;
      width: 355px;
      height: 200px;
      background-image: url("//img2.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg");
      background-size: contain;
      border-radius: @border-radius-base;
    }

    .source-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: @spacing-col-md;
    }

    .source {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: rgba(0, 122, 255, 0.1);
      border-radius: 50px;
      padding: @spacing-row-sm @spacing-row-base;
    }

    .source-empty {
      flex: 1;
    }

    .source-icon {
      width: 14px;
      height: 14px;
      margin-right: @spacing-row-sm;
    }

    .source-text {
      font-size: @font-size-sm;
      color: @color-primary;
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: @spacing-col-sm;
    margin-top: @spacing-col-base;

    .footer-item {
      display: flex;
      flex-direction: row;
      align-items: center;

      .icon {
        width: 22px;
        height: 22px;
        margin-right: @spacing-row-sm;
      }

      .text {
        font-size: @font-size-sm;
        color: @text-color-grey;
      }
    }
  }
}
</style>