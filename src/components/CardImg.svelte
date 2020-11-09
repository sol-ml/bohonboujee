<script>
	import TitleBackground from "./TitleBackground.svelte";
	import Subtitle from "./Subtitle.svelte";
	import Button from "./Button.svelte";
	export let title = "";
	export let imageTitle = "";
	export let paragraphs = [""];
	export let buttonText = "";
</script>

<style>
	section {
		background: rgb(189, 163, 123) url("/images/girl_background.png");
		background-blend-mode: soft-light;
		background-size: cover;
	}
	.imagePosition {
		position: relative;
	}
	.imageTitleContainer {
		position: absolute;
		bottom: 25px;
	}
	p {
		font-family: Open Sans;
		font-size: 26px;
		line-height: 35px;
		letter-spacing: 0.03em;
		margin-bottom: 35px;
	}

	@media (max-width: 960px) {
		.imageTitleContainer {
			width: 100%;
			text-align: center;
		}
		img {
			width: 100%;
		}
		.textContainer {
			padding: 50px 25px 75px;
		}
		.paragraphContainer {
			margin: 50px 0;
		}
	}

	@media (min-width: 960px) {
		section {
			display: flex;
			justify-content: center;
			padding: 120px 0 135px;
			align-items: center;
		}
		.imageContainer,
		.textContainer {
			width: 40%;
			max-width: 700px;
		}
		.imageContainer {
			text-align: right;
		}
		img {
			width: 100%;
			max-width: 534px;
			filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.25));
		}
		.textContainer {
			padding-left: 70px;
			box-sizing: border-box;
			text-align: left;
		}
		.paragraphContainer {
			margin: 60px 0 70px;
		}
		.imagePosition {
			display: inline-block;
			position: relative;
		}
		.imageTitleContainer {
			left: -10%;
		}
	}
</style>

<section>
	<div class="imageContainer">
		<div class="imagePosition">
			<img alt="girl.png" src="Images/girl.png" />
			<div class="imageTitleContainer">
				<TitleBackground>{imageTitle}</TitleBackground>
			</div>
		</div>
	</div>

	<div class="textContainer">
		<Subtitle position="position">{title}</Subtitle>
		<div class="paragraphContainer">
			{#each paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<a href="https://ar.pinterest.com/" target="_blank">
			<Button type="golden">{buttonText}</Button>
		</a>
	</div>
</section>
