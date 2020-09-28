declare interface PostTitle {
	title: string;
}

declare interface PostLookup extends PostTitle {
	slug: string;
}

declare interface PostInfo extends PostTitle {
	html: string;
}
