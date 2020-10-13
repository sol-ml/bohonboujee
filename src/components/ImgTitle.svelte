<script>
	import ImageWithGoldenBorder from "./ImageWithGoldenBorder.svelte";
	export let title;
	export let imgSrc;
	export let href;
</script>

<style>
	div {
		font-family: "Open Sans";
		font-weight: bold;
		font-size: 20px;
		line-height: 14px;
		text-align: center;
		letter-spacing: 0.04em;
		text-decoration-line: underline;
		color: #000000;
		border: 1px solid #bda37b;
		border-bottom: none;
		padding: 5px 0 15px;
	}
	a {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		div {
			padding: 10px 0 20px;
		}
	}
</style>

<a href="{href}" target="__blank">
	{#if title}
		<div>{title}</div>
	{/if}

	<ImageWithGoldenBorder imgSrc="{imgSrc}" />
</a>
