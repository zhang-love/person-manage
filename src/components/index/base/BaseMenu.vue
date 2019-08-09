<template>
  <div class="Menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
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
    },
    handleClose (key, keyPath) {
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
