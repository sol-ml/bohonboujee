<script>
	export let value = "";
</script>

<style>
	textarea {
		width: 100%;
		height: 441px;
		background: #ffffff;
		border: 1px solid #bda37b;
		font-family: Prompt;
		font-size: 26px;
		line-height: 35px;
		padding: 16px 25px;
		box-sizing: border-box;
	}

	@media (min-width: 768px) {
		textarea {
			height: 286px;
		}
	}
</style>

<textarea bind:value></textarea>
