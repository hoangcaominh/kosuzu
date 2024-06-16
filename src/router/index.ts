import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"

const router = createRouter({
  history: createWebHistory("https://hoangcaominh.github.io/kosuzu"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    }
  ]
})

export default router
