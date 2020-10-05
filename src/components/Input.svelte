<script>
	export let value = "";
	export let placeholder = "";
</script>

<style>
	input {
		font-weight: normal;
		font-family: "Open Sans";
		background: #ffffff;
		border: 1px solid #bda37b;
	}
</style>

<input bind:value placeholder="{placeholder}" />
