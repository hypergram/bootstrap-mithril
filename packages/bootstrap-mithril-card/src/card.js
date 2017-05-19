import m from "mithril";

const card = {}
card.view = (vnode) => {
	//const state = vnode.state
	const attrs = vnode.attrs
	return m(".card", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	})
}

export default card