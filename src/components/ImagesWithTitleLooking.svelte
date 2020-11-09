<script>
	import Button from "../components/Button.svelte";
</script>

<style>
	section {
		position: relative;
		margin-top: 100px;
		width: 100%;
	}

	.container {
		border: 1px solid #bda37b;
		box-sizing: border-box;
	}

	h1 {
		font-family: "Mr De Haviland";
		color: #000000;
	}

	p {
		font-family: Open Sans;
		font-size: 26px;
		line-height: 35px;
		text-align: center;
		letter-spacing: 0.03em;
		color: #000000;
		margin: 0;
	}
	@media (max-width: 959.88px) {
		img {
			position: absolute;
			width: 100%;
			top: -10%;
		}

		.container {
			padding: 64% 30px 35px;
			margin: 0 20px;
		}

		h1 {
			font-size: 70px;
			line-height: 81px;
			text-align: center;
			margin-bottom: 30px;
		}

		p {
			margin-bottom: 50px;
		}

		.button {
			display: flex;
			justify-content: center;
		}
	}
	@media (min-width: 960px) {
		img {
			position: absolute;
			left: 50%;
			top: -27%;
			height: 172%;
		}

		.container {
			padding: 27px 39% 36px 61px;
			width: 77%;
			max-width: 1400px;
			margin: auto;
		}

		h1 {
			font-size: 85px;
			line-height: 98px;
			margin-bottom: 26px;
			padding-left: 10px;
		}

		p {
			text-align: left;
			margin-bottom: 20px;
		}
	}

	@media (min-width: 960px) and (max-width: 1400px) {
		img {
			left: 45%;
		}
	}
</style>

<section>
	<div class="container">
		<h1>Looking for clothes?</h1>
		<p>Click here to shop my Maverick the Collection boutique collection.</p>
		<div class="button">
			<Button>SHOP NOW</Button>
		</div>
	</div>
	<img src="images/photos.png" alt="" />
</section>
