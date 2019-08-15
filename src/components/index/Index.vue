<template>
  <div class="Index">
    <div class="index-map-wrap">
      <div class="index-map">
        <baidu-map/>
      </div>
    </div>
    <div class="index-item-wrap">
      <div class="index-item">
        当前天气
      </div>
    </div>
    <div class="index-statistics-wrap">
      <div class="index-statistics1"></div>
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
      indexSize: {
        width: '960px'
      },
      mapSize: {
        width: '600px'
      },
      weatherSize: {
        width: '280px'
      }
    }
  },
  mounted () {
    const _this = this
    window.onresize = () => {
      if (window.innerWidth <= 1200) {
        _this.mapSize.width = window.innerWidth - 220 - 300 + 'px'
      }
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
    width:30%;
    max-height:500px;
    float:left;
    .index-item{
      height:calc(100% - 4px);
      margin-right:10px;
      background-color:#fff;
      border-radius:6px;
      border: 2px solid #fff;
    }
  }
  .index-statistics-wrap{
    width:100%;
    height:30%;
    min-height:calc(100% - 500px);
    float:left;
    .index-statistics1{
      background:#fff;
      height:calc(100% - 20px);
      margin:10px;
    }
  }
}
</style>
