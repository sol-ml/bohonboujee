<script>
	import ImageWithGoldenBorder from "./ImageWithGoldenBorder.svelte";
	export let imgSrc;
	export let text;
	export let price;
	export let id;
</script>

<style>
	div {
		font-family: Prompt;
		font-size: 24px;
		line-height: 36px;
		letter-spacing: 0.03em;
	}

	.precio {
		font-weight: 700;
		color: #bda37b;
	}
	a {
		text-decoration: none;
	}
	.text {
		margin-top: 10px;
	}

	@media (min-with: 768px) {
		.text {
			margin-top: 20px;
		}
	}
</style>

<a href="http://www.google.com.ar/loquesea={id}" target="_blank">
	<ImageWithGoldenBorder imgSrc="{imgSrc}" />
	<div class="text">
		<div>{text}</div>
		<div class="precio">{price}</div>
	</div>
</a>
