// import Vue from 'cdn-vue'
import Router from 'cdn-vue-router'
// import Login from '@/components/login/Login'
// import Layout from '@/components/index/Layout'
// import Index from '@/components/index/Index'
// import BlogIndex from '@/components/blog/Index'
// import BlogEdit from '@/components/blog/manage/Edit'
// import DataIndex from '@/components/data/Index'
// import DataEdit from '@/components/data/manage/Edit'
// import NovelIndex from '@/components/novel/Index'
// import NovelEdit from '@/components/novel/manage/Edit'
// import SongIndex from '@/components/song/Index'
// import SongEdit from '@/components/song/manage/Edit'

// Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['@/components/login/Login'], resolve)
    },
    {
      path: '/layout',
      name: 'Layout',
      component: resolve => require(['@/components/index/Layout'], resolve),
      type: 0,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: resolve => require(['@/components/index/Index'], resolve),
          // type为1表示菜单项，2表示页面
          type: 2,
          meta: {
            name: '首页',
            icon: 'icon-index',
            id: '1'
          }
        },
        {
          path: '/blog',
          // type为1表示菜单项，2表示页面
          type: 1,
          meta: {
            name: '博客',
            icon: 'icon-blog',
            id: '2'
          },
          children: [
            {
              path: '/index',
              component: resolve => require(['@/components/blog/Index'], resolve),
              type: 2,
              meta: {
                name: '主页',
                id: '2-1'
              }
            },
            {
              path: '/edit',
              component: resolve => require(['@/components/blog/manage/Edit'], resolve),
              type: 2,
              meta: {
                name: '管理',
                id: '2-2'
              }
            }
          ]
        },
        {
          path: '/data',
          // type为1表示菜单项，2表示页面
          type: 1,
          meta: {
            name: '统计',
            icon: 'icon-data',
            id: '3'
          },
          children: [
            {
              path: '/index',
              component: resolve => require(['@/components/data/Index'], resolve),
              type: 2,
              meta: {
                name: '主页',
                id: '3-1'
              }
            },
            {
              path: '/edit',
              component: resolve => require(['@/components/data/manage/Edit'], resolve),
              type: 2,
              meta: {
                name: '管理',
                id: '3-2'
              }
            }
          ]
        },
        {
          path: '/novel',
          // type为1表示菜单项，2表示页面
          type: 1,
          meta: {
            name: '小说',
            icon: 'icon-novel',
            id: '4'
          },
          children: [
            {
              path: '/index',
              component: resolve => require(['@/components/novel/Index'], resolve),
              type: 2,
              meta: {
                name: '主页',
                id: '4-1'
              }
            },
            {
              path: '/edit',
              component: resolve => require(['@/components/novel/manage/Edit'], resolve),
              type: 2,
              meta: {
                name: '管理',
                id: '4-2'
              }
            }
          ]
        },
        {
          path: '/song',
          // type为1表示菜单项，2表示页面
          type: 1,
          meta: {
            name: '歌曲',
            icon: 'icon-song',
            id: '5'
          },
          children: [
            {
              path: '/index',
              component: resolve => require(['@/components/song/Index'], resolve),
              type: 2,
              meta: {
                name: '主页',
                id: '5-1'
              }
            },
            {
              path: '/edit',
              component: resolve => require(['@/components/song/manage/Edit'], resolve),
              type: 2,
              meta: {
                name: '管理',
                id: '5-2'
              }
            }
          ]
        }
      ]
    }
  ]
})
