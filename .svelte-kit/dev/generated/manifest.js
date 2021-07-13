const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/blogposts/__layout.svelte"),
	() => import("../../../src/routes/blogposts/second-post.md"),
	() => import("../../../src/routes/blogposts/first-post.md"),
	() => import("../../../src/routes/blogposts/third-post.md"),
	() => import("../../../src/routes/tags/[tag].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/blogposts/second-post.md
	[/^\/blogposts\/second-post\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/blogposts/first-post.md
	[/^\/blogposts\/first-post\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/blogposts/third-post.md
	[/^\/blogposts\/third-post\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/tags/[tag].svelte
	[/^\/tags\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ tag: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];