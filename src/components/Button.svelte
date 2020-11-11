<script>
	export let type = "dark";
	export let size = "defoult";
</script>

<style>
	button {
		width: 100%;
		height: 70px;
		border: none;
		font-family: "Open Sans";
		font-size: 20px;
		font-weight: bold;
		text-decoration: underline;
	}

	.dark {
		background-color: black;
		color: white;
	}

	.light {
		background-color: white;
		color: #bda37b;
		border: 1px solid #bda37b;
	}

	.golden {
		background-color: #bda37b;
		color: white;
	}

	@media (min-width: 768px) {
		button {
			width: 240px;
		}

		button {
			width: 556px;
		}
	}
</style>

<button class="{type} {size}">
	<slot />
</button>
