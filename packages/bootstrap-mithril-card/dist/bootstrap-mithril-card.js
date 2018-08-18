(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('mithril')) :
	typeof define === 'function' && define.amd ? define(['mithril'], factory) :
	(global['bootstrap-mithril'] = factory(global.m));
}(this, (function (m) { 'use strict';

	m = m && m.hasOwnProperty('default') ? m['default'] : m;

	var card = {};
	card.view = function (vnode) {
		//const state = vnode.state
		var attrs = vnode.attrs;
		return m(".card", {
			className: attrs.classes ? attrs.classes.join(" ") : null
		});
	};

	return card;

})));
//# sourceMappingURL=bootstrap-mithril-card.js.map
