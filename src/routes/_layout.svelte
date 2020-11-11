<script lang="ts">
	import Header from "../components/Header.svelte";

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		box-sizing: border-box;
	}
</style>

<Header segment="{segment}" />

<main>
	<slot />
</main>
