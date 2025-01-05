import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProductDetail from "./components/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
import ProductSearch from "./components/ProductSearch.vue";
import User from "./components/User.vue";
import UserProfile from "./components/UserProfile.vue";
import UserOrder from "./components/UserOrder.vue";
import UserWishlist from "./components/UserWishlist.vue";
import UserHeader from "./components/UserHeader.vue";
import UserOrderFooter from "./components/UserOrderFooter.vue";
import UserWishlistFooter from "./components/UserWishlistFooter.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About,
      sensitive: true
    },
    {
      path: "/products/search",
      component: ProductSearch,
      name: "product-search"
    },
    {
      path: "/products/:id(\\d+)?",
      component: ProductDetail
    },
    {
      path: "/users",
      component: User,
      children: [
        {
          path: '',
          name: 'user',
          components : {
            header: UserHeader,
            default: UserProfile
          }
        },
        {
          path: 'profile',
          name: 'user-profile',
          components : {
            header: UserHeader,
            default: UserProfile
          }
        },
        {
          path: 'order',
          name: 'user-order',
          components : {
            header: UserHeader,
            default: UserOrder,
            footer: UserOrderFooter
          }
        },
        {
          path: 'wishlist',
          name: 'user-wishlist',
          components : {
            header: UserHeader,
            default: UserWishlist,
            footer: UserWishlistFooter
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
