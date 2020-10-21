<template>
	<div class="login-wrapper">
		<div class="title-wrapper">
			<span class="title">Hi，nemo</span>
			<span class="title">欢迎回来</span>
		</div>
		<div class="input-wrapper">
			<span class="input-area">{{ area }}</span>
			<input v-model.number="phone" class="input-phone" type="text" placeholder="请输入手机号" />
		</div>
		<div class="login-tip">
			<span class="tip" @click="handlerToForgetPwd">忘记密码</span>
			<span class="tip" @click="handlerToUsePwd">使用密码登录</span>
		</div>
		<Button circle @click.native="handlerToLogin">一键登录</Button>
		<div class="other">
			<span class="other-text">其他登录方式</span>
			<div class="icon-wrapper">
				<img class="other-icon" src="../../assets/wechat.png"  alt="微信登陆">
				<img class="other-icon" src="../../assets/qq.png" alt="QQ登陆">
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/components/Button/index.vue';
import { toNextPage } from './handler.js';
import { LOGIN_EVENT_TYPE } from '@/constance';

export default {
  name: 'Login',
	components: {
		Button
	},
	data() {
		return {
			/**
			 * @desc 手机号 区位号
			 * @type String
			 */
			area: '+86',
			/**
			 * @desc 手机号
			 * @type String
			 */
			phone: '18921483103'
		};
	},
	methods: {
		/**
		 * @desc 跳转到【验证码】
		 */
		handlerToLogin() {
			// uni.reLaunch({
			// 	url: '/pages/home/home'
			// })
			// toNextPage(this, {
			// 	area: this.area,
			// 	phone: this.phone,
			// 	eventType: LOGIN_EVENT_TYPE.CODE
			// });
      this.$router.push({name: 'home'})
		},
		/**
		 * @desc 跳转到【使用密码登录】
		 */
		handlerToUsePwd() {
			if (!this.phone) {
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '请先输入手机号'
				// })
				return
			}
			toNextPage(this, {
				area: this.area,
				phone: this.phone,
				eventType: LOGIN_EVENT_TYPE.PWD
			});
		},

		/**
		 * @desc 跳转到【忘记密码】
		 */
		handlerToForgetPwd() {
			if (!this.phone) {
				// uni.showToast({
				// 	title: '请选输入手机号'
				// })
				return
			}
			toNextPage(this, {
				area: this.area,
				phone: this.phone,
				eventType: LOGIN_EVENT_TYPE.FORGET_PWD
			});
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
}

.title:first-child {
	margin-bottom: @spacing-col-md;
}

.input-wrapper {
	margin-bottom: @spacing-col-md;
	display: flex;
	border-bottom: 1px solid @border-color;
}

.input-area {
	height: @input-size-base;
	line-height: @input-size-base;
	font-size: @font-size-lg;
	color: @text-color;
	margin-right: @spacing-row-base;
}

.input-phone {
	flex: 1;
	height: @input-size-base;
	line-height: @input-size-base;
	font-size: @font-size-lg;
	color: @text-color;
}

.login-tip {
	display: flex;
	justify-content: space-between;
	margin-top: @spacing-col-lg;
	margin-bottom: @spacing-col-mini-lg;
}

.tip {
	font-size: @font-size-sm;
	color: @text-color-grey;
}
.other {
	width: 100%;
	position: absolute;
	bottom: 100px;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.other-text {
	width: 100%;
	font-size: @font-size-sm;
	color: @text-color-grey;
	margin-bottom: 60px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}

.other-text::before, .other-text::after {
	content: "";
	display: inline-block;
	width: 20%;
	height: 1px;
	background-color: @border-color;
}

.other-text::before {
	margin-right: 20px;
}

.other-text::after {
	margin-left: 20px;
}

.icon-wrapper {
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.other-icon {
	width: 40px;
	height: 40px;
}
</style>
