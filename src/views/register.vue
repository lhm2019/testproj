<template>
    <el-row>
		<el-col>
			
			<el-form status-icon label-width="80px" :rules="rules" ref="reginfo" :model="reginfo">
				<el-form-item prop="username">
					<el-input placeholder="请输入用户名" v-model="reginfo.username"  ><i slot="prefix" class="el-icon-user-solid"></i></el-input>
				</el-form-item>
                <el-form-item prop="email">
					<el-input placeholder="请输入邮箱" v-model="reginfo.email"  ><i slot="prefix" class="el-icon-user-solid"></i></el-input>
				</el-form-item>
				<el-form-item prop="password">
					
					<el-input placeholder="请输入密码" v-model="reginfo.password"  show-password ><i slot="prefix" class="el-icon-picture-outline-round"></i></el-input>
				</el-form-item>
                <el-form-item prop="checkPsd" >
                    <el-input placeholder="请再次输入密码" v-model="reginfo.checkPsd" show-password>
                        <i slot="prefix" class="el-icon-picture-outline-round"></i>
                    </el-input>
                </el-form-item>
				<el-form-item>
					
					<el-button type="primary" @click="subimtInfo('reginfo')" >注册</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
import {getRequest} from '../network/getRequest.js'
import {postRequest} from '../network/postRequest.js'
import qs from 'qs'
export default {
    name:'register',
    data(){
        //验证两次输入的密码是否一致
        var validatePsd=(rule, value, callback)=>{
            if(value!==this.reginfo.password){
                callback(new Error('两次输入密码不一致')
                )
            }else{
                 callback();
            }
        };
        //验证邮箱是否复
        var validateEmail=(rule, value, callback)=>{
            getRequest({url:'Blog/user/getByMail',params:{mail:value}}).
            then(res=>{
                if(res.data.code==0){
                    callback(new Error(res.data.msg))
                }else{
                    callback()
                }
            })
            .catch(error=>{
                console.log(error);
                
            })
        };

        //验证用户名是否重复
        var validateName=(rule,value,callback)=>{
             getRequest({url:'Blog/user/getByUsername',params:{username:value}}).
            then(res=>{
                
                if(res.data.code==0){
                    callback(new Error(res.data.msg))
                }else{
                    callback()
                }
            })
            .catch(error=>{
                console.log(error);
                
            })
        };

        return {
            reginfo:{
                username:'',
                email:'',
                password:'',
                checkPsd:''
            },
            rules:{
                    username:[{required: true, message:'请输入用户名', trigger:'blur'},
                          { min: 3, max: 10,message: '长度在 3 到 10 个字符', trigger: 'blur' },
                          {validator: validateName, trigger:'blur'}
					],
					password:[{required:true, message:'请输入密码', trigger:'blur'},
							{ min:6, max:6,message: '密码长度必须为6个字符', trigger: 'blur' }
                    ],
                    email:[{validator: validateEmail, trigger: 'blur'},
                        {required:true,message:"邮箱不能为空", trigger: 'blur'},
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    checkPsd:[{validator:validatePsd, trigger: 'blur'},
                          {required:true,message:"密码不能为空", trigger: 'blur'},  
                          { min:6, max:6,message: '密码长度必须为6个字符', trigger: 'blur' }
                    ]
            }
        }
    },
    methods:{
        subimtInfo(reginfo){
            this.$refs[reginfo].validate(valid=>{
                if(valid){
                    postRequest({url:'Blog/user/register',postdata:this.reginfo}).then(res=>{
                        console.log(res.data.msg)
                        
                    }
                    ).catch(error=>{
                        console.log(error)
                    })
                }else{
                    return false;
                }
            })
        }
    }
}
</script>
<style scoped>

</style>