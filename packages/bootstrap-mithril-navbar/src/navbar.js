import m from "mithril";

const navbar = {}
navbar.view = (vnode) => {
	//const state = vnode.state
	const attrs = vnode.attrs
	return m(".navbar", {
		className: attrs.classes ? attrs.classes.join(" ") : null
	})
}

export default navbar