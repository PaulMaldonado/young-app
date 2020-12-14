import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth-views/Register.vue'
import Profile from '../views/users/Profile.vue'
import Create from '../views/crud-views/Create.vue'
import Show from '../views/crud-views/Show.vue'

// firebase
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      auth: true
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        next()
      } else {
        next({
          path: "/"
        })
      } 
    })
  } else if(to.matched.some(record => record.meta.guest)) {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        next({
          path: '/profile'
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }

})

export default router
