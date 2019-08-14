<template>
  <div class="Menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="select"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(item, index) in $router.options.routes" :key="index">
        <SubMenu v-if="item.type === 0" :contentRoute="item.children" ></SubMenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import SubMenu from './subMenu/SubMenu'
export default {
  name: 'BaseMenu.vue',
  components: {
    SubMenu
  },
  data () {
    return {
      contentRoute: []
    }
  },
  mounted () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('key', key)
      console.log('keyPath', keyPath)
    },
    handleClose (key, keyPath) {
    },
    select (index, indexPath) {
      console.log('index', index)
      console.log('indexPath', indexPath)
    }
  }
}
</script>
<style lang="less">
  .Menu{
    .iconName{
      font-size:18px;
      padding-left:10px;
    }
  }
</style>
