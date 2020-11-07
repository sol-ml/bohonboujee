<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
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

	import ImagesWithTitleLooking from "../components/ImagesWithTitleLooking.svelte";
	import Header from "../components/Header.svelte";
	import HeroTitle from "../components/HeroTitle.svelte";
	import HomeHero from "../components/HomeHero.svelte";
	import Hero from "../components/Hero.svelte";
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";
	import Label from "../components/Label.svelte";
	import Footer from "../components/Footer.svelte";

	let value;
	let value1 = "hola soy pepito";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>
<Header />
<Input bind:value placeholder="enter your email " />
<Textarea bind:value="{value1}" />

<p>{value}</p>
<p>{value1}</p>

<ImageWithGoldenBorder imgSrc="/images/products/bracelet_1.png" />

<HeroTitle
	desktopImgSrc="/images/hero/contact_desktop.png"
	mobileImgSrc="/images/hero/about_mobile.png"
	title="About Steph"
/>

<HomeHero
	homeImgSrc="/images/hero/home_photos.png"
	mobileImgSrc="/images/hero/home_mobile.png"
	desktopImgSrc="/images/hero/home_desktop.png"
/>

<Hero
	imgHeroDesktop="/images/hero/about_desktop.png"
	imgHeroMobile="/images/hero/about_mobile.png"
/>

<List products="{products}" />

<ImagesWithTitleLooking />

<Label label="Name">
	<Input bind:value placeholder=" " />
</Label>

<Footer />

