import m from 'mithril';
import { map } from 'lodash';

var breadcrumb = {};
breadcrumb.oninit = function () {};
breadcrumb.view = function (vnode) {
	var attrs = vnode.attrs;
	var l = attrs.items ? attrs.items.length : 0;
	return m("nav", {
		className: attrs.classes ? attrs.classes.join(" ") : "",
		"aria-label": "breadcrumb"
	}, m("ol.breadcrumb", [map(attrs.items, function (b, i) {
		return m("li.breadcrumb-item", {
			className: i === l - 1 ? "active" : "",
			"aria-current": i === l - 1 ? "page" : null
		}, [b.href ? m("a.title", { href: b.href, oncreate: m.route.link }, [b.text]) : m("span.title", [b.text])]);
	})]));
};

export default breadcrumb;
