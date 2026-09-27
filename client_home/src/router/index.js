import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},




	// 商品路由
	{
		path: '/goods/list',
		name: 'goods_list',
		component: () => import('../views/goods/list.vue')
	},
	{
		path: '/goods/details',
		name: 'goods_details',
		component: () => import('../views/goods/details.vue')
	},
	{
		path: '/pay/detail',
		name: 'pay_detail',
		component: () => import('../views/pay/details.vue')
	},
	// 购物车路由
	{
		path: '/cart/list',
		name: 'cart_list',
		component: () => import('../views/cart/list.vue')
	},
	// 收货地址路由
	{
		path: '/user/address',
		name: 'address',
		component: () => import('../views/user/address.vue')
	},
	{
		path: '/user/address_edit',
		name: 'address_edit',
		component: () => import('../views/user/address_edit.vue')
	},
	// 订单路由
	{
		path: '/order/list',
		name: 'order_list',
		component: () => import('../views/order/list.vue')
	},
	{
		path: '/order/details',
		name: 'order_details',
		component: () => import('../views/order/details.vue')
	},


	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	
	
		
	
		
		// 商品信息列表路由
	{
		path: '/product_information/list',
		name: '/product_information_list',
		component: () => import('../views/product_information/list.vue')
	},
	
		// 商品信息详情路由
	{
		path: '/product_information/details',
		name: '/product_information_details',
		component: () => import('../views/product_information/details.vue')
	},
		
	
		
	
		
	
		
	
		
	
		
		// 跟练视频列表路由
	{
		path: '/follow_up_video/list',
		name: '/follow_up_video_list',
		component: () => import('../views/follow_up_video/list.vue')
	},
	
		// 跟练视频详情路由
	{
		path: '/follow_up_video/details',
		name: '/follow_up_video_details',
		component: () => import('../views/follow_up_video/details.vue')
	},
		
	
		
		// 课程信息列表路由
	{
		path: '/course_information/list',
		name: '/course_information_list',
		component: () => import('../views/course_information/list.vue')
	},
	
		// 课程信息详情路由
	{
		path: '/course_information/details',
		name: '/course_information_details',
		component: () => import('../views/course_information/details.vue')
	},
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "普拉提会馆管理系统-home";
	document.title = title;
	document.logo = "普拉提会馆管理系统"
})

export default router
