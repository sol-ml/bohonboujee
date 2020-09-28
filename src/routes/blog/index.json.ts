import type { Request } from "polka";
import type { ServerResponse } from "http";
import posts from "./_posts";

const contents = JSON.stringify(
	posts.map((post) => {
		return {
			title: post.title,
			slug: post.slug,
		};
	}),
);

export function get(req: Request, res: ServerResponse): void {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(contents);
}
