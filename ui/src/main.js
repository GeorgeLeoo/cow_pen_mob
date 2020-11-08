import Vue from 'vue'

import App from './App.vue'

import '../../src/common/css/custom-reset.less'
import router from './router'


// Vue.directive('highlight',function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block)=>{
//         // eslint-disable-next-line no-undef
//         hljs.highlightBlock(block)
//     })
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
