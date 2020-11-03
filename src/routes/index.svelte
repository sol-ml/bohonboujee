<script>
	import Subtittle from "../components/Subtittle.svelte";
	import TitleBackground from "../components/TitleBackground.svelte";
	import Button from "../components/Button.svelte";
	import Grid from "../components/ItemWhitImage.svelte";
	let products = [
		{
			imgSrc: "/images/products/bracelet_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
			id: "loquesea",
		},

		{
			imgSrc: "/images/products/bracelet_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},
		{
			imgSrc: "/images/products/bracelet_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
			id: "loquesea",
		},

		{
			imgSrc: "/images/products/bracelet_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_1.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},

		{
			imgSrc: "/images/products/earrings_2.png",
			text: "Minimal Double-Strand Hoop Pendant Necklace",
			price: "$35",
		},
	];
</script>

<Subtittle>SHOPPING FOR</Subtittle>

<TitleBackground>Shop Now</TitleBackground>
<TitleBackground>Shop Accesories</TitleBackground>

<Button>SHOP NOW</Button>
<p></p>
<Button type="light">SHOP NOW</Button>
<p></p>
<Button type="golden">SHOP NOW</Button>

<Grid products="{products}" />
