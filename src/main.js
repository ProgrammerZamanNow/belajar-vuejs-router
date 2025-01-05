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
      component: Home
    },
    {
      path: "/about",
      component: About,
      sensitive: true
    },
    {
      path: "/products/search",
      component: ProductSearch
    },
    {
      path: "/products/:id(\\d+)?",
      component: ProductDetail
    },
    {
      path: "/:notfound*",
      component: NotFound
    }
  ],
  history: createWebHistory()
})

createApp(App).use(router).mount('#app')
