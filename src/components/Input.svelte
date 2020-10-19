<script>
	export let value = "";
	export let placeholder = "";
</script>

<style>
	input {
		font-family: "Open Sans";
		background: #ffffff;
		border: 1px solid #bda37b;
		width: 100%;
		height: 70px;
		font-size: 26px;
		line-height: 35px;
		padding: 0 25px;
		box-sizing: border-box;
	}
	input::placeholder {
		color: rgba(0, 0, 0, 0.7);
		opacity: 1;
	}
</style>

<input bind:value placeholder="{placeholder}" />
