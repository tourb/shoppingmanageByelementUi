import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'pages-login',
    component: () => import('../page/pages-login.vue')
  },
  {
    path: '/manage',
    component: () => import('../page/pages-manage.vue'),
    children: [
      {
        path: '/',
        name: 'pages-home',
        component: () => import('../page/pages-home.vue')
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import('../page/pages-addShop.vue'),
        meta: ['添加数据', '添加商铺'],
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../page/pages-userList.vue'),
        meta: ['数据管理', '用户列表'],
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../page/pages-shopList.vue'),
        meta: ['数据管理', '商家列表'],
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../page/pages-foodList.vue'),
        meta: ['数据管理', '食品列表'],
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../page/pages-orderList.vue'),
        meta: ['数据管理', '订单列表'],
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('../page/pages-adminList.vue'),
        meta: ['数据管理', '管理员列表'],
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: () => import('../page/pages-addGoods.vue'),
        meta: ['添加数据', '添加商品'],
      },
      {
        path: '/visitor',
        name: 'visitor',
        component: () => import('../page/pages-visitor.vue'),
        meta: ['图表', '用户分布'],
      },
      {
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import('../page/pages-vueEdit.vue'),
        meta: ['编辑', '文本编辑'],
      },
      {
        path: '/adminSet',
        name: 'adminSet',
        component: () => import('../page/pages-adminSet.vue'),
        meta: ['设置', '管理员设置'],
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../page/pages-explain.vue'),
        meta: ['说明', '说明'],
      },
    ],

  },

]

const router = new VueRouter({
  routes
})

export default router
