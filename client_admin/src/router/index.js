import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},

	// 注册
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			index: 0,
			title: '注册'
		}
	},

	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },



	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告信息列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告信息详情'
		}
	},

	// 商品路由
	// {
	// 	path: '/goods/table',
	// 	name: 'goods_table',
	// 	component: () => import('../views/goods/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '商品列表'
	// 	}
	// },
	// {
	// 	path: '/goods/view',
	// 	name: 'goods_view',
	// 	component: () => import('../views/goods/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '商品详情'
	// 	}
	// },

	// 商品分类路由
	{
		path: '/goods_type/table',
		name: 'goods_type_table',
		component: () => import('../views/goods_type/table.vue'),
		meta: {
			index: 0,
			title: '商品分类列表'
		}
	},
	{
		path: '/goods_type/view',
		name: 'goods_type_view',
		component: () => import('../views/goods_type/view.vue'),
		meta: {
			index: 0,
			title: '商品分类详情'
		}
	},

	// 订单路由
	{
		path: '/order/table',
		name: 'order_table',
		component: () => import('../views/order/table.vue'),
		meta: {
			index: 0,
			title: '订单列表'
		}
	},
	{
		path: '/order/view',
		name: 'order_view',
		component: () => import('../views/order/view.vue'),
		meta: {
			index: 0,
			title: '订单详情'
		}
	},

	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 学员用户路由
	{
		path: '/student_users/table',
		name: 'student_users_table',
		component: () => import('../views/student_users/table.vue'),
		meta: {
			index: 0,
			title: '学员用户列表'
		}
	},
	{
		path: '/student_users/view',
		name: 'student_users_view',
		component: () => import('../views/student_users/view.vue'),
		meta: {
			index: 0,
			title: '学员用户详情'
		}
	},
	// 教师用户路由
	{
		path: '/teacher_users/table',
		name: 'teacher_users_table',
		component: () => import('../views/teacher_users/table.vue'),
		meta: {
			index: 0,
			title: '教师用户列表'
		}
	},
	{
		path: '/teacher_users/view',
		name: 'teacher_users_view',
		component: () => import('../views/teacher_users/view.vue'),
		meta: {
			index: 0,
			title: '教师用户详情'
		}
	},
	// 商品信息路由
	{
		path: '/product_information/table',
		name: 'product_information_table',
		component: () => import('../views/product_information/table.vue'),
		meta: {
			index: 0,
			title: '商品信息列表'
		}
	},
	{
		path: '/product_information/view',
		name: 'product_information_view',
		component: () => import('../views/product_information/view.vue'),
		meta: {
			index: 0,
			title: '商品信息详情'
		}
	},
	// 物流订单路由
	{
		path: '/logistics_orders/table',
		name: 'logistics_orders_table',
		component: () => import('../views/logistics_orders/table.vue'),
		meta: {
			index: 0,
			title: '物流订单列表'
		}
	},
	{
		path: '/logistics_orders/view',
		name: 'logistics_orders_view',
		component: () => import('../views/logistics_orders/view.vue'),
		meta: {
			index: 0,
			title: '物流订单详情'
		}
	},
	// 售后信息路由
	{
		path: '/after_sales_information/table',
		name: 'after_sales_information_table',
		component: () => import('../views/after_sales_information/table.vue'),
		meta: {
			index: 0,
			title: '售后信息列表'
		}
	},
	{
		path: '/after_sales_information/view',
		name: 'after_sales_information_view',
		component: () => import('../views/after_sales_information/view.vue'),
		meta: {
			index: 0,
			title: '售后信息详情'
		}
	},
	// 课程安排路由
	{
		path: '/course_arrangement/table',
		name: 'course_arrangement_table',
		component: () => import('../views/course_arrangement/table.vue'),
		meta: {
			index: 0,
			title: '课程安排列表'
		}
	},
	{
		path: '/course_arrangement/view',
		name: 'course_arrangement_view',
		component: () => import('../views/course_arrangement/view.vue'),
		meta: {
			index: 0,
			title: '课程安排详情'
		}
	},
	// 课程签到路由
	{
		path: '/course_check_in/table',
		name: 'course_check_in_table',
		component: () => import('../views/course_check_in/table.vue'),
		meta: {
			index: 0,
			title: '课程签到列表'
		}
	},
	{
		path: '/course_check_in/view',
		name: 'course_check_in_view',
		component: () => import('../views/course_check_in/view.vue'),
		meta: {
			index: 0,
			title: '课程签到详情'
		}
	},
	// 课程考勤路由
	{
		path: '/course_attendance/table',
		name: 'course_attendance_table',
		component: () => import('../views/course_attendance/table.vue'),
		meta: {
			index: 0,
			title: '课程考勤列表'
		}
	},
	{
		path: '/course_attendance/view',
		name: 'course_attendance_view',
		component: () => import('../views/course_attendance/view.vue'),
		meta: {
			index: 0,
			title: '课程考勤详情'
		}
	},
	// 跟练视频路由
	{
		path: '/follow_up_video/table',
		name: 'follow_up_video_table',
		component: () => import('../views/follow_up_video/table.vue'),
		meta: {
			index: 0,
			title: '跟练视频列表'
		}
	},
	{
		path: '/follow_up_video/view',
		name: 'follow_up_video_view',
		component: () => import('../views/follow_up_video/view.vue'),
		meta: {
			index: 0,
			title: '跟练视频详情'
		}
	},
	// 商品库存路由
	{
		path: '/inventory_of_goods/table',
		name: 'inventory_of_goods_table',
		component: () => import('../views/inventory_of_goods/table.vue'),
		meta: {
			index: 0,
			title: '商品库存列表'
		}
	},
	{
		path: '/inventory_of_goods/view',
		name: 'inventory_of_goods_view',
		component: () => import('../views/inventory_of_goods/view.vue'),
		meta: {
			index: 0,
			title: '商品库存详情'
		}
	},
	// 课程信息路由
	{
		path: '/course_information/table',
		name: 'course_information_table',
		component: () => import('../views/course_information/table.vue'),
		meta: {
			index: 0,
			title: '课程信息列表'
		}
	},
	{
		path: '/course_information/view',
		name: 'course_information_view',
		component: () => import('../views/course_information/view.vue'),
		meta: {
			index: 0,
			title: '课程信息详情'
		}
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "普拉提会馆管理系统-admin";
	document.title = title;
})

export default router
