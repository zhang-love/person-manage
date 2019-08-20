<template>
  <div class="baidu-map-wrap">
    <div class="baidu-map" id="customizeMap"></div>
    <img v-show="false" id="img" src="../../../assets/img/bookmark.jpeg" height="679" width="678"/>
    <img v-show="false" id="img2" src="../../../assets/img/login.jpg"/>
  </div>
</template>

<script>
/* eslint-disable no-undef */

import BMap from 'BMap'

export default {
  name: 'BaiduMap',
  props: {
    'location': {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      isInit: false,
      mp: {}
    }
  },
  mounted () {
    this.initMap()
  },
  watch: {
    location: {
      handler (newValue, oldValue) {
        this.mp.centerAndZoom(newValue.cityName, 11)
      },
      deep: true
    }
  },
  methods: {
    initMap () {
      var mp = new BMap.Map('customizeMap')
      this.mp = mp
      mp.centerAndZoom(new BMap.Point(116.3964, 39.9093), 10)
      mp.enableScrollWheelZoom()
      console.log('NavigationControlOptions', BMap)
      mp.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}))
      console.log('init')
      var canvasLayer = new BMap.CanvasLayer({
        update: update
      })
      const position = {
        x: 100,
        y: 140,
        width: 200,
        height: 120
      }
      function evil (fn) {
        var Fn = Function
        return new Fn('return ' + fn)()
      }
      function update () {
        // 移动地图触发图片加载
        var data = [
          new BMap.Point(116.297047, 39.979542),
          new BMap.Point(116.321768, 39.88748),
          new BMap.Point(116.494243, 39.956539)
        ]
        // 地图移动或者放大缩小，导致layer自动加载问题
        if (!this.isInit) mp.panTo(data[0])
        this.isInit = true
        var ctx = this.canvas.getContext('2d')

        if (!ctx) {
          return
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        for (var i = 0, len = data.length; i < len; i++) {
          console.log('++')
          var pixel = mp.pointToPixel(data[i])
          const ctxWrap = {
            x: pixel.x - position.x,
            y: pixel.y - position.y,
            width: position.width,
            height: position.height
          }
          ctx.beginPath()
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
          ctx.fillRect(ctxWrap.x, ctxWrap.y, ctxWrap.width, ctxWrap.height)
          ctx.stroke()
          const ctxContent = {
            x: ctxWrap.x + 10,
            y: ctxWrap.y + 10,
            width: ctxWrap.width - 20,
            height: ctxWrap.height - 20
          }
          ctx.beginPath()
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
          ctx.fillRect(ctxContent.x, ctxContent.y, ctxContent.width, ctxContent.height)
          ctx.stroke()
          const imgContent = {
            x: ctxContent.x,
            y: ctxContent.y,
            width: ctxContent.width / 2,
            height: ctxContent.height
          }
          ctx.beginPath()
          const img = document.getElementById('img')
          ctx.drawImage(img, imgContent.x, imgContent.y, imgContent.width, imgContent.height)
          ctx.stroke()
          ctx.beginPath()
          const img2Content = {
            x: ctxContent.x + ctxContent.width / 2 + 10,
            y: ctxContent.y + 10,
            width: ctxContent.width / 2 - 20,
            height: ctxContent.height / 2
          }
          const img2 = document.getElementById('img2')
          ctx.drawImage(img2, img2Content.x, img2Content.y, img2Content.width, img2Content.height)
          ctx.stroke()
          ctx.beginPath()
          ctx.font = '20px  IconFont'
          // ctx.fillStyle = '#0000ff'
          let lingrad1 = ctx.createLinearGradient(pixel.x, pixel.y, pixel.x, pixel.y - 30)// 渐变色位置
          lingrad1.addColorStop(1, 'rgb(28, 254, 255)')// 渐变色颜色
          lingrad1.addColorStop(0, 'rgb(15, 96, 255)')// 渐变色颜色
          ctx.fillStyle = lingrad1// 填充渐变色
          // let str = '&#xe610;'.replace('&#x', '\\u').replace(';', '')
          let str = '("' + '&#xe610;'.replace('&#x', '\\u').replace(';', '') + '")'
          ctx.fillText(evil(str), pixel.x, pixel.y)
          ctx.stroke()
          const textContent = {
            x: img2Content.x,
            y: img2Content.y + img2Content.height + 20
          }
          ctx.beginPath()
          ctx.font = '20px  Arial, '
          // ctx.fillStyle = '#0000ff'
          ctx.fillStyle = '#fff'// 填充渐变色
          ctx.fillText('mojad', textContent.x, textContent.y)
          ctx.stroke()
          // ctx.fillStyle = '#008F36'
          // ctx.fillText(icon, 45, 86)
          // const marker = new BMap.Marker(data[i])
          // mp.addOverlay(marker)
        }
      }
      mp.addOverlay(canvasLayer)
    }
  }
}
</script>

<style lang="less">
  .baidu-map-wrap {
    width: 100%;
    height: 100%;
    .baidu-map {
      width: 100%;
      height: 100%;

      .BMap_cpyCtrl {
        display: none;
      }
      .anchorBL {
        display: none;
      }
    }
  }

</style>
