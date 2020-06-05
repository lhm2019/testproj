<template>
	<el-row>
		<el-col>
			
			<el-form status-icon label-width="80px" :rules="rules" :model="form">
				<el-form-item prop="name">
					<el-input placeholder="请输入用户名" v-model="form.name"  ><i slot="prefix" class="el-icon-user-solid"></i></el-input>
				</el-form-item>
				<el-form-item prop="password">
					
					<el-input placeholder="请输入密码" v-model="form.password"  show-password ><i slot="prefix" class="el-icon-picture-outline-round"></i></el-input>
				</el-form-item>
				<el-form-item>
					
					<el-button type="primary" @click="onSubmit()" v-model="form.password">登录</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
	
</template>

<script>
	import {getRequest} from '../network/getRequest.js'
	export default{
		name:'login',
		
		data(){
			return{
				form:{
					name:'',
					password:''
				},
				rules:{
					name:[{required: true, message:'请输入用户名或邮箱', trigger:'blur'},
						  { min: 3, max: 10,message: '长度在 3 到 10 个字符', trigger: 'blur' }
					],
					password:[{required:true, message:'请输入密码', trigger:'blur'},
							{ min:6, max:6,message: '密码长度必须为6个字符', trigger: 'blur' }
					]
				}
			}
			
		},
		methods:{
			onSubmit(){
				console.log(this.form.name)
				console.log(this.form.password)
			}
		}
	}
</script>

<style>
</style>
