<script>
	export let label = "";
</script>

<style>
	label {
		font-family: Prompt;
		font-size: 24px;
		line-height: 36px;
		letter-spacing: 0.03em;
	}
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
	{label}
	<slot />
</label>
