<script context="module" lang="ts">
	export function preload(/* { params, query } */): void {
		return this.fetch(`shop.json`)
			.then((r: Body) => r.json())
			.then((products: ProductLookup[]) => {
				return { products };
			});
	}
</script>

<script lang="ts">
	import List from "../../components/List.svelte";
	export let products: ProductLookup[];
	$: filteredProducts = products;
</script>

<svelte:head>
	<title>Shop</title>
</svelte:head>
<!--
<Filter products="{products}" bind:filteredProducts />
 -->
<List products="{filteredProducts}" />
