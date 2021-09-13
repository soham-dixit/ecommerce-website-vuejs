import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'/product',
          component:Product,
          name:'Product'
        }
      ]

    }
  ],
    mode:'history'
},

  )
