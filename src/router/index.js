import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '../views/Step1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Step2.vue')
    }
  ]
})
