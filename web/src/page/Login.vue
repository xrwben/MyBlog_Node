<template>
	<div id="login">
		<Form class="login-list">
			<h2>Hello</h2>
			<p>{{ hello }}</p>
    </Form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				hello: "fuck you !!"
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login {
		width: 100%;
		height: 100%;
		color: #eee;
		// background: url('../assets/bg.jpg') no-repeat center;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
  	justify-content: center;
		& > .login-list {
			width: 400px;
			height: 280px;
			border: 1px solid #eee;
			border-radius: 8px;
			box-shadow: 0 0 5px rgba(255,255,255,.6);
			padding: 10px 50px;
			background: rgba(0, 0, 0, .5);
			display: table;
			vertical-align: middle;
			&> h2 {
	  		text-align: center;
	  		padding: 15px 0;
	  	}
		}
	}
</style>