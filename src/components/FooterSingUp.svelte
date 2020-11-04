<script>
	import Input from "./Input.svelte";
	import Button from "./Button.svelte";
</script>

<style>
	section {
		background: #bda37b;
	}

	h1 {
		font-family: "Mr De Haviland";
		color: #ffffff;
	}

	p {
		font-family: Open Sans;
		font-size: 26px;
		line-height: 35px;
		letter-spacing: 0.03em;
		color: #000000;
	}

	.inputButton {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media (max-width: 959.88px) {
		h1 {
			font-size: 70px;
			line-height: 81px;
			text-align: center;
			margin: 0 26%;
			padding-bottom: 50px;
		}

		.text {
			padding: 35px 20px 70px;
		}

		p {
			text-align: center;
			margin: 0;
		}

		.inputButton {
			padding: 0 20px 34px;
			height: 205px;
			box-sizing: border-box;
			align-items: center;
		}
	}

	@media (min-width: 960px) {
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

		.text {
			width: 495px;
			padding-top: 27px;
			padding-bottom: 70px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		h1 {
			font-size: 85px;
			line-height: 98px;
			margin: 0;
		}

		p {
			margin: 0;
		}

		.inputButton {
			width: 50%;
			padding-top: 70px;
			padding-bottom: 65px;
			align-items: flex-end;
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
			<Input placeholder="enter your email " />
			<Button>SING UP</Button>
		</div>
	</div>
</section>
