<script>
	import Hero from "../components/Hero.svelte";
	import Subtittle from "../components/Subtittle.svelte";
	import Input from "../components/Input.svelte";
	import Label from "../components/Label.svelte";
	import Textarea from "../components/Textarea.svelte";
	import Button from "../components/Button.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<style>
	section {
		margin: 65px 25px 95px;
	}
	.inputContainer {
		display: grid;
		row-gap: 20px;
		margin: 20px auto;
	}

	.button {
		margin-top: 65px;
	}
	.textarea {
		display: grid;
		padding-right: 0%;
	}

	@media (min-width: 768px) {
		section {
			margin: 120px 270px 90px;
			max-width: 1620px;
		}
		.inputContainer {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 25px;
			margin: 65px auto 25px;
		}
		.telephoneContainer {
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
	<div class="inputContainer">
		<div>
			<Label label="Name">
				<Input />
			</Label>
		</div>
		<div>
			<Label label="Email">
				<Input />
			</Label>
		</div>
		<div class="telephoneContainer">
			<Label label="Telephone Number">
				<Input />
			</Label>
		</div>
	</div>
	<div class="textarea">
		<Label label="Message">
			<Textarea />
		</Label>
	</div>

	<div class="button">
		<Button type="golden">SUBMIT</Button>
	</div>
</section>

<Footer />
