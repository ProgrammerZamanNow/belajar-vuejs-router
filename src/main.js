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
          component: UserProfile,
          name: 'user'
        },
        {
          path: 'profile',
          component: UserProfile,
          name: 'user-profile'
        },
        {
          path: 'order',
          component: UserOrder,
          name: 'user-order'
        },
        {
          path: 'wishlist',
          component: UserWishlist,
          name: 'user-wishlist'
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
