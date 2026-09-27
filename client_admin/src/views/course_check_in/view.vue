<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','course_id') || $check_field('add','course_id') || $check_field('set','course_id')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程编号" prop="course_id">
												<el-input id="course_id" v-model="form['course_id']" placeholder="请输入课程编号"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','course_id')) || (!form['course_check_in_id'] && $check_field('add','course_id'))" :disabled="disabledObj['course_id_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_id')">{{form['course_id']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_name') || $check_field('add','course_name') || $check_field('set','course_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程名称" prop="course_name">
												<el-input id="course_name" v-model="form['course_name']" placeholder="请输入课程名称"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','course_name')) || (!form['course_check_in_id'] && $check_field('add','course_name'))" :disabled="disabledObj['course_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','course_name')">{{form['course_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','class_time') || $check_field('add','class_time') || $check_field('set','class_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="上课时间" prop="class_time">
								<el-date-picker :disabled="disabledObj['class_time_isDisabled']" v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','class_time')) || (!form['course_check_in_id'] && $check_field('add','class_time'))" id="class_time"
						v-model="form['class_time']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','class_time')">{{form['class_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','class_location') || $check_field('add','class_location') || $check_field('set','class_location')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="上课地点" prop="class_location">
												<el-input id="class_location" v-model="form['class_location']" placeholder="请输入上课地点"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','class_location')) || (!form['course_check_in_id'] && $check_field('add','class_location'))" :disabled="disabledObj['class_location_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','class_location')">{{form['class_location']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','course_cover') || $check_field('add','course_cover') || $check_field('set','course_cover')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="课程封面" prop="course_cover">
								<el-upload :disabled="disabledObj['course_cover_isDisabled']" id="course_cover" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_course_cover"
						:show-file-list="false" v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','course_cover')) || (!form['course_check_in_id'] && $check_field('add','course_cover'))">
						<img v-if="form['course_cover']" :src="$fullUrl(form['course_cover'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','course_cover')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['course_cover'])" :preview-src-list="[$fullUrl(form['course_cover'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','teacher_users') || $check_field('add','teacher_users') || $check_field('set','teacher_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教师用户" prop="teacher_users">
													<el-select v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','teacher_users')) || (!form['course_check_in_id'] && $check_field('add','teacher_users'))" id="teacher_users" v-model="form['teacher_users']" :disabled="disabledObj['teacher_users_isDisabled']">
							<el-option v-for="o in list_user_teacher_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','teacher_users')" id="teacher_users" v-model="form['teacher_users']" :disabled="true">
							<el-option v-for="o in list_user_teacher_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','teachers_name') || $check_field('add','teachers_name') || $check_field('set','teachers_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教师姓名" prop="teachers_name">
												<el-input id="teachers_name" v-model="form['teachers_name']" placeholder="请输入教师姓名"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','teachers_name')) || (!form['course_check_in_id'] && $check_field('add','teachers_name'))" :disabled="disabledObj['teachers_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','teachers_name')">{{form['teachers_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','teacher_id') || $check_field('add','teacher_id') || $check_field('set','teacher_id')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="教师工号" prop="teacher_id">
												<el-input id="teacher_id" v-model="form['teacher_id']" placeholder="请输入教师工号"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','teacher_id')) || (!form['course_check_in_id'] && $check_field('add','teacher_id'))" :disabled="disabledObj['teacher_id_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','teacher_id')">{{form['teacher_id']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','student_users') || $check_field('add','student_users') || $check_field('set','student_users')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学员用户" prop="student_users">
													<el-select v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','student_users')) || (!form['course_check_in_id'] && $check_field('add','student_users'))" id="student_users" v-model="form['student_users']" :disabled="disabledObj['student_users_isDisabled']">
							<el-option v-for="o in list_user_student_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','student_users')" id="student_users" v-model="form['student_users']" :disabled="true">
							<el-option v-for="o in list_user_student_users" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','student_name') || $check_field('add','student_name') || $check_field('set','student_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学员姓名" prop="student_name">
												<el-input id="student_name" v-model="form['student_name']" placeholder="请输入学员姓名"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','student_name')) || (!form['course_check_in_id'] && $check_field('add','student_name'))" :disabled="disabledObj['student_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','student_name')">{{form['student_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sign_in_status') || $check_field('add','sign_in_status') || $check_field('set','sign_in_status')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="签到状态" prop="sign_in_status">
								<el-select id="sign_in_status" v-model="form['sign_in_status']"
						v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','sign_in_status')) || (!form['course_check_in_id'] && $check_field('add','sign_in_status'))">
						<el-option v-for="o in list_sign_in_status" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','sign_in_status')">{{form['sign_in_status']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','sign_in_remarks') || $check_field('add','sign_in_remarks') || $check_field('set','sign_in_remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="签到备注" prop="sign_in_remarks">
												<el-input id="sign_in_remarks" v-model="form['sign_in_remarks']" placeholder="请输入签到备注"
							  v-if="user_group === '管理员' || (form['course_check_in_id'] && $check_field('set','sign_in_remarks')) || (!form['course_check_in_id'] && $check_field('add','sign_in_remarks'))" :disabled="disabledObj['sign_in_remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','sign_in_remarks')">{{form['sign_in_remarks']}}</div>
											</el-form-item>
			</el-col>
					
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "course_check_in_id",
				url_add: "~/api/course_check_in/add?",
				url_set: "~/api/course_check_in/set?",
				url_get_obj: "~/api/course_check_in/get_obj?",
				url_upload: "~/api/course_check_in/upload?",

				query: {
					"course_check_in_id": 0,
				},

				form: {
								"course_id":  '', // 课程编号
										"course_name":  '', // 课程名称
										"class_time":  '', // 上课时间
										"class_location":  '', // 上课地点
										"course_cover":  '', // 课程封面
										"teacher_users": 0, // 教师用户
										"teachers_name":  '', // 教师姓名
										"teacher_id":  '', // 教师工号
										"student_users": 0, // 学员用户
										"student_name":  '', // 学员姓名
										"sign_in_status":  '', // 签到状态
										"sign_in_remarks":  '', // 签到备注
											"course_check_in_id": 0, // ID
						
				},
				disabledObj:{
								"course_id_isDisabled": false,
										"course_name_isDisabled": false,
										"class_time_isDisabled": false,
										"class_location_isDisabled": false,
										"course_cover_isDisabled": false,
										"teacher_users_isDisabled": false,
										"teachers_name_isDisabled": false,
										"teacher_id_isDisabled": false,
										"student_users_isDisabled": false,
										"student_name_isDisabled": false,
										"sign_in_status_isDisabled": false,
										"sign_in_remarks_isDisabled": false,
										},

	
		
		
		
		
		
					// 用户列表
				list_user_teacher_users: [],
				
		
		
					// 用户列表
				list_user_student_users: [],
				
						// 签到状态选项列表
				list_sign_in_status: ['已签到'],
	
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
						/**
			 * 上传课程封面
			 * @param {Object} param 图片参数
			 */
			upload_course_cover(param){
						this.uploadFile(param.file, "course_cover");
					},
	
	
			
	
				/**
			 * 获取教师用户用户列表
			 */
			async get_list_user_teacher_users() {
                // if(this.user_group !== "管理员" && this.form["teacher_users"] === 0) {
                //     this.form["teacher_users"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=教师用户");
                if(json.result && json.result.list){
                    this.list_user_teacher_users = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_teacher_users(id){
				var obj = this.list_user_teacher_users.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
				/**
			 * 获取学员用户用户列表
			 */
			async get_list_user_student_users() {
                // if(this.user_group !== "管理员" && this.form["student_users"] === 0) {
                //     this.form["student_users"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=学员用户");
                if(json.result && json.result.list){
                    this.list_user_student_users = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_student_users(id){
				var obj = this.list_user_student_users.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
															// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
														
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
					        if (this.form["class_time"].indexOf("-")===-1){
            this.form["class_time"] = this.$toTime(parseInt(this.form["class_time"]),"yyyy-MM-dd hh:mm:ss")
        }
																								$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


							        if(this.form["class_time"]=="0000-00-00 00:00:00"){
          this.form["class_time"] = null;
        }
				if(parseInt(this.form["class_time"]) > 9999){
					this.form["class_time"] = this.$toTime(parseInt(this.form["class_time"]),"yyyy-MM-dd hh:mm:ss")
				}
																														


			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																																										return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/course_check_in/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/course_check_in/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/course_check_in/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/course_check_in/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/course_check_in/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
															this.get_list_user_teacher_users();
												this.get_list_user_student_users();
											},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
