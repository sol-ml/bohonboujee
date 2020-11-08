declare interface ProductLookup {
	id: string;
	imgSrc: string;
	text: string;
	price: string;
}

declare interface Product extends ProductLookup {
	description: string;
}
