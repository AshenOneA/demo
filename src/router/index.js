import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/page/mainPage'
import detail from '../components/page/detail'
import count from '../components/page/detail/count'
import forecast from '../components/page/detail/forecast'
import analysis from '../components/page/detail/analysis'
import advertising from '../components/page/detail/advertising'
import orderList from '../components/page/orderList'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path:"/",
    component:mainPage
    },
    {
      path:'/orderList',
      component:orderList
    },
    {
      path: '/detail',
      component:detail,
      redirect:'/detail/count',
      children:[
        {
          path: 'count',
          component:count
        },
        {
          path: 'forecast',
          component:forecast
        },
        {
          path: 'analysis',
          component:analysis
        },
        {
          path: 'advertising',
          component:advertising
        }
      ]
     }
  ]
})
