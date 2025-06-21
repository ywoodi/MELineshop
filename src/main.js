import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './views/HomePage.vue';
import Products from './views/Products.vue';
import ProductView from './views/ProductView.vue';
import Cart from './views/Cart.vue';
import CheckOut from './views/CheckOut.vue';
import AboutUs from './views/AboutUs.vue';
import Lizenz from './views/Lizenz.vue';
import Impressum from './views/Impressum.vue';
import Datenschutz from './views/Datenschutz.vue';
import Barrierefreiheit from './views/Barrierefreiheit.vue';
import Contact from './views/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: Homepage,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:url',
      name: 'product-view',
      component: ProductView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/license',
      name: 'license',
      component: Lizenz,
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: Impressum,
    },
    {
      path: '/dataprotection',
      name: 'dataprotection',
      component: Datenschutz,
    },
        {
      path: '/accessibility',
      name: 'accessibility',
      component: Barrierefreiheit,
    },
            {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
    scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

createApp(App).use(router).mount('#app');
