import m from 'mithril';

var navbar = {};
navbar.view = function (vnode) {
	var attrs = vnode.attrs;
	return m("nav", {
		className: ["navbar", attrs.toggler ? "navbar-expand-lg" : null, "navbar-" + (attrs.color || "light"), "bg-" + (attrs.colorBg || attrs.color || "light")].join(" ")
	}, [attrs.brand ? m("a.navbar-brand", {
		href: attrs.brand.href ? attrs.brand.href : "/",
		oncreate: m.route.link
	}, attrs.brand.title) : null, attrs.toggler ? m("button.navbar-toggler navbar-toggler-right", {
		type: "button",
		"data-toggle": "collapse",
		"aria-expanded": "false",
		"aria-label": "Toggle navigation"
	}, [m("span.navbar-toggler-icon")]) : null, attrs.navitems]);
};

export default navbar;
