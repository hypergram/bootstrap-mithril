import m from 'mithril';

var card = {};
card.view = function (vnode) {
	var attrs = vnode.attrs;
	return m(".card", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	}, [attrs.header ? m(".card-header", {
		className: attrs.headerClasses ? attrs.headerClasses.join(" ") : null
	}, attrs.header) : null, attrs.body ? m(".card-body", {
		className: attrs.bodyClasses ? attrs.bodyClasses.join(" ") : null
	}, attrs.body) : null, attrs.footer ? m(".card-footer", {
		className: attrs.footerClasses ? attrs.footerClasses.join(" ") : null
	}, attrs.footer) : null]);
};

export default card;
