import { createRouter, createWebHistory } from 'vue-router'
import JeuView from '../views/jeu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/jeu/:idgame/:iduser',
      name: 'jeu',
      component: JeuView
    },

  ]
})

export default router
