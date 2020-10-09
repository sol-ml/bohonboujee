<script>
	import Input from "./Input.svelte";
	import Button from "./Button.svelte";
</script>

<style>
	section {
		background: #bda37b;
	}
	h1 {
		font-size: 70px;
		line-height: 81px;
		text-align: center;
	}
	p {
		font-family: Open Sans;
		font-size: 26px;
		line-height: 35px;
		text-align: center;
		letter-spacing: 0.03em;
		padding: 20px;
		color: #000000;
	}

	.button {
		padding-top: 30px;
		padding-bottom: 34px;
	}
	.inputButton {
		padding: 0 20px;
	}

	@media (min-width: 960px) {
		/*
		.button {
			padding-top: 21px;
			float: right;
		}
		h1 {
			margin-top: 27px;
			margin-bottom: 0;
		} */
		section {
			height: 300px;
		}
		.container {
			display: flex;
			justify-content: space-between;
			width: 77%;
			max-width: 1400px;
			margin: auto;
			height: 100%;
		}
		.inputButton {
			text-align: right;
			width: 50%;
			padding-top: 70px;
			padding-bottom: 65px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;
		}
		.input {
			width: 100%;
		}

		.text {
			width: 495px;
			padding-top: 27px;
		}
	}
</style>

<section>
	<div class="container">
		<div class="text">
			<h1>Sign up & Save</h1>
			<p>Sign up for my email newsletter for special offers.</p>
		</div>
		<div class="inputButton">
			<div class="input">
				<Input placeholder="enter your email " />
			</div>
			<div class="button">
				<Button>SING UP</Button>
			</div>
		</div>
	</div>
</section>
