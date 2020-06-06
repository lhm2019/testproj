<template>
	<el-row>
		<el-col>
			
			<el-form status-icon label-width="80px" :rules="rules" ref="form" :model="form">
				<el-form-item prop="username">
					<el-input placeholder="请输入用户名" v-model="form.username"  ><i slot="prefix" class="el-icon-user-solid"></i></el-input>
				</el-form-item>
				<el-form-item prop="password">
					
					<el-input placeholder="请输入密码" v-model="form.password"  show-password ><i slot="prefix" class="el-icon-picture-outline-round"></i></el-input>
				</el-form-item>
				<el-form-item>
					
					<el-button type="primary" @click="onSubmit('form')" >登录</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
	
</template>

<script>
	import axios from 'axios'
	import {getRequest} from '../network/getRequest.js'
	import {postRequest} from '../network/postRequest.js'
	import qs from 'qs'
	export default{
		name:'login',
		
		data(){
			return{
				form:{
					username:'',
					password:''
				},
				rules:{
					username:[{required: true, message:'请输入用户名或邮箱', trigger:'blur'},
						  { min: 3, max: 10,message: '长度在 3 到 10 个字符', trigger: 'blur' }
					],
					password:[{required:true, message:'请输入密码', trigger:'blur'},
							{ min:6, max:6,message: '密码长度必须为6个字符', trigger: 'blur' }
					]
				}
			}
			
		},
		methods:{
			onSubmit(form){
				
				
				this.$refs[form].validate((valid)=>{
					if(valid){
						
						const config={url:'Blog/user/login',data:qs.stringify(this.form)}
						postRequest(config).then(res=>{
							console.log(res);
							
						}).catch(error=>{
							console.log(error)
						})
					}else{
						// alert("提交错误")
						return false;
					}
				})
			}
		}
	}
</script>

<style>
</style>
