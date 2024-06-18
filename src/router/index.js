import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/tovar',
			name: 'tovar',
			component: () => import('../views/TovarView.vue'),
		},
		{
			path: '/magazin',
			name: 'magazin',
			component: () => import('../views/VseMagazinView.vue'),
		},
	],
})

export default router
