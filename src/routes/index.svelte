<script>
	import ImgList from "../components/ImgList.svelte";
	let items = [
		{
			title: "BRACELETS",
			href: "http://www.google.com",
			imgSrc: "/Images/categories/bracelets.png",
		},

		{
			title: "EARRINGS",
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/categories/earrings.png",
		},

		{
			title: "NECKLACES",
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/categories/necklaces.png",
		},

		{
			title: "HANDBAGS",
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/categories/handbags.png",
		},
	];

	let items2 = [
		{
			href: "http://www.google.com",
			imgSrc: "/Images/products/bracelet_1.png",
		},

		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/bracelet_2.png",
		},

		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/earrings_1.png",
		},
		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/earrings_2.png",
		},
		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/earrings_3.png",
		},
		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/earrings_4.png",
		},
		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/handbag.png",
		},
		{
			href: "http://www.mercadolibre.com",
			imgSrc: "/Images/products/necklaces.png",
		},
	];
</script>

<ImgList subtitle="SHOPPING FOR" buttonText="SHOP NOW" items="{items}" />
<ImgList subtitle="FEATURED PRODUCTS" items="{items2}" />
