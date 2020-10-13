<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
	import Hero from "../components/Hero.svelte";
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";

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

<Hero
	imgHeroDesktop="/images/hero/about_desktop.png"
	imgHeroMobile="/images/hero/about_mobile.png"
/>
