<script>
	import ImageWithGoldenBorder from "../components/ImageWithGoldenBorder.svelte";
	import Subtittle from "../components/Subtittle.svelte";
	import ButtonIcons from "../components/ButtonIcons.svelte";
	import Button from "../components/Button.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<style>
	p {
		font-family: Prompt;
		font-size: 24px;
		line-height: 36px;
		letter-spacing: 0.03em;
	}
	.precio {
		font-weight: bold;
		color: #bda37b;
		margin-bottom: 25px;
	}
	.bigImg {
		grid-column: 1 / 4;
		border-bottom: solid 6px #bda37b;
		display: flex;
	}

	.orderImg {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.lightButton {
		margin: 16px 0;
	}
	.buttonIcons {
		display: flex;
		margin-top: 30px;
	}
	@media (max-width: 768px) {
		section {
			margin: 35px 25px 130px;
		}
		.orderImg {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 25px 6px;
		}

		.imgNone {
			display: none;
		}
	}

	@media (min-width: 768px) {
		section {
			margin-top: 135px;
		}

		.imgContainer {
			display: flex;
			justify-content: center;
		}
		.orderImg {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-gap: 55px 15px;
		}
		.bigImg {
			grid-column: 1 / 5;
		}

		.orderImg,
		.orderText {
			width: 40%;
			max-width: 1620px;
		}

		.orderText {
			padding-left: 50px;
			box-sizing: border-box;
			text-align: left;
		}
		.lightButton {
			margin-top: 50px;
		}
		.buttonIcons {
			margin-top: 50px;
		}
	}
</style>

<section>
	<div class="imgContainer">
		<div class="orderImg">
			<div class="bigImg">
				<ImageWithGoldenBorder imgSrc="/images/products/earrings_1.png" />
			</div>

			<ImageWithGoldenBorder imgSrc="/images/products/earrings_1.png" />
			<ImageWithGoldenBorder imgSrc="/images/products/earrings_1.png" />
			<ImageWithGoldenBorder imgSrc="/images/products/earrings_1.png" />
			<div class="imgNone">
				<ImageWithGoldenBorder imgSrc="/images/products/earrings_1.png" />
			</div>
		</div>

		<div class="orderText">
			<Subtittle>MARBLE DROP EARRINGS</Subtittle>
			<p class="precio">$35</p>
			<p>
				Gorgeous drop hook earrings with a marble sphere gem and natural crystal
				at the base of the hook. Great for evening wear or a sunny outdoor
				wedding.
			</p>

			<div class="lightButton">
				<Button type="light" size="button">ADD TO CART</Button>
			</div>
			<Button type="golden">BUY IT NOW</Button>
			<div class="buttonIcons">
				<ButtonIcons imgSrc="/images/products/facebook.png" Text="SHARE" />
				<ButtonIcons imgSrc="/images/products/twitter.png" Text="TWEET" />
				<ButtonIcons imgSrc="/images/products/pinterest.png" Text="PINT IT" />
			</div>
		</div>
	</div>
</section>

<Footer />
