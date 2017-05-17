import m from "mithril"
import * as bm from "../../bootstrap-mithril/dist/bootstrap-mithril"


var root = document.body

m.render(root, m(".container", [
	m(".row", [
		m(".col-sm-12", [
			m("h1", "Bootstrap Mithril"),
			m("p", "Bootstrap components for Mithril"),
			m("h2", "Buttons"),
			m("p", "Buttons"),
			m(bm.button, {
				label: "Primary",
				classes: ["btn-primary mr-1"]
			}),
			m(bm.button, {
				label: "Info with click event",
				classes: ["btn-info mr-1"],
				onclick: (evt) => {
					alert("clicked!")
				}
			}),
			m(bm.button, {
				label: "Success",
				classes: ["btn-success mr-1"],
				before: m("i.fa.fa-check mr-2")
			}),
			m(bm.button, {
				label: "Danger",
				classes: ["btn-danger mr-1"],
				after: m("i.fa.fa-times ml-2")
			}),
			m("hr"),
			m("p", "Button with link"),
			m(bm.button, {
				label: "Link",
				href: "#",
				classes: ["btn-info"]
			})
		])
	])
]))	