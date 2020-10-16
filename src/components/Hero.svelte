<script>
	export let imgHeroDesktop;
	export let imgHeroMobile;
</script>

<style>
	div {
		position: relative;
	}

	img {
		width: 100%;
		display: block;
	}

	@media (max-width: 767.88px) {
		.imgDesktop {
			display: none;
		}
	}

	@media (min-width: 768px) {
		div {
			width: 89%;
			margin: auto;
			max-width: 1620px;
		}

		.imgMobile {
			display: none;
		}
	}
</style>

<div>
	<img class="imgDesktop" alt="a" src="{imgHeroDesktop}" />
	<img class="imgMobile" alt="a" src="{imgHeroMobile}" />
	<slot />
</div>
