import type { Request } from "polka";
import type { ServerResponse } from "http";
import products from "./_products";

const contents = JSON.stringify(
	products.map((product) => {
		return {
			slug: product.slug,
			imgSrc: product.imgSrc,
			text: product.text,
			price: product.price,
		};
	}),
);

export function get(req: Request, res: ServerResponse): void {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(contents);
}
