<template>
  <div id="app">
    <login></login>
	<register></register>
    <router-view/>
  </div>
</template>
<script>
	import login from './views/login.vue'
	import register from './views/register'
	export default{
		components:{
			login,
			register
		}
	}
	
	
</script>
<style>

</style>
