import m from 'mithril';

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

export default button;
