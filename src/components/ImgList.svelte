<script>
	import ImgTitle from "./ImgTitle.svelte";
	import Button from "./Button.svelte";
	import Subtitle from "./Subtitle.svelte";
	export let subtitle;
	export let buttonText;
	export let buttonHref;
	export let items;
</script>

<style>
	a {
		text-decoration: none;
		display: block;
	}
	.boton {
		margin: 35px 50px 0;
		display: flex;
		justify-content: center;
	}

	ul {
		flex-wrap: wrap;
		list-style-type: none;
		display: flex;
	}

	li {
		flex-grow: 1;
	}
	@media (max-width: 768px) {
		ul {
			padding: 0 20px;
		}

		li {
			flex-basis: calc(50% - 30px);
			margin-bottom: 15px;
		}

		li:nth-child(odd) {
			margin-right: 5px;
		}

		li:nth-child(even) {
			margin-left: 5px;
		}
	}

	@media (min-width: 768px) {
		.boton {
			margin-top: 50px;
		}
		ul {
			padding: 0 100px;
		}

		li {
			flex-basis: calc(25% - 30px);
			margin: 0 15px 30px;
		}

		li:nth-child(4n + 1) {
			margin-left: 0;
		}

		li:nth-child(4n) {
			margin-right: 0;
		}
	}
</style>

<Subtitle>{subtitle}</Subtitle>

<ul>
	{#each items as item, i}
		<li>
			<ImgTitle {...item} />
		</li>
	{/each}
</ul>

{#if buttonText}
	<a href="{buttonHref}" class="boton">
		<Button type="golden">{buttonText}</Button>
	</a>
{/if}
