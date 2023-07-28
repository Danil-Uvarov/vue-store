
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Content',
			component: () => import('../views/Content.vue'),
			meta: {
				layout: 'defaultLayout',
			}
		},
		{
			path: '/product/:id',
			name: 'product_card',
			component: () => import('../views/product_card.vue'),
			meta: {
				layout: 'defaultLayout'
			}
		},
		{
			path: '/bag',
			name: 'bag',
			component: () => import('../views/item_of_the_bag.vue'),
			meta: {
				layout: 'defaultLayout',
			}
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: () => import('../views/checkout.vue'),
			meta: {
				layout: 'checkoutLayout',
			}
		},
		{
			path: '/add-Payment',
			name: 'add-Payment',
			component: () => import('../views/add-Payment.vue'),
			meta: {
				layout: 'paymentLayout'
			}
		},
		{
			path: '/add-Address',
			name: 'add-Address',
			component: () => import('../views/add-Address.vue'),
			meta: {
				layout: 'addressLayout'
			}
		}
	],
})