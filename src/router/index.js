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
		{
			path: '/home/:id',
			name: 'product-detail',
			component: () => import('../views/TovarView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/Onas.View.vue'),
		},
		{
			path: '/vse-magazins',
			name: 'vse-magazins',
			component: () => import('../views/VseMagazinView.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})
router.beforeEach((to, from) => {
	const isLoggedin = JSON.parse(localStorage.getItem('user'))

	if (!isLoggedin && to.name != 'login') {
		return { name: 'login' }
	}
})
export default router
