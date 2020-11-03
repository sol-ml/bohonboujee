<script>
	import ItemWhitImage from "./ImagePrice.svelte";
	export let products;
</script>

<style>
	ul {
		display: grid;
		list-style-type: none;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px 40px;
		padding-inline-start: 0;
	}
	@media (max-width: 767.88px) {
		div {
			margin: 0 20px;
		}
	}

	@media (min-width: 768px) {
		div {
			width: 100%;
		}
		ul {
			width: 89%;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 30px 65px;
			margin: 0 auto;
			max-width: 1620px;
		}
	}
</style>

<div>
	<ul>
		{#each products as product, i}
			<li>
				<ItemWhitImage {...product} />
			</li>
		{/each}
	</ul>
</div>
