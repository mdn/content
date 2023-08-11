---
title: "Element: shadowRoot property"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
page-type: web-api-instance-property
browser-compat: api.Element.shadowRoot
---

{{APIRef("Shadow DOM")}}

The `Element.shadowRoot` read-only property
represents the shadow root hosted by the element.

Use {{DOMxRef("Element.attachShadow()")}} to add a shadow root to an existing element.

## Value

A {{DOMxRef("ShadowRoot")}} object instance, or `null` if the associated
shadow root was attached with its {{DOMxRef("ShadowRoot.mode", "mode")}} set to
`closed`. (See {{DOMxRef("Element.attachShadow()")}} for further details).

## Examples

The following snippets are taken from our [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)
example ([see it live also](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), which creates an element that displays a square of a size and color
specified in the element's attributes.

Inside the `<custom-square>` element's class definition we include
some life cycle callbacks that make a call to an external function,
`updateStyle()`, which actually applies the size and color to the element.
You'll see that we are passing it `this` (the custom element itself) as a
parameter.

```js
class Square extends HTMLElement {
  connectedCallback() {
    console.log("Custom square element added to page.");
    updateStyle(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom square element attributes changed.");
    updateStyle(this);
  }
}
```

In the `updateStyle()` function itself, we get a reference to the shadow DOM
using {{domxref("Element.shadowRoot")}}. From here we use standard DOM traversal
techniques to find the {{htmlelement("style")}} element inside the shadow DOM and then
update the CSS found inside it:

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach((childNode) => {
    if (childNode.nodeName === "STYLE") {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute("l")}px;
          height: ${elem.getAttribute("l")}px;
          background-color: ${elem.getAttribute("c")};
        }
      `;
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
