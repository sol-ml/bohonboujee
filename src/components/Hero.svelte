<script>
	export let imgHeroDesktop;
	export let imgHeroMobile;
</script>

<style>
	@media (max-width: 767.88px) {
		.imgDesktop {
			display: none;
		}
		.imgMobile {
			width: 100%;
		}
	}
	@media (min-width: 768px) {
		.imgDesktop {
			width: 89%;
			margin: auto;
			display: block;
			max-width: 1620px;
		}
		.imgMobile {
			display: none;
		}
	}
</style>

<img class="imgDesktop" alt="a" src="{imgHeroDesktop}" />
<img class="imgMobile" alt="a" src="{imgHeroMobile}" />
