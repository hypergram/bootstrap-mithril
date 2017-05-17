# bootstrap-mithril-button
## Usage

~~~javascript
import m from "mithril";
import button from "bootstrap-mithril-button";

const myButton = m(button, {
  label: "Button"
});
~~~

Add a URL:

~~~javascript
const myButton = m(button, {
  label: "Button",
  url: {
    href: "/index",
    oncreate: m.route.link
  }
});
~~~

Add an onclick event:

~~~javascript
const myButton = m(button, {
  label: "Button",
  events: {
    onclick: () => console.log("click")
  }
});
~~~