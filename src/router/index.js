import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewBot from '@/components/NewBot'
import ViewBot from '@/components/ViewBot'
import EditBot from '@/components/EditBot'
import Login from '@/components/Login'
import Register from '@/components/Register'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new',
      name: 'new-bot',
      component: NewBot,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:bot_id',
      name: 'edit-bot',
      component: EditBot,
      meta: {
        requiresAuth: true
      }
    },
    ,
    {
      path: '/:bot_id',
      name: 'view-bot',
      component: ViewBot,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach( (to, from, next) => {
  //Check for requiredAuth guard
  if( to.matched.some(record => record.meta.requiresAuth) ) {
    //Check if NOT logged in
    if( !firebase.auth().currentUser ) {
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Process to route
      next();
    }
  } else if ( to.matched.some(record => record.meta.requiresGuest) ) {
    //Check if IS logged in
    if( firebase.auth().currentUser ) {
      //Go to path
      console.log("IS USER")
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Process to route
      next();
    }
  } else {
    // Process to route
    next();
  }
})
//Nav Guard


export default router
