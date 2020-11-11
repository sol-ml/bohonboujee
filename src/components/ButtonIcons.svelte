<script>
	export let imgSrc;
	export let Text;
	export let href;
</script>

<style>
	.container {
		border: 1px solid lightgray;
		width: 130px;
		height: 40px;
		border-radius: 4px;
		margin-right: 10px;
	}
	a {
		display: flex;
		text-decoration: none;
		padding: 6px;
	}
	.text {
		font-family: open sans;
		font-weight: bold;
		margin-left: 10px;
	}

	@media (min-width: 768px) {
		.container {
			height: 50px;
		}
		a {
			padding: 10px;
		}
	}
</style>

<div class="container">
	<a href="{href}">
		<img alt="a" src="{imgSrc}" />

		<div class="text">{Text}</div>
	</a>
</div>
