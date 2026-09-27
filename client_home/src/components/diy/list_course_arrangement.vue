<template>
	<div class="diy_home diy_list diy_course_arrangement" id="diy_course_arrangement_list">
		<!-- 列表 -->
		<div class="diy_view_list list list-x" v-if="show">
			<router-link class="diy_card goods diy_list_box_wrap" v-for="(o, i) in list" :key="i"
				:to="'/course_arrangement/details?course_arrangement_id=' + o['course_arrangement_id']">
				<!-- 图片 -->
				<div class="diy_list_img_box" v-if="imgList.length" >
					<div class="diy_row" v-for="(item,index) in imgList" :key="item+index" v-show="$check_field('get',item.name,'/course_arrangement/details') && +item.is_img_list">
						<div class="diy_title diy_list_img_title">
							<span>{{item.title}}:</span>
						</div>
						<div class="diy_field diy_img">
							<img :src="$fullUrl(o[item.name])" style="width:100%;height:100%" />
						</div>
					</div>
				</div>
				<!-- 内容 -->
				<div class="diy_list_item_box">
					<div class="diy_list_item_content" v-for="(item,index) in showItemList" :key="item+index">
						<div class="diy_row" :class="{[item.name]:true}" v-if="$check_field('get',item.name,'/course_arrangement/details') && +item.is_img_list">
							<div class="diy_title">
								<span>{{item.title}}:</span>
							</div>
							<div class="diy_field diy_text">
								<span v-if="item.type == 'UID'" v-text="get_user_name(item.name,o[item.name])"></span>
								<span v-else-if="item.type == '日期'" v-text="$toTime(o[item.name],'yyyy-MM-dd')"></span>
								<span v-else-if="item.type == '时间'" v-text="$toTime(o[item.name],'hh:mm:ss')"></span>
								<span v-else-if="item.type == '日长'" v-text="$toTime(o[item.name],'yyyy-MM-dd hh:mm:ss')"></span>
								<span v-else v-text="o[item.name]"></span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<!-- 表格 -->
		<div class="diy_view_table" v-else>
			<table class="diy_table">
				<tr class="diy_row">
						<th class="diy_title" v-if="$check_field('get','course_id')">
						课程编号
					</th>
							<th class="diy_title" v-if="$check_field('get','course_name')">
						课程名称
					</th>
							<th class="diy_title" v-if="$check_field('get','class_time')">
						上课时间
					</th>
							<th class="diy_title" v-if="$check_field('get','class_location')">
						上课地点
					</th>
							<th class="diy_title" v-if="$check_field('get','course_cover')">
						课程封面
					</th>
							<th class="diy_title" v-if="$check_field('get','teacher_users')">
						教师用户
					</th>
							<th class="diy_title" v-if="$check_field('get','teachers_name')">
						教师姓名
					</th>
							<th class="diy_title" v-if="$check_field('get','teacher_id')">
						教师工号
					</th>
							<th class="diy_title" v-if="$check_field('get','student_users')">
						学员用户
					</th>
							<th class="diy_title" v-if="$check_field('get','student_name')">
						学员姓名
					</th>
							<th class="diy_title" v-if="$check_field('get','arrange_remarks')">
						安排备注
					</th>
					</tr>
				<tr class="diy_row" v-for="(o,i) in list" :key="o+i">
						<td class="diy_field diy_text" v-if="$check_field('get','course_id')">
						<span>
							{{ o["course_id"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','course_name')">
						<span>
							{{ o["course_name"] }}
						</span>
					</td>
							<td class="diy_field diy_datetime" v-if="$check_field('get','class_time')">
						<span>
							{{ $toTime(o["class_time"] ,"yyyy-MM-dd hh:mm:ss") }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','class_location')">
						<span>
							{{ o["class_location"] }}
						</span>
					</td>
							<td class="diy_field" v-if="$check_field('get','course_cover')">
						<img class="diy_img" :src="o['course_cover']" />
					</td>
							<td class="diy_field diy_uid" v-if="$check_field('get','teacher_users')">
						<span>
							{{ get_user_name('teacher_users',o['teacher_users']) }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','teachers_name')">
						<span>
							{{ o["teachers_name"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','teacher_id')">
						<span>
							{{ o["teacher_id"] }}
						</span>
					</td>
							<td class="diy_field diy_uid" v-if="$check_field('get','student_users')">
						<span>
							{{ get_user_name('student_users',o['student_users']) }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','student_name')">
						<span>
							{{ o["student_name"] }}
						</span>
					</td>
							<td class="diy_field diy_text" v-if="$check_field('get','arrange_remarks')">
						<span>
							{{ o["arrange_remarks"] }}
						</span>
					</td>
					</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: function() {
					return [];
				},
			},
			show: {
				type: Boolean,
				default: function(){
					return true;
				}
			}
		},
		data() {
			return {
						imgList: [
						{
							title: "课程封面",
							name: "course_cover",
							type: "图片",
							is_img_list: "0"
						},
						],
						itemList: [
								{
									title: "课程编号",
									name: "course_id",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "课程名称",
									name: "course_name",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "上课时间",
									name: "class_time",
									type: "日长",
									is_img_list: "0"
								},
								{
									title: "上课地点",
									name: "class_location",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "教师用户",
									name: "teacher_users",
									type: "UID",
									is_img_list: "0"
								},
								{
									title: "教师姓名",
									name: "teachers_name",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "教师工号",
									name: "teacher_id",
									type: "文本",
									is_img_list: "0"
								},
								{
									title: "学员用户",
									name: "student_users",
									type: "UID",
									is_img_list: "0"
								},
								{
									title: "学员姓名",
									name: "student_name",
									type: "文本",
									is_img_list: "0"
								},
						],
						richList: [
								{
									title: "安排备注",
									name: "arrange_remarks",
									type: "多文本"
								},
						],
										// 用户列表
				list_user_teacher_users: [],
								// 用户列表
				list_user_student_users: [],
						};
		},
		methods: {
			get_user_name(name,id){
				var obj = null;
										if (name == 'teacher_users'){
					obj = this.list_user_teacher_users.getObj({"user_id":id});
				}
								if (name == 'student_users'){
					obj = this.list_user_student_users.getObj({"user_id":id});
				}
							var ret = "";
				if(obj){
					ret = obj.nickname+"-"+obj.username;
					// if(obj.nickname){
					// 	ret = obj.nickname;
					// }
					// else{
					// 	ret = obj.username;
					// }
				}
				return ret;
			},
									/**
			 * 获取教师用户用户列表
			 */
			async get_list_user_teacher_users() {
				var json = await this.$get("~/api/user/get_list?user_group=教师用户");
				if(json.result && json.result.list){
					this.list_user_teacher_users = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
							/**
			 * 获取学员用户用户列表
			 */
			async get_list_user_student_users() {
				var json = await this.$get("~/api/user/get_list?user_group=学员用户");
				if(json.result && json.result.list){
					this.list_user_student_users = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					},
		created() {
									this.get_list_user_teacher_users();
							this.get_list_user_student_users();
					},
		computed:{
			showItemList(){
				let arr = [];
				let _type = ["视频","音频","文件"];
				this.itemList.forEach(item => {
					if(_type.indexOf(item.type) === -1 && !!+item.is_img_list){
						arr.push(item)
					}
				})
				return arr.slice(0,4);
			}
		}
	};
</script>

<style scoped>
	.media {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-basis: 75%;
		min-height: 10rem;
	}

	.goods {
		display: flex;
		width: calc(25% - 1rem);
		margin: 0.5rem;
		padding: 0.5rem;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		border-radius: 0.5rem;
	}

	.goods:hover {
		border: 0.2rem solid #909399;
		box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
	}

	.goods:hover img {
		filter: blur(1px);
	}

	.price {
		font-size: 1rem;
		margin-right: 3px;
	}

	.price_ago {
		text-decoration: line-through;
		font-size: 0.5rem;
		color: #999;

	}

	.title {
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 700;
		padding: .25rem;
	}

	.icon_cart {
		color: #FF5722;
		float: right;
	}

	@media (max-width: 992px) {

		.goods {
			width: calc(33% - 1rem);
			;
		}

	}

	@media (max-width: 768px) {

		.goods {
			width: calc(50% - 1rem);
			;
		}

	}
</style>

