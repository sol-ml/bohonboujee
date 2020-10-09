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
		display: inline;
	}

	.background {
		position: absolute;
		background: rgba(189, 163, 123, 0.8);
		width: 100%;
		height: 70%;
		bottom: 0;
	}
</style>

<div class="container">
	<div class="background"></div>
	<h1>
		<slot />
	</h1>
</div>
