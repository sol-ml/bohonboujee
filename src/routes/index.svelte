<script>
	import TitleBackground from "../components/TitleBackground.svelte";
</script>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<TitleBackground>Shop Now</TitleBackground>
<TitleBackground>Shop Accesories</TitleBackground>
