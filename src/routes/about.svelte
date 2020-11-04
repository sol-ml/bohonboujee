<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
	import HeroTitle from "../components/HeroTitle.svelte";
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";
	import HomeHero from "../components/HomeHero.svelte";

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
