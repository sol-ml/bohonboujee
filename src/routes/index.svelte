<script>
	import Button from "../components/Button.svelte";
	import Subtittle from "../components/Subtittle.svelte";
</script>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-family: "Open Sans";
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
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

	h2 {
		font-family: "Prompt";
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<!-- <figure>
	<img alt="Success Kid" src="successkid.jpg" />
	<figcaption>Have fun with Sapper!</figcaption>
</figure> -->

<Button>Shop Now</Button>
<p></p>
<Button type="light">Shop Now</Button>
<p></p>
<Button type="golden">Shop Now</Button>

<Subtittle text="Shopping for " underline="subrayado" />
