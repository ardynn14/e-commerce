import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Info from './views/Info.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import Products from './views/Products.vue';
import Cart from './views/Carts.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/info',
      name: 'info',
      component: Info,
    }, {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    }, {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },{
      path: '/products',
      name: 'products',
      component: Products,
    },{
      path: '/cart',
      name: 'cart',
      component: Cart,
    }
  ],
});
