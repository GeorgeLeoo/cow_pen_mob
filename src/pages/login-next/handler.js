// import utils from '../../utils/index.js'

/**
 * 跳转到路由
 * @param {Object} params 拼接的参数
 */
export const toNextPage = (ctx, params) => {
    ctx.$router.replace({ name: 'login-next', params })
}
