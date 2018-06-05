import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/pages/login'
import register from '@/components/pages/register'
import index from '@/components/pages/index'
import index_film from '@/components/pages/index_film'
import index_film_operate from '@/components/pages/index_film_operate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path:'index_film',component:index_film},
        { path: 'index_film_operate', component: index_film_operate},
        
      ]
    }
  ]
})
