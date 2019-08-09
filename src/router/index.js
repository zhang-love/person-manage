import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Layout from '@/components/index/Layout'
import Index from '@/components/index/Index'
// import BlogIndex from '@/components/blog/Index'
// import BlogEdit from '@/components/blog/manage/Edit'
import DataIndex from '@/components/data/Index'
// import DataEdit from '@/components/data/manage/Edit'
// import NovelIndex from '@/components/novel/Index'
// import NovelEdit from '@/components/novel/manage/Edit'
// import SongIndex from '@/components/song/Index'
// import SongEdit from '@/components/song/manage/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      type: 0,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          // type为1表示菜单项，2表示页面
          type: 2,
          meta: {
            name: '首页',
            icon: 'icon-index',
            id: 1
          }
        },
        {
          path: '/blog',
          name: 'Index',
          component: Index,
          // type为1表示菜单项，2表示页面
          type: 2,
          meta: {
            name: '博客',
            icon: 'icon-blog',
            id: 2
          }
        },
        {
          path: '/data',
          name: 'DataIndex',
          component: DataIndex,
          // type为1表示菜单项，2表示页面
          type: 2,
          meta: {
            name: '统计',
            icon: 'icon-data',
            id: 3
          }
        }
        // {
        //   path: '/blog/index',
        //   type: 1,
        //   meta: {
        //     name: '博客',
        //     icon: 'icon-blog',
        //     id: 2
        //   },
        //   children: [
        //     {
        //       path: '/blog/index',
        //       name: 'Blog',
        //       component: BlogIndex,
        //       type: 1,
        //       meta: {
        //         name: '博客记录',
        //         icon: 'icon-blog',
        //         id: 3
        //       }
        //     },
        //     {
        //       path: '/blog/edit',
        //       component: BlogEdit,
        //       type: 1,
        //       meta: {
        //         name: '博客管理',
        //         icon: 'icon-manage',
        //         id: 4
        //       }
        //     }
        //   ]
        // },
        // {
        //   path: '/data/index',
        //   component: DataIndex,
        //   meta: {
        //     name: '统计',
        //     icon: 'icon-data'
        //   },
        //   children: [
        //     {
        //       path: '/data/edit',
        //       component: DataEdit,
        //       meta: {
        //         name: '统计管理',
        //         icon: 'icon-manage'
        //       }
        //     }
        //   ]
        // }
        // {
        //   path: '/novel/index',
        //   name: 'Novel',
        //   component: NovelIndex,
        //   meta: {
        //     name: '小说',
        //     icon: 'icon-novel'
        //   },
        //   children: [
        //     {
        //       path: '/novel/edit',
        //       component: NovelEdit,
        //       meta: {
        //         name: '小说管理',
        //         icon: 'icon-manage'
        //       }
        //     }
        //   ]
        // },
        // {
        //   path: '/song/index',
        //   name: 'Song',
        //   component: SongIndex,
        //   meta: {
        //     name: '歌曲',
        //     icon: 'icon-song'
        //   },
        //   children: [
        //     {
        //       path: '/song/edit',
        //       component: SongEdit,
        //       meta: {
        //         name: '歌曲管理',
        //         icon: 'icon-manage'
        //       }
        //     }
        //   ]
        // }
      ]
    }
  ]
})
