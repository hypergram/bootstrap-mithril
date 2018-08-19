import m from "mithril";
import * as bm from "bootstrap-mithril";

var root = document.body;

m.render(
	root,
	m(".container", [
		m(".row", [
			m(".col-sm-12", [
				m("h1", "Bootstrap Mithril"),
				m("p", "Bootstrap components for Mithril"),
				m("section", [
					m("h2", "Buttons"),
					m(bm.button, {
						label: "Primary",
						classes: ["btn-primary mr-1"],
					}),
					m(bm.button, {
						label: "Info with click event",
						classes: ["btn-info mr-1"],
						onclick: evt => {
							alert("clicked!");
						},
					}),
					m(bm.button, {
						label: "Success",
						classes: ["btn-success mr-1"],
						before: m("i.fa.fa-check mr-2"),
					}),
					m(bm.button, {
						label: "Danger",
						classes: ["btn-danger mr-1"],
						after: m("i.fa.fa-times ml-2"),
					}),
					m("hr"),
					m("p", "Button with link"),
					m(bm.button, {
						label: "Link",
						href: "#",
						classes: ["btn-info"],
					}),
				]),
				m("hr"),
				m("section", [
					m("h2", "Breadcrumb"),
					m(bm.breadcrumb, {
						items: [
							{ href: "/", text: "Home" },
							{ href: "/", text: "Link 1" },
							{ text: "Link 2 (Active)" },
						],
					}),
				]),
				m("hr"),
				m("section", [
					m("h2", "Card"),
					m(".card-deck", [
						m(bm.card, {
							classes: ["bg-light mb-3"],
							header: "Card 1",
							body: m("p", "Card body"),
						}),
						m(bm.card, {
							classes: ["bg-primary text-white mb-3"],
							body: m("p", "Card body"),
							footer: "Card Footer",
							footerClasses: ["text-muted"],
						}),
						m(bm.card, {
							classes: ["bg-dark text-white mb-3"],
							body: m("p", "Card body"),
						}),
					]),
				]),
				m("hr"),
				m("section", [
					m("h2", "Form group"),
					m(bm.formgroup, {
						label: "Name",
						inputId: "exampleInput1",
						input: m("input.form-control", {
							type: "text",
							id: "exampleInput1",
							"aria-describedby": "exampleInput1Help",
						}),
						helpText: "Helpful info here",
						helpTextClasses: ["text-muted"],
						helpTextId: "exampleInput1Help",
					}),
				]),
				m("hr"),
			]),
		]),
	])
);
