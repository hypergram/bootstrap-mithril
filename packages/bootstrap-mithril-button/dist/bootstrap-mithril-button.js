(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('mithril')) :
	typeof define === 'function' && define.amd ? define(['mithril'], factory) :
	(global['bootstrap-mithril'] = factory(global.m));
}(this, (function (m) { 'use strict';

	m = m && m.hasOwnProperty('default') ? m['default'] : m;

	var button = {};
	button.oninit = function () {};
	button.view = function (vnode) {
		//const state = vnode.state
		var attrs = vnode.attrs;
		var element = (attrs.href ? "a" : "button") + ".btn";
		return m(element, {
			className: attrs.classes ? attrs.classes.join(" ") : "btn-default",
			href: attrs.href || null,
			type: attrs.href ? null : attrs.type || "button",
			oncreate: attrs.href ? m.route.link : null,
			disabled: attrs.disabled ? "disabled" : "",
			onclick: attrs.onclick
		}, [attrs.before, attrs.label, attrs.after]);
	};

	return button;

})));
//# sourceMappingURL=bootstrap-mithril-button.js.map
