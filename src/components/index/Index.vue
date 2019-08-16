<template>
  <div class="Index">
    <div class="index-map-wrap">
      <div class="index-map">
        <baidu-map/>
      </div>
    </div>
    <div class="index-item-wrap">
      <div class="index-item">
        <div class="icon-wrap">
          <i class="iconfont icon-cloudy"></i>
        </div>
        <div class="degree-wrap">
          <div class="data-wrap">
            29
          </div>
          <div class="word-wrap">
            <div>℃</div>
            <div>阴(实时)</div>
          </div>
        </div>
        <div class="degree-range-wrap">
          <div class="vertical-interval">26 ~ 33℃</div>
          <div class="vertical-interval">小雨转多云</div>
          <div class="vertical-interval">南风3-4级</div>
        </div>
        <div class="air-quality">
          <div class="air-wrap">
            <span>25</span>
            <span class="air-data-wrap">优</span>
          </div>
        </div>
        <div id="weather-chart" class="weather-chart"></div>
      </div>
    </div>
    <div class="index-statistics-wrap">
      <div class="index-statistics">
        <div class="visit-chart-wrap">
          <div id="visit-chart" class="visit-chart"></div>
        </div>
        <div class="visit-time-chart-wrap">
          <div id="visit-time-chart" class="visit-time-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from '../sub/map/BaiduMap'

export default {
  name: 'Index',
  components: {BaiduMap},
  data () {
    return {
      weatherSize: {
        width: '100%',
        height: '100%'
      },
      visitSize: {
        width: '100%',
        height: '100%'
      },
      visitTimeSize: {
        width: '100%',
        height: '100%'
      },
      centerSize: {
        m: '50%',
        n: '66%'
      },
      weatherChart: {},
      visitChart: {},
      visitTimeChart: {}
    }
  },
  mounted () {
    const div = document.getElementById('visit-time-chart')
    const _this = this
    div.addEventListener('mousedown', function (e) {
      console.log('mousedown', e)
      _this.centerSize.m = '10%'
      _this.centerSize.n = '10%'
    })
    div.addEventListener('mouseup', function (e) {
      console.log('e', e)
    })

    window.onresize = () => {
      // this.weatherSize.width = window.getComputedStyle(document.getElementById('weather-chart')).width
      // this.weatherSize.height = window.getComputedStyle(document.getElementById('weather-chart')).height
      // this.visitSize.width = window.getComputedStyle(document.getElementById('visit-chart')).width
      // this.visitSize.height = window.getComputedStyle(document.getElementById('visit-chart')).height
      // this.visitTimeSize.width = window.getComputedStyle(document.getElementById('visit-time-chart')).width
      // this.visitTimeSize.height = window.getComputedStyle(document.getElementById('visit-time-chart')).height
      this.weatherChart.resize()
      this.visitChart.resize()
      this.visitTimeChart.resize()
    }
    this.initWeatherChart()
    this.initVisitChart()
    this.initVisitTimeChart()
  },
  methods: {
    initWeatherChart () {
      this.weatherChart = this.$echarts.init(document.getElementById('weather-chart'))
      this.weatherChart.setOption({
        legend: {
          show: true,
          type: 'plain',
          data: ['温度'],
          x: '15%',
          y: 'top'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['现在', '11点', '14点', '17点', '20点', '23点', '2点', '05点', '08点']
        },
        yAxis: {
          type: 'value',
          name: '温度(℃)'
        },
        series: [{
          name: '温度',
          data: ['29', '31', '32', '30', '27', '26', '25', '26', '29'],
          type: 'line'
        }]
      })
    },
    initVisitChart () {
      this.visitChart = this.$echarts.init(document.getElementById('visit-chart'))
      this.visitChart.setOption({
        title: {
          text: '访问来源统计',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          top: '16%',
          textStyle: {
            color: '#fff'
          },
          data: ['湖北省', '福建省', '广东省', '上海市', '北京市']
        },
        color: ['#7FDBFF', '#01FF70', '#F012B1', '#85144B', '#FF851B'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '66%'],
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              {value: 335, name: '湖北省'},
              {value: 310, name: '福建省'},
              {value: 234, name: '广东省'},
              {value: 135, name: '上海市'},
              {value: 1548, name: '北京市'}
            ]
          }
        ]
      })
    },
    initVisitTimeChart () {
      this.visitTimeChart = this.$echarts.init(document.getElementById('visit-time-chart'))
      this.visitTimeChart.setOption({
        title: {
          text: '访问时间统计',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          top: '16%',
          textStyle: {
            color: '#fff'
          },
          data: ['早上', '中午', '晚上']
        },
        color: ['#7FDBFF', '#01FF70', '#FF851B'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            center: [ this.centerSize.m, this.centerSize.n ],
            radius: ['0%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter: '{b}: {c} ({d}%)'
            },
            labelLine: {
              show: true,
              length: 10,
              length2: 8,
              lineStyle: {
                width: 1,
                type: 'solid',
                color: '#fff'
              }
            },
            itemStyle: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '16',
                  color: '#fff',
                  fontWeight: 'normal'
                }
              }
            },
            data: [
              {value: 335, name: '早上'},
              {value: 310, name: '中午'},
              {value: 234, name: '晚上'}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less">
  .Index{
    height:100%;
    .index-map-wrap{
      height:70%;
      width:70%;
      max-height:500px;
      float:left;
      .index-map{
        height:calc(100% - 4px);
        margin:0 10px;
        border:2px solid #8fcbf5;
      }
    }
    .index-item-wrap{
      height:70%;
      width:calc(30% - 10px);
      max-height:500px;
      float:left;
      .index-item{
        color:#fff;
        height:calc(100% - 4px);
        background-color:#718392;
        border-radius:6px;
        border: 2px solid #718392;
        .icon-wrap{
          height:80px;
          line-height:80px;
          text-align:center;
          .icon-cloudy{
            font-size:44px;
          }
        }
        .degree-wrap{
          text-align:center;
          height:60px;
          .data-wrap{
            line-height:60px;
            font-size:56px;
            display:inline-block;
            vertical-align:top;
          }
          .word-wrap{
            padding-top:10px;
            line-height:20px;
            margin-left:6px;
            font-size:16px;
            text-align:left;
            display:inline-block;
          }
        }
        .degree-range-wrap{
          text-align:center;
          .vertical-interval{
            height:30px;
            line-height:30px;
          }
        }
        .air-quality{
          height:40px;
          line-height:40px;
          text-align:center;
          .air-wrap{
            height:30px;
            line-height:30px;
            width:66px;
            border-radius:6px;
            display:inline-block;
            background-color: #19d516;
            .air-data-wrap{
              padding-left:10px;
            }
          }
        }
        .weather-chart{
          height:calc(100% - 230px);
        }
      }
    }
    .index-statistics-wrap{
      width:calc(100% - 10px);
      height:30%;
      min-height:calc(100% - 500px);
      float:left;
      .index-statistics{
        background:#AAAAAA;
        height:calc(100% - 20px);
        margin:10px 0 10px 10px;
        .visit-chart-wrap{
          width:25%;
          height:100%;
          display:inline-block;
          .visit-chart{
            width:100%;
            height:100%;
          }
        }
        .visit-time-chart-wrap{
          width:25%;
          height:100%;
          display:inline-block;
          .visit-time-chart{
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
</style>
