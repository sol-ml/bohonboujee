<script>
	import Hero from "../components/Hero.svelte";
	import Subtittle from "../components/Subtittle.svelte";
	import Input from "../components/Input.svelte";
	import Textarea from "../components/Textarea.svelte";
	import Button from "../components/Button.svelte";
</script>

<style>
	section {
		margin: 65px 25px 95px;
	}
	.input {
		display: grid;
		row-gap: 20px;
		margin: 20px auto;
	}

	.button {
		margin-top: 65px;
	}

	@media (min-width: 768px) {
		section {
			margin: 120px 270px 90px;
			max-width: 1620px;
		}
		.input {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 25px;
			margin: 65px auto;
		}
		.item {
			display: grid;
			grid-column: 1 / 3;
		}
		.button {
			margin-top: 45px;
		}
	}
</style>

<Hero imgHeroMobile="/images/hero/contact_mobile.png" />
<Hero imgHeroDesktop="/images/hero/contact_desktop.png" />

<section>
	<Subtittle>DROP ME A LINE</Subtittle>
	<div class="input">
		<Input />
		<Input />
		<div class="item">
			<Input />
		</div>
	</div>
	<!-- TextArea no le puse estilo, esperando los cambios. Para terminar -->
	<Textarea />

	<div class="button">
		<Button type="golden">SUBMIT</Button>
	</div>
</section>
