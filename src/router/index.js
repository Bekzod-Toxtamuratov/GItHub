import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: () => import('../components/auth/Login.vue'),
		},
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
	],
})

export default router
