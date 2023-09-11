---
title: "Event: composed property"
short-title: composed
slug: Web/API/Event/composed
page-type: web-api-instance-property
browser-compat: api.Event.composed
---

{{APIRef("Shadow DOM")}}

The read-only **`composed`** property of the
{{domxref("Event")}} interface returns a boolean value which indicates whether
or not the event will propagate across the shadow DOM boundary into the standard DOM.

All UA-dispatched UI events are composed (click/touch/mouseover/copy/paste, etc.). Most
other types of events are not composed, and so will return `false`. For
example, this includes synthetic events that are created without their
`composed` option set to `true`.

Propagation only occurs if the {{domxref("Event.bubbles", "bubbles")}} property is also
`true`. However, capturing only composed events are also handled at host as
if they were in `AT_TARGET` phase. You can determine the path the event will
follow through the shadow root to the DOM root by calling
{{domxref("Event.composedPath", "composedPath()")}}.

## Value

A boolean value which is `true` if the event will cross from the
shadow DOM into the standard DOM after reaching the shadow root. (That is, the first
node in the shadow DOM in which the event began to propagate.)

If this value is `false`, the shadow root will be the last node to be
offered the event.

## Examples

In this [example](https://mdn.github.io/web-components-examples/composed-composed-path/), we define two trivial custom elements, `<open-shadow>` and `<closed-shadow>`,
both of which take the contents of their text attribute and insert them into the element's
shadow DOM as the text content of a `<p>` element. The only difference
between the two is that their shadow roots are attached with their modes set to
`open` and `closed` respectively.

The two definitions look like this:

```js
customElements.define(
  "open-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "open",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);

customElements.define(
  "closed-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "closed",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);
```

We then insert one of each element into our page:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Then include a click event listener on the `<html>` element:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

When you click on the `<open-shadow>` element and then the
`<closed-shadow>` element, you'll notice two things.

1. The `composed` property returns `true` because the
   `click` event is always able to propagate across shadow boundaries.
2. A difference in the value of `composedPath` for the two
   elements.

The `<open-shadow>` element's composed path is this:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Whereas the `<closed-shadow>` element's composed path is a follows:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

In the second case, the event listeners only propagate as far as the
`<closed-shadow>` element itself, but not to the nodes inside the
shadow boundary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
