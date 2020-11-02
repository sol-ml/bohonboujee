<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
	import Hero from "../components/Hero.svelte";
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";
	import List from "../components/List.svelte";

	let products = [
		{
			imgSrc: "/images/products/necklaces.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
			id: "?hl=es",
		},

		{
			imgSrc: "/images/products/handbag.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
			id: "?hl=es",
		},

		{
			imgSrc: "/images/products/earrings_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_3.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/bracelet_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_4.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/bracelet_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},
	];

	let value;
	let value1 = "hola soy pepito";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<Input bind:value placeholder="enter your email " />
<Textarea bind:value="{value1}" />

<p>{value}</p>
<p>{value1}</p>

<ImageWithGoldenBorder imgSrc="/images/hero/about_desktop.png" />

<Hero
	imgHeroDesktop="/images/hero/about_desktop.png"
	imgHeroMobile="/images/hero/about_mobile.png"
/>

<List products="{products}" />
