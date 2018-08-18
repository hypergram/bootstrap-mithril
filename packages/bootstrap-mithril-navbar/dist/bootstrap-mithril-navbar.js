(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('mithril')) :
	typeof define === 'function' && define.amd ? define(['mithril'], factory) :
	(global['bootstrap-mithril'] = factory(global.m));
}(this, (function (m) { 'use strict';

	m = m && m.hasOwnProperty('default') ? m['default'] : m;

	var navbar = {};
	navbar.view = function (vnode) {
		//const state = vnode.state
		var attrs = vnode.attrs;
		return m("nav.navbar" + attrs.toggler ? ".navbar-expand-lg" : "", {
			className: attrs.classes ? attrs.classes.join(" ") : null
		}, [attrs.brand ? m("a", {
			href: attrs.brand.href ? attrs.brand.href : "/",
			oncreate: m.route.link
		}, attrs.brand.title) : null, attrs.toggler ? m("button.navbar-toggler navbar-toggler-right", {
			type: "button",
			data_toggle: "collapse",
			aria_expanded: "false",
			aria_label: "Toggle navigation"
			// onclick: btn => {
			// 	$(".navbar-collapse").collapse("toggle");
			// },
		}, [m("span.navbar-toggler-icon")]) : null, attrs.navitems]);
	};

	return navbar;

})));
//# sourceMappingURL=bootstrap-mithril-navbar.js.map
