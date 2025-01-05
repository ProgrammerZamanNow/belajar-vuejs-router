import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProductDetail from "./components/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
import ProductSearch from "./components/ProductSearch.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
      props: {
        title: "Home Page"
      }
    },
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/about",
      component: About,
      sensitive: true
    },
    {
      path: "/products/search",
      component: ProductSearch,
      name: "product-search",
      props: route => ({
        product: route.query.product
      })
    },
    {
      path: "/products/search/:keyword",
      redirect: route => {
        return {
          name: "product-search",
          query: {
            product: route.params.keyword
          }
        }
      }
    },
    {
      path: "/products/:id(\\d+)?",
      component: ProductDetail,
      props: true
      // props: route => (
      //   {
      //     id: route.params.id
      //   }
      // )
    },
    {
      path: "/users",
      component: () => import('./components/User.vue'),
      children: [
        {
          path: '',
          name: 'user',
          components : {
            header: () => import('./components/UserHeader.vue'),
            default: () => import('./components/UserProfile.vue')
          }
        },
        {
          path: 'profile',
          name: 'user-profile',
          components : {
            header: () => import('./components/UserHeader.vue'),
            default: () => import('./components/UserProfile.vue')
          }
        },
        {
          path: 'order',
          name: 'user-order',
          components : {
            header: () => import('./components/UserHeader.vue'),
            default: () => import('./components/UserOrder.vue'),
            footer: () => import('./components/UserOrderFooter.vue')
          }
        },
        {
          path: 'wishlist',
          name: 'user-wishlist',
          components : {
            header: () => import('./components/UserHeader.vue'),
            default: () => import('./components/UserWishlist.vue'),
            footer: () => import('./components/UserWishlistFooter.vue')
          }
        }
      ]
    },
    {
      path: "/:notfound*",
      component: NotFound
    }
  ],
  history: createWebHistory()
})

createApp(App).use(router).mount('#app')
