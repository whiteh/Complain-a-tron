import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Email from '@/components/Email'
import Recaptcha from '@/components/recaptcha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Email',
      name: 'Email',
      component: Email
    },
    {
      path: '/captcha',
      name: 'captcha',
      component: Recaptcha
    }
  ]
})
