import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
console.log(window)
export default new Router({
  mode: 'history',
  // base: '/dist',
  routes: [
    {
      path: '/1',
      name: 'PcPage',
      component: () => import('@/views/PcPage')
    },
    {
      path: '/2',
      name: 'XsPage',
      component: () => import('@/views/XsPage')
    },
    {
      path: '/3',
      name: 'HSI',
      component: () => import('@/views/HSI')
    },
    {
      path: '/4',
      name: 'HKS',
      component: () => import('@/views/HKS')
    },
    {
      path: '/5',
      name: 'StockMarket',
      component: () => import('@/views/StockMarket')
    },
    {
      path: '/6',
      name: 'Security',
      component: () => import('@/views/Security')
    },
    {
      path: '/7',
      name: 'SecurityHk',
      component: () => import('@/views/SecurityHk')
    },
    {
      path: '/8',
      name: 'FourNine',
      component: () => import('@/views/FourNine')
    },
    {
      path: '/9',
      name: 'FourNineHk',
      component: () => import('@/views/FourNineHk')
    },
    {
      path: '/10',
      name: 'XsLanding',
      component: () => import('@/views/XsLanding')
    },
    {
      path: '/11',
      name: 'XsLandingHk',
      component: () => import('@/views/XsLandingHk')
    },
    {
      path: '/12',
      name: 'XsOld',
      component: () => import('@/views/XsOld')
    },
    {
      path: '/13',
      name: 'XsOldHk',
      component: () => import('@/views/XsOldHk')
    }
  ]
})
