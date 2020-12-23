import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {return import(/* webpackChunkName: "about" */ './views/About.vue');}
const Users = () => {return import(/* webpackChunkName: "users" */ './views/Users.vue');}
const UsersDetail = () => {return import(/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue');}

const UsersEdit = () => {return import(/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue');}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about-name',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      children:[
        {
          path:':id',
          name: 'users-detail',
          component: UsersDetail,
        },
        {
          path:':id/edit',
          name: 'users-edit',
          component: UsersEdit,
        }
      ]
    },
    {
      path:'/redirect-me',
      //redirect:'/users'
      redirect:{name : 'users'}
    },
    {
      path : '/*',
      redirect:{name : 'home'}
    }
  ]
})
