import echarts from 'echarts/lib/echarts'

// 引入柱状图
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default {
  install (Vue, options) {
    Vue.prototype.$echarts = echarts
  }
}
