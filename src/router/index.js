import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Login from '@/components/Login'
import Home from '@/components/Home'
import EnterOptomer from '@/components/EnterOptomer'
import EnterConsume from '@/components/EnterConsume'
import EnterClient from '@/components/EnterClient'
import ConsumeDetail from '@/components/ConsumeDetail'
import ClientDetail from '@/components/ClientDetail'
import Error from '@/components/404'

Vue.use(Router)

Vue.use(ElementUI);

export default new Router({
  mode:'hash',
  routes: [
    { path: '/Login', name: 'Login', component: Login },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/EnterOptomer', name: 'EnterOptomer', component: EnterOptomer },
    { path: '/EnterConsume', name: 'EnterConsume', component: EnterConsume },
    { path: '/EnterClient', name: 'EnterClient', component: EnterClient },
    { path: '/ConsumeDetail', name: 'ConsumeDetail', component: ConsumeDetail },
    { path: '/ClientDetail', name: 'ClientDetail', component: ClientDetail },
    { path: '*', name: 'Error', component: Error, hidden: true }
  ]
})
