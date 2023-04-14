function wrapInParagraph(str) {
	return str
		.split("\n")
		.map((paragraph) => `<p>${paragraph}</p>`)
		.join("\n");
}
