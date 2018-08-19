(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('mithril'), require('lodash')) :
	typeof define === 'function' && define.amd ? define(['mithril', 'lodash'], factory) :
	(global['bootstrap-mithril'] = factory(global.m,global.lodash));
}(this, (function (m,lodash) { 'use strict';

	m = m && m.hasOwnProperty('default') ? m['default'] : m;

	var breadcrumb = {};
	breadcrumb.oninit = function () {};
	breadcrumb.view = function (vnode) {
		var attrs = vnode.attrs;
		var l = attrs.items ? attrs.items.length : 0;
		return m("nav", {
			className: attrs.classes ? attrs.classes.join(" ") : "",
			aria_label: "breadcrumb"
		}, m("ol.breadcrumb", [lodash.map(attrs.items, function (b, i) {
			return m("li.breadcrumb-item", {
				className: i === l - 1 ? "active" : "",
				aria_current: i === l - 1 ? "page" : null
			}, [b.href ? m("a.title", { href: b.href, oncreate: m.route.link }, [b.text]) : m("span.title", [b.text])]);
		})]));
	};

	return breadcrumb;

})));
//# sourceMappingURL=bootstrap-mithril-breadcrumb.js.map
