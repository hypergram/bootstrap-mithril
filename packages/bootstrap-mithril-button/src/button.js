import m from "mithril";

const button = {}
button.oninit = () => {
}
button.view = (vnode) => {
	//const state = vnode.state
	const attrs = vnode.attrs
	const element = `${attrs.href ? "a" : "button"}.btn`
	return m(element, {
		className: attrs.classes ? attrs.classes.join(" ") : "btn-default",
		href: attrs.href || null,
		oncreate: attrs.href ? m.route.link : null,
		disabled: attrs.disabled ? "disabled" : ""
	}, [
		attrs.before, 
		attrs.label, 
		attrs.after
	])
}

export default button