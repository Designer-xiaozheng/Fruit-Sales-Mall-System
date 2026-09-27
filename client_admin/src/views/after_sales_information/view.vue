<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','order_number') || $check_field('add','order_number') || $check_field('set','order_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="订单编号" prop="order_number">
												<el-input id="order_number" v-model="form['order_number']" placeholder="请输入订单编号"
							  v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','order_number')) || (!form['after_sales_information_id'] && $check_field('add','order_number'))" :disabled="disabledObj['order_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','order_number')">{{form['order_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_information') || $check_field('add','user_information') || $check_field('set','user_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户信息" prop="user_information">
													<el-select v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','user_information')) || (!form['after_sales_information_id'] && $check_field('add','user_information'))" id="user_information" v-model="form['user_information']" :disabled="disabledObj['user_information_isDisabled']">
							<el-option v-for="o in list_user_user_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','user_information')" id="user_information" v-model="form['user_information']" :disabled="true">
							<el-option v-for="o in list_user_user_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','product_name')) || (!form['after_sales_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','order_date') || $check_field('add','order_date') || $check_field('set','order_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="订单日期" prop="order_date">
								<el-date-picker :disabled="disabledObj['order_date_isDisabled']" v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','order_date')) || (!form['after_sales_information_id'] && $check_field('add','order_date'))" id="order_date"
						v-model="form['order_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','order_date')">{{form['order_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','purchase_quantity') || $check_field('add','purchase_quantity') || $check_field('set','purchase_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="购买数量" prop="purchase_quantity">
												<el-input id="purchase_quantity" v-model="form['purchase_quantity']" placeholder="请输入购买数量"
							  v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','purchase_quantity')) || (!form['after_sales_information_id'] && $check_field('add','purchase_quantity'))" :disabled="disabledObj['purchase_quantity_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','purchase_quantity')">{{form['purchase_quantity']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','total_order_price') || $check_field('add','total_order_price') || $check_field('set','total_order_price')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="订单总价" prop="total_order_price">
												<el-input id="total_order_price" v-model="form['total_order_price']" placeholder="请输入订单总价"
							  v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','total_order_price')) || (!form['after_sales_information_id'] && $check_field('add','total_order_price'))" :disabled="disabledObj['total_order_price_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','total_order_price')">{{form['total_order_price']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','after_sales_type') || $check_field('add','after_sales_type') || $check_field('set','after_sales_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="售后类型" prop="after_sales_type">
								<el-select id="after_sales_type" v-model="form['after_sales_type']"
						v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','after_sales_type')) || (!form['after_sales_information_id'] && $check_field('add','after_sales_type'))">
						<el-option v-for="o in list_after_sales_type" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','after_sales_type')">{{form['after_sales_type']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','after_sales_content') || $check_field('add','after_sales_content') || $check_field('set','after_sales_content')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="售后内容" prop="after_sales_content">
								<el-input type="textarea" id="after_sales_content" v-model="form['after_sales_content']" placeholder="请输入售后内容"
						v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','after_sales_content')) || (!form['after_sales_information_id'] && $check_field('add','after_sales_content'))" :disabled="disabledObj['after_sales_content_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','after_sales_content')">{{form['after_sales_content']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','after_sales_status') || $check_field('add','after_sales_status') || $check_field('set','after_sales_status')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="售后状态" prop="after_sales_status">
								<el-select id="after_sales_status" v-model="form['after_sales_status']"
						v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','after_sales_status')) || (!form['after_sales_information_id'] && $check_field('add','after_sales_status'))">
						<el-option v-for="o in list_after_sales_status" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','after_sales_status')">{{form['after_sales_status']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','after_sales_response') || $check_field('add','after_sales_response') || $check_field('set','after_sales_response')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="售后回复" prop="after_sales_response">
								<el-input type="textarea" id="after_sales_response" v-model="form['after_sales_response']" placeholder="请输入售后回复"
						v-if="user_group === '管理员' || (form['after_sales_information_id'] && $check_field('set','after_sales_response')) || (!form['after_sales_information_id'] && $check_field('add','after_sales_response'))" :disabled="disabledObj['after_sales_response_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','after_sales_response')">{{form['after_sales_response']}}</div>
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
				field: "after_sales_information_id",
				url_add: "~/api/after_sales_information/add?",
				url_set: "~/api/after_sales_information/set?",
				url_get_obj: "~/api/after_sales_information/get_obj?",
				url_upload: "~/api/after_sales_information/upload?",

				query: {
					"after_sales_information_id": 0,
				},

				form: {
								"order_number":  '', // 订单编号
										"user_information": 0, // 用户信息
										"product_name":  '', // 商品名称
										"order_date":  '', // 订单日期
										"purchase_quantity":  '', // 购买数量
										"total_order_price":  '', // 订单总价
										"after_sales_type":  '', // 售后类型
										"after_sales_content":  '', // 售后内容
										"after_sales_status":  '', // 售后状态
										"after_sales_response":  '', // 售后回复
											"after_sales_information_id": 0, // ID
						
				},
				disabledObj:{
								"order_number_isDisabled": false,
										"user_information_isDisabled": false,
										"product_name_isDisabled": false,
										"order_date_isDisabled": false,
										"purchase_quantity_isDisabled": false,
										"total_order_price_isDisabled": false,
										"after_sales_type_isDisabled": false,
										"after_sales_content_isDisabled": false,
										"after_sales_status_isDisabled": false,
										"after_sales_response_isDisabled": false,
										},

	
		
					// 用户列表
				list_user_user_information: [],
				
		
		
		
						// 售后类型选项列表
				list_after_sales_type: ['取消','退款'],
	
		
						// 售后状态选项列表
				list_after_sales_status: ['同意','拒绝'],
	
		
	
			}
		},
		methods: {


	
	
			
	
				/**
			 * 获取学员用户用户列表
			 */
			async get_list_user_user_information() {
                // if(this.user_group !== "管理员" && this.form["user_information"] === 0) {
                //     this.form["user_information"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=学员用户");
                if(json.result && json.result.list){
                    this.list_user_user_information = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_user_information(id){
				var obj = this.list_user_user_information.getObj({"user_id":id});
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
								        if (this.form["order_date"].indexOf("-")===-1){
          this.form["order_date"] = this.$toTime(parseInt(this.form["order_date"]),"yyyy-MM-dd")
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


											        if(this.form["order_date"]=="0000-00-00"){
          this.form["order_date"] = null;
        }
				if(parseInt(this.form["order_date"]) > 9999){
					this.form["order_date"] = this.$toTime(parseInt(this.form["order_date"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/after_sales_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/after_sales_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/after_sales_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/after_sales_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/after_sales_information/view','get');
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
							this.get_list_user_user_information();
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
