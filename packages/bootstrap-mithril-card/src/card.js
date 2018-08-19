import m from "mithril";

const card = {};
card.view = vnode => {
	//const state = vnode.state
	const attrs = vnode.attrs;
	return m(
		".card",
		{
			className: attrs.classes ? attrs.classes.join(" ") : null,
		},
		[
			attrs.header
				? m(
					".card-header",
					{
						className: attrs.headerClasses
							? attrs.headerClasses.join(" ")
							: null,
					},
					attrs.header
				  )
				: null,
			attrs.body
				? m(
					".card-body",
					{
						className: attrs.bodyClasses
							? attrs.bodyClasses.join(" ")
							: null,
					},
					attrs.body
				  )
				: null,
			attrs.footer
				? m(
					".card-footer",
					{
						className: attrs.footerClasses
							? attrs.footerClasses.join(" ")
							: null,
					},
					attrs.footer
				  )
				: null,
		]
	);
};

export default card;
