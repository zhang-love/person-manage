// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'cdn-vue'
import router from './router'
import App from './App'
import VueParticles from 'vue-particles'
import CommonJS from '@/assets/js'
import '@/assets/style/index.less'
import '@/assets/icon/iconfont.css'
import ElementUI from 'cdn-element-ui'
import cdnAxios from '@/assets/http/http'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from '../static/js/echarts'
// import animated from 'cdn-animate'
// Vue.config.productionTip = false
Vue.prototype.$commonJs = CommonJS
Vue.use(VueParticles)
// Vue.use(animated)
Vue.use(ElementUI)
Vue.prototype.$axios = cdnAxios
// Vue.use(echarts)
cdnAxios.defaults.baseURL = '/rest'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
