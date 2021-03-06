import m from 'mithril';

var formgroup = {};
formgroup.view = function (vnode) {
	var attrs = vnode.attrs;
	return m(".form-group", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	}, [attrs.label ? m("label", {
		for: attrs.inputId
	}, attrs.label) : null, attrs.input, attrs.valid || attrs.invalid ? m("div", {
		class: "." + (attrs.invalid ? "in" : "") + "-" + (attrs.validTooltips ? "tooltip" : "feedback")
	}, attrs.valid ? attrs.validMessage : attrs.invalidMessage) : null, attrs.helpText ? m("small.form-text", {
		className: attrs.helpTextClasses ? attrs.helpTextClasses.join(" ") : null,
		id: attrs.helpTextId
	}, attrs.helpText) : null]);
};

export default formgroup;
