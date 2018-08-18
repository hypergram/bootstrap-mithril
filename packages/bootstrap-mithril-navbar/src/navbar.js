import m from "mithril";

const navbar = {};
navbar.view = vnode => {
	//const state = vnode.state
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
						data_toggle: "collapse",
						aria_expanded: "false",
						aria_label: "Toggle navigation",
						// onclick: btn => {
						// 	$(".navbar-collapse").collapse("toggle");
						// },
					},
					[m("span.navbar-toggler-icon")]
				  )
				: null,
			attrs.navitems,
		]
	);
};

export default navbar;
