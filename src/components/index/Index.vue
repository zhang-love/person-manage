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
        <div class="weather-chart-wrap">
          <div id="weather-chart" class="weather-chart"></div>
        </div>
      </div>
    </div>
    <div class="index-statistics-wrap">
      <div class="index-statistics">
        <div class="visit-chart-wrap">
          <div id="visit-chart" class="visit-chart"></div>
        </div>
        <div class="visit-time-chart-wrap">
          <div id="visit-time-chart" class="visit-time-chart" ></div>
        </div>
        <div class="time-range" id="time-range">
          <div class="tip-wrap" :class="!showTitle?'show-title-false':''">
            <div class="tip-icon-wrap">
              <i class="iconfont icon-tip2"></i>
            </div>
            <div class="border-i">
            </div>
            <div class="word-wrap">
              <span class="tip-word">长按拖动</span>
            </div>
          </div>
          <div class="tip-title">我是小广告，不要拖动我</div>
          <!--<el-date-picker-->
            <!--v-model="timeRange"-->
            <!--type="datetimerange"-->
            <!--style="border-radius:0;"-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期">-->
          <!--</el-date-picker>-->
        </div>
        <div class="visit-trend-chart-wrap">
          <div id="visit-trend-chart" class="visit-trend-chart"></div>
        </div>
        <div class="summary-wrap">
          <div class="summary-back"></div>
          <div class="summary">
            <div class="title key">访问量总结</div>
            <div class="section"><span class="key">访问量最多城市：</span>武汉，位于东部沿海</div>
            <div class="section"><span class="key">访问量最少区域：</span>位于西部</div>
            <div class="section"><span class="key">访问量高峰时间：</span>上午</div>
            <div class="section"><span class="key">访问量趋势变化：</span>从早上6点开始逐渐增加，到中午12点最高，然后逐渐减小到0点达到最低</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from '../sub/map/BaiduMap'
import echarts from 'cdn-echarts'

