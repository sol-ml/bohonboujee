<script>
	import TitleBackground from "../components/TitleBackground.svelte";
	import Hero from "./Hero.svelte";
	export let homeImgSrc;
	export let desktopImgSrc;
	export let mobileImgSrc;
</script>

<style>
	.img {
		position: absolute;
	}

	@media (max-width: 767.88px) {
		.container {
			display: flex;
			justify-content: center;
			margin-bottom: 50%;
		}

		.img {
			width: 110%;
			top: 50%;
		}

		.mobileTitle {
			position: absolute;
			left: 23%;
			bottom: -21%;
		}

		.desktopTitle {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 1620px;
			margin: auto;
			margin-bottom: 15%;
		}

		.img {
			top: 36%;
			width: 50%;
			left: -3%;
		}

		.desktopTitle {
			position: absolute;
			left: 7%;
			bottom: -11%;
		}

		.mobileTitle {
			display: none;
		}
	}
</style>

<Hero desktopImgSrc="{desktopImgSrc}" mobileImgSrc="{mobileImgSrc}">
	<div class="container">
		<img class="img" alt="" src="{homeImgSrc}" />
		<div class="mobileTitle">
			<TitleBackground>Shop Now</TitleBackground>
		</div>
		<div class="desktopTitle">
			<TitleBackground>Shop Accessories</TitleBackground>
		</div>
	</div>
</Hero>
