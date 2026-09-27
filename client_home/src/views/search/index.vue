<template>
  <div class="page_search">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>
				<!-- 商品搜索结果 -->
			  <list_result_search
				:list="result_goods"
				title="商品信息"
				source_table="goods"
			  ></list_result_search>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="新闻资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/student_users/list', 'get')"
				:list="result_student_users_student_name"
				title="学员用户学员姓名"
				source_table="student_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/student_users/list', 'get')"
				:list="result_student_users_student_gender"
				title="学员用户学员性别"
				source_table="student_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/student_users/list', 'get')"
				:list="result_student_users_student_id"
				title="学员用户学员学号"
				source_table="student_users"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/teacher_users/list', 'get')"
				:list="result_teacher_users_teachers_name"
				title="教师用户教师姓名"
				source_table="teacher_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/teacher_users/list', 'get')"
				:list="result_teacher_users_teacher_gender"
				title="教师用户教师性别"
				source_table="teacher_users"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/teacher_users/list', 'get')"
				:list="result_teacher_users_teacher_id"
				title="教师用户教师工号"
				source_table="teacher_users"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/product_information/list', 'get')"
				:list="result_product_information_product_remarks"
				title="商品信息商品备注"
				source_table="product_information"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/logistics_orders/list', 'get')"
				:list="result_logistics_orders_order_number"
				title="物流订单订单编号"
				source_table="logistics_orders"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/logistics_orders/list', 'get')"
				:list="result_logistics_orders_product_name"
				title="物流订单商品名称"
				source_table="logistics_orders"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/logistics_orders/list', 'get')"
				:list="result_logistics_orders_order_status"
				title="物流订单订单状态"
				source_table="logistics_orders"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/after_sales_information/list', 'get')"
				:list="result_after_sales_information_order_number"
				title="售后信息订单编号"
				source_table="after_sales_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/after_sales_information/list', 'get')"
				:list="result_after_sales_information_product_name"
				title="售后信息商品名称"
				source_table="after_sales_information"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/after_sales_information/list', 'get')"
				:list="result_after_sales_information_after_sales_type"
				title="售后信息售后类型"
				source_table="after_sales_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/after_sales_information/list', 'get')"
				:list="result_after_sales_information_after_sales_status"
				title="售后信息售后状态"
				source_table="after_sales_information"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/course_arrangement/list', 'get')"
				:list="result_course_arrangement_course_name"
				title="课程安排课程名称"
				source_table="course_arrangement"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/course_arrangement/list', 'get')"
				:list="result_course_arrangement_teachers_name"
				title="课程安排教师姓名"
				source_table="course_arrangement"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/course_arrangement/list', 'get')"
				:list="result_course_arrangement_student_name"
				title="课程安排学员姓名"
				source_table="course_arrangement"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/course_check_in/list', 'get')"
				:list="result_course_check_in_course_name"
				title="课程签到课程名称"
				source_table="course_check_in"
			  ></list_result_search>
																				  <list_result_search
				v-if="$check_action('/course_check_in/list', 'get')"
				:list="result_course_check_in_teachers_name"
				title="课程签到教师姓名"
				source_table="course_check_in"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/course_check_in/list', 'get')"
				:list="result_course_check_in_student_name"
				title="课程签到学员姓名"
				source_table="course_check_in"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/course_attendance/list', 'get')"
				:list="result_course_attendance_course_name"
				title="课程考勤课程名称"
				source_table="course_attendance"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/course_attendance/list', 'get')"
				:list="result_course_attendance_teachers_name"
				title="课程考勤教师姓名"
				source_table="course_attendance"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/course_attendance/list', 'get')"
				:list="result_course_attendance_student_name"
				title="课程考勤学员姓名"
				source_table="course_attendance"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/course_attendance/list', 'get')"
				:list="result_course_attendance_attendance_status"
				title="课程考勤考勤状态"
				source_table="course_attendance"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/follow_up_video/list', 'get')"
				:list="result_follow_up_video_title_name"
				title="跟练视频标题名称"
				source_table="follow_up_video"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/inventory_of_goods/list', 'get')"
				:list="result_inventory_of_goods_product_name"
				title="商品库存商品名称"
				source_table="inventory_of_goods"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/course_information/list', 'get')"
				:list="result_course_information_course_name"
				title="课程信息课程名称"
				source_table="course_information"
			  ></list_result_search>
																		</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_goods": [],
	  "result_article": [],
						"result_student_users_student_name":[],
								"result_student_users_student_gender":[],
								"result_student_users_student_id":[],
									"result_teacher_users_teachers_name":[],
								"result_teacher_users_teacher_gender":[],
								"result_teacher_users_teacher_id":[],
									"result_product_information_product_remarks":[],
									"result_logistics_orders_order_number":[],
											"result_logistics_orders_product_name":[],
																	"result_logistics_orders_order_status":[],
															"result_after_sales_information_order_number":[],
											"result_after_sales_information_product_name":[],
																	"result_after_sales_information_after_sales_type":[],
											"result_after_sales_information_after_sales_status":[],
															"result_course_arrangement_course_name":[],
																				"result_course_arrangement_teachers_name":[],
														"result_course_arrangement_student_name":[],
															"result_course_check_in_course_name":[],
																				"result_course_check_in_teachers_name":[],
														"result_course_check_in_student_name":[],
																		"result_course_attendance_course_name":[],
																	"result_course_attendance_teachers_name":[],
														"result_course_attendance_student_name":[],
								"result_course_attendance_attendance_status":[],
												"result_follow_up_video_title_name":[],
																								"result_inventory_of_goods_product_name":[],
																					"result_course_information_course_name":[],
																};
  },
  methods: {
	/**
	 * 获取${fmodel.filter.cart_name}
	 */
	get_goods() {
	  this.$get("~/api/goods/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_goods = json.result.list;
		}
	  });
	},
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取student_name
	 */
	get_student_users_student_name(){
		let url = "~/api/student_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_student_users_student_name = json.result.list;
			result_student_users_student_name.map(o => o.title = o['student_name'])
	  			this.result_student_users_student_name = result_student_users_student_name
		 	}
		});
	},
						/**
	 * 获取student_gender
	 */
	get_student_users_student_gender(){
		let url = "~/api/student_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_gender": this.query.word }, (json) => {
		  if (json.result) {
			var result_student_users_student_gender = json.result.list;
			result_student_users_student_gender.map(o => o.title = o['student_gender'])
	  			this.result_student_users_student_gender = result_student_users_student_gender
		 	}
		});
	},
						/**
	 * 获取student_id
	 */
	get_student_users_student_id(){
		let url = "~/api/student_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_id": this.query.word }, (json) => {
		  if (json.result) {
			var result_student_users_student_id = json.result.list;
			result_student_users_student_id.map(o => o.title = o['student_id'])
	  			this.result_student_users_student_id = result_student_users_student_id
		 	}
		});
	},
							/**
	 * 获取teachers_name
	 */
	get_teacher_users_teachers_name(){
		let url = "~/api/teacher_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teachers_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_teacher_users_teachers_name = json.result.list;
			result_teacher_users_teachers_name.map(o => o.title = o['teachers_name'])
	  			this.result_teacher_users_teachers_name = result_teacher_users_teachers_name
		 	}
		});
	},
						/**
	 * 获取teacher_gender
	 */
	get_teacher_users_teacher_gender(){
		let url = "~/api/teacher_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teacher_gender": this.query.word }, (json) => {
		  if (json.result) {
			var result_teacher_users_teacher_gender = json.result.list;
			result_teacher_users_teacher_gender.map(o => o.title = o['teacher_gender'])
	  			this.result_teacher_users_teacher_gender = result_teacher_users_teacher_gender
		 	}
		});
	},
						/**
	 * 获取teacher_id
	 */
	get_teacher_users_teacher_id(){
		let url = "~/api/teacher_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teacher_id": this.query.word }, (json) => {
		  if (json.result) {
			var result_teacher_users_teacher_id = json.result.list;
			result_teacher_users_teacher_id.map(o => o.title = o['teacher_id'])
	  			this.result_teacher_users_teacher_id = result_teacher_users_teacher_id
		 	}
		});
	},
							/**
	 * 获取product_remarks
	 */
	get_product_information_product_remarks(){
		let url = "~/api/product_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "product_remarks": this.query.word }, (json) => {
		  if (json.result) {
			var result_product_information_product_remarks = json.result.list;
			result_product_information_product_remarks.map(o => o.title = o['product_remarks'])
	  			this.result_product_information_product_remarks = result_product_information_product_remarks
		 	}
		});
	},
							/**
	 * 获取order_number
	 */
	get_logistics_orders_order_number(){
		let url = "~/api/logistics_orders/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "order_number": this.query.word }, (json) => {
		  if (json.result) {
			var result_logistics_orders_order_number = json.result.list;
			result_logistics_orders_order_number.map(o => o.title = o['order_number'])
	  			this.result_logistics_orders_order_number = result_logistics_orders_order_number
		 	}
		});
	},
									/**
	 * 获取product_name
	 */
	get_logistics_orders_product_name(){
		let url = "~/api/logistics_orders/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "product_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_logistics_orders_product_name = json.result.list;
			result_logistics_orders_product_name.map(o => o.title = o['product_name'])
	  			this.result_logistics_orders_product_name = result_logistics_orders_product_name
		 	}
		});
	},
															/**
	 * 获取order_status
	 */
	get_logistics_orders_order_status(){
		let url = "~/api/logistics_orders/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "order_status": this.query.word }, (json) => {
		  if (json.result) {
			var result_logistics_orders_order_status = json.result.list;
			result_logistics_orders_order_status.map(o => o.title = o['order_status'])
	  			this.result_logistics_orders_order_status = result_logistics_orders_order_status
		 	}
		});
	},
													/**
	 * 获取order_number
	 */
	get_after_sales_information_order_number(){
		let url = "~/api/after_sales_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "order_number": this.query.word }, (json) => {
		  if (json.result) {
			var result_after_sales_information_order_number = json.result.list;
			result_after_sales_information_order_number.map(o => o.title = o['order_number'])
	  			this.result_after_sales_information_order_number = result_after_sales_information_order_number
		 	}
		});
	},
									/**
	 * 获取product_name
	 */
	get_after_sales_information_product_name(){
		let url = "~/api/after_sales_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "product_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_after_sales_information_product_name = json.result.list;
			result_after_sales_information_product_name.map(o => o.title = o['product_name'])
	  			this.result_after_sales_information_product_name = result_after_sales_information_product_name
		 	}
		});
	},
															/**
	 * 获取after_sales_type
	 */
	get_after_sales_information_after_sales_type(){
		let url = "~/api/after_sales_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "after_sales_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_after_sales_information_after_sales_type = json.result.list;
			result_after_sales_information_after_sales_type.map(o => o.title = o['after_sales_type'])
	  			this.result_after_sales_information_after_sales_type = result_after_sales_information_after_sales_type
		 	}
		});
	},
									/**
	 * 获取after_sales_status
	 */
	get_after_sales_information_after_sales_status(){
		let url = "~/api/after_sales_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "after_sales_status": this.query.word }, (json) => {
		  if (json.result) {
			var result_after_sales_information_after_sales_status = json.result.list;
			result_after_sales_information_after_sales_status.map(o => o.title = o['after_sales_status'])
	  			this.result_after_sales_information_after_sales_status = result_after_sales_information_after_sales_status
		 	}
		});
	},
													/**
	 * 获取course_name
	 */
	get_course_arrangement_course_name(){
		let url = "~/api/course_arrangement/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_arrangement_course_name = json.result.list;
			result_course_arrangement_course_name.map(o => o.title = o['course_name'])
	  			this.result_course_arrangement_course_name = result_course_arrangement_course_name
		 	}
		});
	},
																		/**
	 * 获取teachers_name
	 */
	get_course_arrangement_teachers_name(){
		let url = "~/api/course_arrangement/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teachers_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_arrangement_teachers_name = json.result.list;
			result_course_arrangement_teachers_name.map(o => o.title = o['teachers_name'])
	  			this.result_course_arrangement_teachers_name = result_course_arrangement_teachers_name
		 	}
		});
	},
												/**
	 * 获取student_name
	 */
	get_course_arrangement_student_name(){
		let url = "~/api/course_arrangement/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_arrangement_student_name = json.result.list;
			result_course_arrangement_student_name.map(o => o.title = o['student_name'])
	  			this.result_course_arrangement_student_name = result_course_arrangement_student_name
		 	}
		});
	},
													/**
	 * 获取course_name
	 */
	get_course_check_in_course_name(){
		let url = "~/api/course_check_in/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_check_in_course_name = json.result.list;
			result_course_check_in_course_name.map(o => o.title = o['course_name'])
	  			this.result_course_check_in_course_name = result_course_check_in_course_name
		 	}
		});
	},
																		/**
	 * 获取teachers_name
	 */
	get_course_check_in_teachers_name(){
		let url = "~/api/course_check_in/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teachers_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_check_in_teachers_name = json.result.list;
			result_course_check_in_teachers_name.map(o => o.title = o['teachers_name'])
	  			this.result_course_check_in_teachers_name = result_course_check_in_teachers_name
		 	}
		});
	},
												/**
	 * 获取student_name
	 */
	get_course_check_in_student_name(){
		let url = "~/api/course_check_in/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_check_in_student_name = json.result.list;
			result_course_check_in_student_name.map(o => o.title = o['student_name'])
	  			this.result_course_check_in_student_name = result_course_check_in_student_name
		 	}
		});
	},
																/**
	 * 获取course_name
	 */
	get_course_attendance_course_name(){
		let url = "~/api/course_attendance/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_attendance_course_name = json.result.list;
			result_course_attendance_course_name.map(o => o.title = o['course_name'])
	  			this.result_course_attendance_course_name = result_course_attendance_course_name
		 	}
		});
	},
															/**
	 * 获取teachers_name
	 */
	get_course_attendance_teachers_name(){
		let url = "~/api/course_attendance/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "teachers_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_attendance_teachers_name = json.result.list;
			result_course_attendance_teachers_name.map(o => o.title = o['teachers_name'])
	  			this.result_course_attendance_teachers_name = result_course_attendance_teachers_name
		 	}
		});
	},
												/**
	 * 获取student_name
	 */
	get_course_attendance_student_name(){
		let url = "~/api/course_attendance/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "student_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_attendance_student_name = json.result.list;
			result_course_attendance_student_name.map(o => o.title = o['student_name'])
	  			this.result_course_attendance_student_name = result_course_attendance_student_name
		 	}
		});
	},
						/**
	 * 获取attendance_status
	 */
	get_course_attendance_attendance_status(){
		let url = "~/api/course_attendance/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "attendance_status": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_attendance_attendance_status = json.result.list;
			result_course_attendance_attendance_status.map(o => o.title = o['attendance_status'])
	  			this.result_course_attendance_attendance_status = result_course_attendance_attendance_status
		 	}
		});
	},
										/**
	 * 获取title_name
	 */
	get_follow_up_video_title_name(){
		let url = "~/api/follow_up_video/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "title_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_follow_up_video_title_name = json.result.list;
			result_follow_up_video_title_name.map(o => o.title = o['title_name'])
	  			this.result_follow_up_video_title_name = result_follow_up_video_title_name
		 	}
		});
	},
																						/**
	 * 获取product_name
	 */
	get_inventory_of_goods_product_name(){
		let url = "~/api/inventory_of_goods/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "product_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_inventory_of_goods_product_name = json.result.list;
			result_inventory_of_goods_product_name.map(o => o.title = o['product_name'])
	  			this.result_inventory_of_goods_product_name = result_inventory_of_goods_product_name
		 	}
		});
	},
																			/**
	 * 获取course_name
	 */
	get_course_information_course_name(){
		let url = "~/api/course_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "course_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_course_information_course_name = json.result.list;
			result_course_information_course_name.map(o => o.title = o['course_name'])
	  			this.result_course_information_course_name = result_course_information_course_name
		 	}
		});
	},
															
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_goods();
	this.get_article();
					this.get_student_users_student_name();
							this.get_student_users_student_gender();
							this.get_student_users_student_id();
								this.get_teacher_users_teachers_name();
							this.get_teacher_users_teacher_gender();
							this.get_teacher_users_teacher_id();
								this.get_product_information_product_remarks();
								this.get_logistics_orders_order_number();
										this.get_logistics_orders_product_name();
																this.get_logistics_orders_order_status();
														this.get_after_sales_information_order_number();
										this.get_after_sales_information_product_name();
																this.get_after_sales_information_after_sales_type();
										this.get_after_sales_information_after_sales_status();
														this.get_course_arrangement_course_name();
																			this.get_course_arrangement_teachers_name();
													this.get_course_arrangement_student_name();
														this.get_course_check_in_course_name();
																			this.get_course_check_in_teachers_name();
													this.get_course_check_in_student_name();
																	this.get_course_attendance_course_name();
																this.get_course_attendance_teachers_name();
													this.get_course_attendance_student_name();
							this.get_course_attendance_attendance_status();
											this.get_follow_up_video_title_name();
																							this.get_inventory_of_goods_product_name();
																				this.get_course_information_course_name();
															  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_goods();
	  this.get_article();
				  this.get_student_users_student_name();
						  this.get_student_users_student_gender();
						  this.get_student_users_student_id();
							  this.get_teacher_users_teachers_name();
						  this.get_teacher_users_teacher_gender();
						  this.get_teacher_users_teacher_id();
							  this.get_product_information_product_remarks();
							  this.get_logistics_orders_order_number();
									  this.get_logistics_orders_product_name();
															  this.get_logistics_orders_order_status();
													  this.get_after_sales_information_order_number();
									  this.get_after_sales_information_product_name();
															  this.get_after_sales_information_after_sales_type();
									  this.get_after_sales_information_after_sales_status();
													  this.get_course_arrangement_course_name();
																		  this.get_course_arrangement_teachers_name();
												  this.get_course_arrangement_student_name();
													  this.get_course_check_in_course_name();
																		  this.get_course_check_in_teachers_name();
												  this.get_course_check_in_student_name();
																  this.get_course_attendance_course_name();
															  this.get_course_attendance_teachers_name();
												  this.get_course_attendance_student_name();
						  this.get_course_attendance_attendance_status();
										  this.get_follow_up_video_title_name();
																						  this.get_inventory_of_goods_product_name();
																			  this.get_course_information_course_name();
																},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
