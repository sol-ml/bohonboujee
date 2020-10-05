<script>
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";

	let value;
	let value1 = "hola soy pepito";

	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
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

<p>This is the 'about' page. There's not much here.</p>

