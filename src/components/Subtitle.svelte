<script>
	export let left;
</script>

<style>
	h2 {
		font-family: "Open Sans";
		font-weight: bold;
		font-size: 37px;
		text-align: center;
		line-height: 118.2%;
		letter-spacing: 0.03em;
	}

	.line {
		margin-top: 40px;
		border: none;
		border-top: 1px solid #bda37b;
		width: 187px;
	}

	.position {
		text-align: left;
		margin-left: 0;
	}
</style>

<h2 class="{left}">
	<slot />
</h2>
<hr class="line {left}" />
