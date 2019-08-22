<template>
  <div class="content">
    <div class="baidu-map-wrap">
      <div class="baidu-map" id="customizeMap"></div>
      <img v-show="false" id="img" src="../../../assets/img/bookmark.jpeg" height="679" width="678"/>
      <img v-show="false" id="img2" src="../../../assets/img/login.jpg"/>
    </div>
    <div class="search">
      <div class="search_wrap">
        <input class="search_inp" v-model="cityName" id="searchInp" placeholder="地图位置查询">
        <div class="search_btn" @click="setPlace">搜索</div>
      </div>
      <div class="search-panel" :class="searchPanelAnimationStart===1?'search-panel-animation':searchPanelAnimationStart===2?'search-panel-animation-hidden':''" id="searchPanel">
        <ul>
          <li v-for="(item, index) in resultList" :key="index" :id="'result' + index" class="search-item" tabindex="2">
            <div @click="setSearchItem(item.business)">
              <div class="search-icon"><i class="iconfont icon-search"></i></div>
              <div class="search-name">{{ item.business}}</div>
              <div class="search-location">{{item.city}} {{item.district}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import BMap from 'BMap'
import { evils} from '../../../assets/js'
export default {
  name: 'BaiduMap',
  data () {
    return {
      isInit: false,
      checkItem: false,
      searchPanelAnimationStart: 0,
      cityName: '',
      resultList: [],
      mp: {}
    }
  },
  watch: {
    cityName (value) {
      if (value) {
        if (this.checkItem) {
          this.searchPanelAnimationStart = 2
        } else {
          this.searchPanelAnimationStart = 1
        }
      } else {
        this.searchPanelAnimationStart = 2
      }
    }
  },
  mounted () {
    console.log('ssss', this.evils)
    this.initMap()
    this.setAnimated()
    this.keyDown()
  },
  methods: {
    keyDown () {
      const div = document.getElementById('searchInp')
      div.onkeydown = function (e) {
        e = window.event || e
        console.log('e.keyCode', e.keyCode)
        switch (e.keyCode) {
          case 40:
            const result0 = document.getElementById('result0')
            result0.focus()
            break
          default:
            console.log('__')
        }
      }
    },
    setSearchItem (value) {
      this.cityName = value
      this.checkItem = true
      this.setPlace()
    },
    setPlace () {
      this.mp.clearOverlays()
      var _this = this
      function search () {
        var pp = local.getResults().getPoi(0).point
        _this.mp.centerAndZoom(pp, 18)
        _this.mp.addOverlay(new BMap.Marker(pp))
      }
      var local = new BMap.LocalSearch(this.mp, {
        onSearchComplete: search
      })
      local.search(this.cityName)
    },
    search_location () {
      this.mp.centerAndZoom(this.cityName, 11)
    },
    setAnimated () {
      // const div = document.getElementById('searchPanel')
      // const _this = this
      // div.addEventListener('animated', function () {
      //   _this.showSearchPanel.opacity = 1
      // })
    },
    initMap () {
      var mp = new BMap.Map('customizeMap')
      this.mp = mp
      console.log('this', this)
      mp.centerAndZoom(new BMap.Point(116.3964, 39.9093), 10)
      mp.enableScrollWheelZoom()
      var _this = this
      var ac = new BMap.Autocomplete(
        {
          'input': 'searchInp',
          'location': this.mp,
          'onSearchComplete': function (data) {
            _this.checkItem = false
            _this.resultList = data.Qq
            ac.hide()
          }
        }
      )
      mp.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}))
      var canvasLayer = new BMap.CanvasLayer({
        update: update
      })
      const position = {
        x: 100,
        y: 140,
        width: 200,
        height: 120
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
          console.log('_this', _this)
          ctx.fillText(_this.evil('&#xe610;'), pixel.x, pixel.y)
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
  .content{
    width: 100%;
    height: 100%;
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
    .search{
      position:absolute;
      left:4%;
      top:2%;
      width:30%;
      input{
        background:none;
        outline:none;
        border:none;
      }
      .search_wrap{
        background: #fff;
        border:2px solid red;
        padding:6px 10px 5px;
        position:relative;
        width:calc(100% - 24px);
        .search_inp{
          border:0;
          height:20px;
          width:calc(100% - 50px)
        }
        .search_btn{
          position:absolute;
          cursor:pointer;
          right:0;
          top:0;
          width:50px;
          color:#fff;
          height:33px;
          line-height:33px;
          text-align:center;
          background:red;
        }
      }
      .search-panel-animation-hidden{
        animation: search-panel-animation-hidden .5s forwards;
        -webkit-animation:search-panel-animation-hidden .5s forwards;
      }
      @keyframes search-panel-animation-hidden {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(-20px);
          opacity: 0;
        }
      }
      .search-panel-animation{
        animation: search-panel-animation 1s forwards;
        -webkit-animation:search-panel-animation 1s forwards;
      }
      @keyframes search-panel-animation {
        from {
          transform: translateY(-20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .search-panel{
        width:calc(100% - 50px);
        max-height:300px;
        opacity: 0;
        overflow:auto;
        background:#fffdca;
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
        .search-item{
          width: 100%;
          height: 52px;
          cursor: pointer;
          &:focus{
            background:#ff0000;
          }
          &:hover{
            background:#ff0000;
          }
          .search-icon{
            width:20%;
            text-align:center;
            float:left;
            height:52px;
            line-height:52px;
          }
          .search-name{
            width:80%;
            height:26px;
            line-height:26px;
            float:left;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          .search-location{
            width:80%;
            height:26px;
            line-height:26px;
            float:left;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }

</style>
