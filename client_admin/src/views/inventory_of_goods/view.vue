<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','product_name') || $check_field('add','product_name') || $check_field('set','product_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="商品名称" prop="product_name">
												<el-input id="product_name" v-model="form['product_name']" placeholder="请输入商品名称"
							  v-if="user_group === '管理员' || (form['inventory_of_goods_id'] && $check_field('set','product_name')) || (!form['inventory_of_goods_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','product_name')">{{form['product_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','statistical_date') || $check_field('add','statistical_date') || $check_field('set','statistical_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="统计日期" prop="statistical_date">
								<el-date-picker :disabled="disabledObj['statistical_date_isDisabled']" v-if="user_group === '管理员' || (form['inventory_of_goods_id'] && $check_field('set','statistical_date')) || (!form['inventory_of_goods_id'] && $check_field('add','statistical_date'))" id="statistical_date"
						v-model="form['statistical_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','statistical_date')">{{form['statistical_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','inventory_quantity') || $check_field('add','inventory_quantity') || $check_field('set','inventory_quantity')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="库存数量" prop="inventory_quantity">
								<el-input-number id="inventory_quantity" v-model.number="form['inventory_quantity']"
						v-if="user_group === '管理员' || (form['inventory_of_goods_id'] && $check_field('set','inventory_quantity')) || (!form['inventory_of_goods_id'] && $check_field('add','inventory_quantity'))" :disabled="disabledObj['inventory_quantity_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','inventory_quantity')">{{form['inventory_quantity']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','statistical_remarks') || $check_field('add','statistical_remarks') || $check_field('set','statistical_remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="统计备注" prop="statistical_remarks">
								<el-input type="textarea" id="statistical_remarks" v-model="form['statistical_remarks']" placeholder="请输入统计备注"
						v-if="user_group === '管理员' || (form['inventory_of_goods_id'] && $check_field('set','statistical_remarks')) || (!form['inventory_of_goods_id'] && $check_field('add','statistical_remarks'))" :disabled="disabledObj['statistical_remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','statistical_remarks')">{{form['statistical_remarks']}}</div>
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
				field: "inventory_of_goods_id",
				url_add: "~/api/inventory_of_goods/add?",
				url_set: "~/api/inventory_of_goods/set?",
				url_get_obj: "~/api/inventory_of_goods/get_obj?",
				url_upload: "~/api/inventory_of_goods/upload?",

				query: {
					"inventory_of_goods_id": 0,
				},

				form: {
								"product_name":  '', // 商品名称
										"statistical_date":  '', // 统计日期
										"inventory_quantity":  0, // 库存数量
										"statistical_remarks":  '', // 统计备注
											"inventory_of_goods_id": 0, // ID
						
				},
				disabledObj:{
								"product_name_isDisabled": false,
										"statistical_date_isDisabled": false,
					          			"inventory_quantity_isDisabled": false,
										"statistical_remarks_isDisabled": false,
										},

	
		
		
		
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																				
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
				        if (this.form["statistical_date"].indexOf("-")===-1){
          this.form["statistical_date"] = this.$toTime(parseInt(this.form["statistical_date"]),"yyyy-MM-dd")
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


					        if(this.form["statistical_date"]=="0000-00-00"){
          this.form["statistical_date"] = null;
        }
				if(parseInt(this.form["statistical_date"]) > 9999){
					this.form["statistical_date"] = this.$toTime(parseInt(this.form["statistical_date"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/inventory_of_goods/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/inventory_of_goods/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/inventory_of_goods/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/inventory_of_goods/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/inventory_of_goods/view','get');
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
