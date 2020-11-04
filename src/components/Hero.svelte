<script>
	export let desktopImgSrc;
	export let mobileImgSrc;
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
		.desktopImg {
			display: none;
		}
	}

	@media (min-width: 768px) {
		div {
			width: 89%;
			margin: auto;
			max-width: 1620px;
		}

		.mobileImg {
			display: none;
		}
	}
</style>

<div>
	<img class="desktopImg" alt="" src="{desktopImgSrc}" />
	<img class="mobileImg" alt="" src="{mobileImgSrc}" />
	<slot />
</div>
