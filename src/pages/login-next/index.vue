<template>
  <div class="login-wrapper">
    <div class="title-wrapper">
      <span class="title">{{ pageInfo.title }}</span>
      <div class="area-phone-wrapper">
        <span class="title area-phone">{{ area }}-{{ phone }}</span>
        <img class="edit-icon" src="../../assets/edit.png" @click="handlerBack">
      </div>
    </div>
    <VerifyInput
      v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType)"
      v-model="inputValue"
      class="verify-content"
      @submit="handlerToVerify"
    />
    <div v-else-if="[LOGIN_EVENT_TYPE.PWD, LOGIN_EVENT_TYPE.SET_PWD].includes(eventType)" class="input-wrapper">
      <input v-model="inputValue" class="input-phone" :focus="true" type="password" placeholder="请设置密码"/>
    </div>
    <Button circle @click="handlerToVerify">{{ eventType === LOGIN_EVENT_TYPE.PWD ? '登录' : '验证' }}</Button>
    <div class="login-tip">
      <span v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType) && !isCountDownOver"
            class="tip">重新发送{{ second }}S</span>
      <span v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType) && isCountDownOver"
            class="tip blue" @click="handlerToResendCode">重新发送</span>
      <span v-else-if="[LOGIN_EVENT_TYPE.PWD].includes(eventType)" class="tip">忘记密码？</span>
    </div>
  </div>
</template>

<script>
import Button from '../../components/Button/index.vue';
import VerifyInput from '../../components/VerifyInput/index.vue';
import {LOGIN_EVENT_TYPE} from '@/constance';
// import { toNextPage } from './handler.js';

const pageInfoMap = {
  CODE: {
    title: '请输入验证码'
  },
  FORGET_PWD: {
    title: '请输入验证码'
  },
  PWD: {
    title: '请设置密码'
  },
  SET_PWD: {
    title: '请设置密码'
  }
};

const MAX_SECOND = 5;

export default {
  name: 'LoginNext',
  components: {
    VerifyInput,
    Button
  },
  data() {
    return {
      LOGIN_EVENT_TYPE,
      /**
       * @desc 手机号 区位号
       * @type String
       */
      area: '+86',
      /**
       * @desc 手机号
       * @type String
       */
      phone: '18921483103',
      /**
       * @desc 类型
       * @type String
       */
      eventType: 'CODE',
      /**
       * @desc 页面信息
       * @type Object
       */
      pageInfo: {},
      /**
       * @desc 重新发送的秒数
       * @type Number
       */
      second: MAX_SECOND,
      /**
       * @desc 输入框数据 验证码 或 密码
       * @type String
       */
      inputValue: '',
      isCountDownOver: false
    };
  },
  mounted() {
    const {area, phone, eventType} = this.$route.params
    this.area = area;
    this.phone = phone;
    this.eventType = eventType;

    this.pageInfo = pageInfoMap[this.eventType];

    this.setCountDown();
  },
  methods: {
    setCountDown() {
      this.isCountDownOver = false;

      this.timer = setInterval(() => {
        if (this.second <= 0) {
          clearInterval(this.timer);

          this.second = MAX_SECOND;
          this.isCountDownOver = true;
        }
        this.second--;
      }, 1000);
    },
    /**
     * @desc 重新发送验证码
     */
    handlerToResendCode() {
      this.setCountDown();
    },
    /**
     * @desc 跳转到【验证码】
     */
    handlerToVerify() {
      if (this.eventType === LOGIN_EVENT_TYPE.FORGET_PWD) {
        this.eventType = LOGIN_EVENT_TYPE.SET_PWD
        this.pageInfo = pageInfoMap[this.eventType];
      } else if (this.eventType === LOGIN_EVENT_TYPE.CODE) {
        console.log('ok', this.eventType)
      }
    },
    handlerBack() {
      // uni.navigateBack();
      this.$router.back()
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.login-wrapper {
  height: 100%;
  padding: 30px;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: @spacing-col-supper-lg;
}

.title {
  font-size: @font-size-title;
  color: @text-color;
  margin-bottom: @spacing-col-mini-lg;
  text-align: center;
}

.title:first-child {
  margin-bottom: @spacing-col-md;
}

.area-phone-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.area-phone {
  font-size: @font-size-base;
}

.input-wrapper {
  margin: @spacing-col-supper-lg 0;
  display: flex;
  border-bottom: 1px solid @border-color;
}

.input-phone {
  flex: 1;
  height: @input-size-base;
  line-height: @input-size-base;
  font-size: @font-size-lg;
  color: @text-color;
  text-align: center;
}

.login-tip {
  display: flex;
  justify-content: center;
  margin-top: @spacing-col-lg;
  margin-bottom: @spacing-col-mini-lg;
}

.tip {
  font-size: @font-size-sm;
  color: @text-color-grey;
}

.edit-icon {
  width: 15px;
  height: 15px;
  margin-bottom: @spacing-col-md;
  margin-left: @spacing-row-sm;
}

.verify-content {
  margin: @spacing-col-supper-lg 0;
}

.blue {
  color: @color-primary;
}
</style>
