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
		color: #000000;
	}

	.price {
		color: #bda37b;
		font-weight: 700;
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 767.88px) {
		.text {
			margin-top: 10px;
		}
	}

	@media (min-width: 768px) {
		.text {
			margin-top: 20px;
		}
	}
</style>

<a target="_blank" href="https://www.google.com/?hl=es{id}">
	<ImageWithGoldenBorder imgSrc="{imgSrc}" />
	<div class="text">{text}</div>
	<div class="price">{price}</div>
</a>
