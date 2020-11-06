<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
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

<Label label="Name">
	<Input bind:value placeholder=" " />
</Label>

<Footer />
