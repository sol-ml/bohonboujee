<script>
	import TitleBackground from "../components/TitleBackground.svelte";
	import Hero from "./Hero.svelte";
	export let imgHeroHome;
	export let imgHeroDesktop;
	export let imgHeroMobile;
</script>

<style>
	.positionTitle {
		position: absolute;
	}

	.img {
		position: absolute;
	}

	@media (max-width: 767.88px) {
		.containerImgTitle {
			display: flex;
			justify-content: center;
			margin-bottom: 50%;
		}

		.img {
			width: 110%;
			top: 50%;
		}

		.positionTitle {
			left: 23%;
			bottom: -21%;
		}

		.TitleDesktop {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.containerImgTitle {
			max-width: 1620px;
			margin: auto;
			margin-bottom: 15%;
		}

		.img {
			top: 36%;
			width: 50%;
			left: -3%;
		}

		.positionTitle {
			left: 7%;
			bottom: -11%;
		}

		.TitleMobile {
			display: none;
		}
	}
</style>

<Hero imgHeroDesktop="{imgHeroDesktop}" imgHeroMobile="{imgHeroMobile}">
	<div class="containerImgTitle">
		<img class="img" alt="" src="{imgHeroHome}" />
		<div class="positionTitle">
			<div class="TitleMobile">
				<TitleBackground>Shop Now</TitleBackground>
			</div>
			<div class="TitleDesktop">
				<TitleBackground>Shop Accessories</TitleBackground>
			</div>
		</div>
	</div>
</Hero>
