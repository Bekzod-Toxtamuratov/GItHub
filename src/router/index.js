import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
		path: '/',
<<<<<<< HEAD
          name: 'home',
          component: () => import('../views/HomeView.vue'),
=======
        name: 'home',
        component: () => import('../pages/Home.vue'),
>>>>>>> 9937b315d17460002bbd8aaad64121cac70961f7
	}],
})

export default router
