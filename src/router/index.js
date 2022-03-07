/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

// eslint-disable-next-line no-unused-vars
import Board from '@/components/Board'
import BoradDetail from '@/components/ContentDetail'
import Create from '@/components/Create'
import Start from '@/components/Start'
import Login from '@/components/Login'
import Festival from '@/components/Festival'
import Picture from '@/components/FestivalPicture'
import Introduce from '@/components/Introduce'
import Info from '@/components/Inform'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/festival',
      name: 'festival',
      component: Festival
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/detail/:contentId',
      name: 'BoradDetail',
      component: BoradDetail
    },
    {
      path: '/board/create/:contentId?',
      name: 'Create',
      component: Create
    }
  ]
})
