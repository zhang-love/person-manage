<template>
  <div class="BaiduMap" id="customizeMap">

  </div>
</template>

<script>
import BMap from 'BMap'

export default {
  name: 'BaiduMap',
  data () {
    return {}
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      const map = new BMap.Map('customizeMap')
      const point = new BMap.Point(111.742579, 40.818675)
      map.centerAndZoom(point, 12)
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
    }
  }
}
</script>

<style lang="less">
.BaiduMap{
  width:100%;
  height:100%;
}
</style>
