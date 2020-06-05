<template>
  <div id="app">
    <login></login>
    <router-view/>
  </div>
</template>
<script>
	import login from './components/login.vue'
	export default{
		components:{
			login
		}
	}
	
	
</script>
<style>

</style>
