import m from "mithril";

const navbar = {};
navbar.view = vnode => {
	const attrs = vnode.attrs;
	return m(
		"nav.navbar" + attrs.toggler ? ".navbar-expand-lg" : "",
		{
			className: attrs.classes ? attrs.classes.join(" ") : null,
		},
		[
			attrs.brand
				? m(
					"a",
					{
						href: attrs.brand.href ? attrs.brand.href : "/",
						oncreate: m.route.link,
					},
					attrs.brand.title
				  )
				: null,
			attrs.toggler
				? m(
					"button.navbar-toggler navbar-toggler-right",
					{
						type: "button",
						"data-toggle": "collapse",
						"aria-expanded": "false",
						"aria-label": "Toggle navigation",
					},
					[m("span.navbar-toggler-icon")]
				  )
				: null,
			attrs.navitems,
		]
	);
};

export default navbar;
