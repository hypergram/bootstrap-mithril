(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('mithril')) :
	typeof define === 'function' && define.amd ? define(['mithril'], factory) :
	(global['bootstrap-mithril'] = factory(global.m));
}(this, (function (m) { 'use strict';

	m = m && m.hasOwnProperty('default') ? m['default'] : m;

	var formgroup = {};
	formgroup.view = function (vnode) {
		var attrs = vnode.attrs;
		return m(".form-group", {
			className: attrs.classes ? attrs.classes.join(" ") : null
		}, [attrs.label ? m("label", {
			className: attrs.labelClasses ? attrs.labelClasses.join(" ") : null,
			for: attrs.id
		}, attrs.label) : null, attrs.input, attrs.valid || attrs.invalid ? m("div", {
			class: "." + (attrs.invalid ? "in" : "") + "-" + (attrs.validTooltips ? "tooltip" : "feedback")
		}, attrs.valid ? attrs.validMessage : attrs.invalidMessage) : null, attrs.helpText ? m("small.form-text", {
			className: attrs.helpTextClasses ? attrs.helpTextClasses.join(" ") : null,
			id: attrs.helpTextId
		}, attrs.helpText) : null]);
	};

	return formgroup;

})));
//# sourceMappingURL=bootstrap-mithril-formgroup.js.map
