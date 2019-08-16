// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import echarts from '../static/js/echarts'

import '@/assets/style/index.less'
import '@/assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import 'babel-polyfill'
Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(animated)
Vue.use(ElementUI)
Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
