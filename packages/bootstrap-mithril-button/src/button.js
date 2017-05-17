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
		type: attrs.href ? null : attrs.type || "button",
		oncreate: attrs.href ? m.route.link : null,
		disabled: attrs.disabled ? "disabled" : "",
		onclick: attrs.onclick
	}, [
		attrs.before, 
		attrs.label, 
		attrs.after
	])
}

export default button