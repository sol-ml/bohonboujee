<style>
	.container {
		position: relative;
		display: inline-block;
	}

	h1 {
		font-family: "Mr De Haviland";
		color: black;
		font-size: 70px;
		line-height: 81px;
		position: relative;
		margin: 0 20px;
	}

	.background {
		position: absolute;
		background: rgba(189, 163, 123, 0.8);
		width: 100%;
		height: 60px;
		bottom: 0;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 85px;
			line-height: 98px;
		}

		.background {
			height: 74px;
		}
	}
</style>

<div class="container">
	<div class="background"></div>
	<h1>
		<slot />
	</h1>
</div>
