import Vue from 'vue'

import { Lazyload } from 'vant'

Vue.use(Lazyload)

import App from './App.vue'

import router from "./router";

import * as filters from './filters'

import '@/common/css/custom-reset.less'

Vue.config.productionTip = false

Object.keys(filters).forEach(filterName => {
    Vue.filter(filterName, filters[filterName])
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
