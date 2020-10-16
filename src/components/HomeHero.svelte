<script>
	import TitleBackground from "../components/TitleBackground.svelte";
	import Hero from "./Hero.svelte";
	export let imgHeroHome;
	export let imgHeroDesktop;
	export let imgHeroMobile;
</script>

<style>
	.position {
		position: absolute;
	}

	img {
		width: 100%;
	}
	@media (max-width: 767.88px) {
		.position {
			padding-left: 25%;
			bottom: 13%;
		}
	}

	@media (min-width: 768px) {
		/* .container {
			max-width: 1620px;
			margin: auto;
		} */
		.position {
			padding-left: 13%;
		}
	}
</style>

<Hero imgHeroDesktop="{imgHeroDesktop}" imgHeroMobile="{imgHeroMobile}">
	<img class="img" alt="" src="{imgHeroHome}" />
	<div class="position">
		<TitleBackground>Shop Now</TitleBackground>
	</div>
</Hero>
