import m from 'mithril';

var card = {};
card.view = function (vnode) {
	//const state = vnode.state
	var attrs = vnode.attrs;
	return m(".card", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	});
};

export default card;
