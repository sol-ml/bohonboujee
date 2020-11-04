<script>
	import Hero from "./Hero.svelte";
	import TitleBackground from "./TitleBackground.svelte";
	export let desktopImgSrc;
	export let mobileImgSrc;
	export let title;
	export let hideTitleOnDesktop;
</script>

<style>
	@media (max-width: 767.88px) {
		.position {
			position: absolute;
			top: 65%;
			width: 100%;
			text-align: center;
		}
	}

	@media (min-width: 768px) {
		.position {
			position: absolute;
			bottom: 10%;
			margin-left: -30px;
		}

		.hideTitleOnDesktop {
			display: none;
		}
	}
</style>

<Hero desktopImgSrc="{desktopImgSrc}" mobileImgSrc="{mobileImgSrc}">
	<div class="position" class:hideTitleOnDesktop>
		<TitleBackground>{title}</TitleBackground>
	</div>
</Hero>