export default {
  name: 'Index',
  components: {BaiduMap},
  data () {
    return {
      timeRange: '',
      showTitle: true,
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
      weatherChart: {},
      visitChart: {},
      visitTimeChart: {},
      visitTrendChart: {}
    }
  },
  mounted () {
    this.$echarts = echarts
    this.timeRangeEvent()
    window.addEventListener('resize',
      () => {
        // this.weatherSize.width = window.getComputedStyle(document.getElementById('weather-chart')).width
        // this.weatherSize.height = window.getComputedStyle(document.getElementById('weather-chart')).height
        // this.visitSize.width = window.getComputedStyle(document.getElementById('visit-chart')).width
        // this.visitSize.height = window.getComputedStyle(document.getElementById('visit-chart')).height
        // this.visitTimeSize.width = window.getComputedStyle(document.getElementById('visit-time-chart')).width
        // this.visitTimeSize.height = window.getComputedStyle(document.getElementById('visit-time-chart')).height
        this.weatherChart.resize()
        this.visitChart.resize()
        this.visitTimeChart.resize()
        this.visitTrendChart.resize()
      })
    this.initWeatherChart()
    this.initVisitChart()
    this.initVisitTimeChart()
    this.initVisitTrendChart()
  },
  methods: {
    timeRangeEvent () {
      const div = document.getElementById('time-range')
      const _this = this
      div.onmouseover = function (event) {
        console.log('onmouseover')
        _this.showTitle = false
      }
      div.onmousedown = function (event) {
        const x = div.getBoundingClientRect().x
        const y = div.getBoundingClientRect().y
        div.onmousemove = function (move) {
          div.style.left = x + move.clientX - event.clientX + 'px'
          div.style.top = y + move.clientY - event.clientY + 'px'
        }
      }
      div.onmouseup = function (up) {
        div.onmousemove = null
      }
    },
    initWeatherChart () {
      this.weatherChart = this.$echarts.init(document.getElementById('weather-chart'))
      this.weatherChart.setOption({
        legend: {
          show: true,
          type: 'plain',
          data: ['温度'],
          x: '30%',
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
        }],
        grid: {
          top: '26%',
          left: '16%',
          height: '60%'
        }
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
            center: [ '50%', '65%' ],
            radius: ['0%', '50%'],
            minAngle: 27,
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter: '{b}:\n{c} ({d}%)'
            },
            labelLine: {
              show: true,
              length: 6,
              length2: 2,
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
    },
    initVisitTrendChart () {
      this.visitTrendChart = this.$echarts.init(document.getElementById('visit-trend-chart'))
      this.visitTrendChart.setOption({
        legend: {
          show: true,
          type: 'plain',
          data: ['访问量'],
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
          name: '数量(人)'
        },
        series: [{
          name: '数量',
          data: ['29', '31', '32', '30', '27', '26', '25', '26', '29'],
          type: 'line'
        }],
        grid: {
          top: '26%',
          height: '60%'
        }
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
        position:relative;
        height:calc(100% - 4px);
        width:100%;
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
        .weather-chart-wrap{
          height:calc(100% - 270px);
        }
        .weather-chart{
          height:100%;
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
          float:left;
          .visit-chart{
            width:100%;
            height:100%;
          }
        }
        .visit-time-chart-wrap{
          width:25%;
          height:100%;
          float:left;
          .visit-time-chart{
            width:100%;
            height:100%;
          }
        }
        .time-range{
          display:inline-block;
          text-align:center;
          cursor: pointer;
          position: absolute;
          bottom: 30%;
          left:10px;
          .tip-wrap{
            text-align:left;
            background-color:#f0f9eb;
            letter-spacing:-4px;
            height:26px;
            line-height:26px;
            width:160px;
            .tip-icon-wrap{
              display:inline-block;
              width:30px;
              padding-left:12px;
              background-color: red;
              vertical-align:top;
              .iconfont{
                color: #f9909a;
              }
            }
            .border-i{
              display:inline-block;
              border-left:13px red solid;
              border-top:13px #fff dotted;
              border-bottom:13px #fff dotted;
              width:0;
              height:0;
              overflow:hidden;
              vertical-align:top;
            }
            .word-wrap{
              display:inline-block;
              letter-spacing:2px;
              padding-left:12px;
              .tip-word{
                color: #575757;
              }
            }
          }
          .show-title-false{
            animation: show-title-false 2s forwards;
            -webkit-animation:show-title-false 2s forwards;
          }
          @keyframes show-title-false {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(220px);
              opacity: 0;
            }
          }
          .tip-title{
            background-color:#f2e3cc;
            height:100px;
            width:200px;
          }
        }
        .visit-trend-chart-wrap{
          width:25%;
          height:100%;
          float:left;
          .visit-trend-chart{
            width:100%;
            height:100%;
          }
        }
        .summary-wrap{
          width:25%;
          height:100%;
          float:right;
          position:relative;
          .summary-back{
            position:absolute;
            width:100%;
            height:calc(100%);
            background: rgba(0, 0, 0, 0) url('../../assets/img/bookmark.jpeg') !important ;
            opacity: .4;
          }
          .summary{
            position:absolute;
            width:100%;
            height:calc(100% - 4px);
            overflow: auto;
            z-index: 12;
            /*&::before{*/
              /*position:absolute;*/
              /*width:100%;*/
              /*height:calc(100% - 4px);*/
              /*background: rgba(0, 0, 0, 0) url('../../assets/img/bookmark.jpeg') !important ;*/
              /*opacity: .4;*/
            /*}*/
            &::-webkit-scrollbar{
              width:6px;
              height:1px;
            }
            &::-webkit-scrollbar-thumb{
              border-radius:6px;
              -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
              background: #535353;
            }
            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
              border-radius: 6px;
              background: #ccc;
            }
            .title{
              text-align:center;
              padding:6% 0;
            }
            .section{
              text-indent: 20px;
              padding:2% 0;
            }
            .key{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
