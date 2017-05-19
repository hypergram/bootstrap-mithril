import m from 'mithril';

var navbar = {};
navbar.view = function (vnode) {
	//const state = vnode.state
	var attrs = vnode.attrs;
	return m(".navbar", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	});
};

export default navbar;
