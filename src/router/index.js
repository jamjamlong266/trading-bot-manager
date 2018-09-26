import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewBot from '@/components/NewBot'
import ViewBot from '@/components/ViewBot'
import EditBot from '@/components/EditBot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-bot',
      component: NewBot
    },
    {
      path: '/edit/:bot_id',
      name: 'edit-bot',
      component: EditBot
    },
    ,
    {
      path: '/:bot_id',
      name: 'view-bot',
      component: ViewBot
    }
  ]
})
