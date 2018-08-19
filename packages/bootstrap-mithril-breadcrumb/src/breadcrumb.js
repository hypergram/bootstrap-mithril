import m from "mithril";
import { map } from "lodash";

const breadcrumb = {};
breadcrumb.oninit = () => {};
breadcrumb.view = vnode => {
	const attrs = vnode.attrs;
	const l = attrs.items ? attrs.items.length : 0;
	return m(
		"nav",
		{
			className: attrs.classes ? attrs.classes.join(" ") : "",
			"aria-label": "breadcrumb",
		},
		m("ol.breadcrumb", [
			map(attrs.items, (b, i) => {
				return m(
					"li.breadcrumb-item",
					{
						className: i === l - 1 ? "active" : "",
						"aria-current": i === l - 1 ? "page" : null,
					},
					[
						b.href
							? m(
								"a.title",
								{ href: b.href, oncreate: m.route.link },
								[b.text]
							  )
							: m("span.title", [b.text]),
					]
				);
			}),
		])
	);
};

export default breadcrumb;
