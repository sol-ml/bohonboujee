<script>
	import ProductList from "./ProductList.svelte";
	export let products = [];
</script>

<style>
	ul {
		list-style-type: none;
		display: grid;
	}

	@media (max-width: 767.88px) {
		div {
			margin: 70px 20px 0;
		}

		ul {
			grid-template-columns: 1fr 1fr;
			margin: 0;
			padding: 0;
			column-gap: 15px;
			row-gap: 40px;
		}
	}

	@media (min-width: 768px) {
		div {
			width: 100%;
			margin-top: 32px;
		}

		ul {
			grid-template-columns: repeat(4, 1fr);
			margin: 0 auto;
			padding: 0;
			column-gap: 30px;
			row-gap: 65px;
			max-width: 1620px;
			width: 89%;
		}
	}
</style>

<div>
	<ul>
		{#each products as product, i}
			<li>
				<ProductList {...product} />
			</li>
		{/each}
	</ul>
</div>
