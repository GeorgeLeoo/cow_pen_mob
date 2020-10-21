// import utils from '../../utils/index.js'

/**
 * 跳转到路由
 * @param {Object} ctx 上下文
 * @param {Object} params 拼接的参数
 */
export const toNextPage = (ctx, params) => {
	ctx.$router.push({ name: 'login-next', params })
	// uni.navigateTo({
	// 	url: utils.concatParamsWithURL('/pages/login-next/login-next', params)
	// });
}
