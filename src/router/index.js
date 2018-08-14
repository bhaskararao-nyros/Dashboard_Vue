import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Notifications from '@/components/Notifications'
import Maps from '@/components/Maps'
import Tables from '@/components/Tables'
import Typography from '@/components/Typography'
import Icons from '@/components/Icons'
import Userprofile from '@/components/Userprofile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/userprofile',
      name: 'Userprofile',
      component: Userprofile
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    }
  ]
})
