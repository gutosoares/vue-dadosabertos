import Vue from 'vue'
import Router from 'vue-router'

import Comissao from '@/components/Comissao'
import Deputado from '@/components/Deputado'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Comissao
    },
    {
      path: '/comissao',
      name: 'Comissao',
      component: Comissao
    },
    {
      path: '/deputado',
      name: 'Deputado',
      component: Deputado
    }
  ]
})
